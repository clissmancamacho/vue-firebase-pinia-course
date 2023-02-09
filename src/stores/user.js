import { defineStore } from "pinia"
import { computed, ref } from "vue"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "../../firebaseConfig"
import router from "../routes"

export const useUserStore = defineStore("user", () => {
  const userData = ref(null)
  const loadingUser = ref(true)
  const loadingSession = ref(false)

  const registerUser = async (email, password) => {
    loadingUser.value = true
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      userData.value = {
        uid: user.uid,
        email: user.email,
      }
    } catch (error) {
      console.log(error)
    } finally {
      loadingUser.value = false
    }
  }

  const loginUser = async (email, password) => {
    loadingUser.value = true
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      userData.value = {
        uid: user.uid,
        email: user.email,
        accessToken: user.accessToken,
      }
    } catch (error) {
      console.log(error)
    } finally {
      loadingUser.value = false
    }
  }

  const logoutUser = async () => {
    loadingUser.value = true
    try {
      await signOut(auth)
      userData.value = null
      router.push("/")
    } catch (error) {
      console.log(error)
    } finally {
      loadingUser.value = false
    }
  }

  const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            userData.value = {
              uid: user.uid,
              email: user.email,
              accessToken: user.accessToken,
            }
          } else {
            userData.value = null
          }
          resolve(userData.value)
        },
        (e) => reject(e)
      )
      unsubscribe()
    })
  }

  return {
    userData,
    loadingUser,
    loadingSession,
    registerUser,
    loginUser,
    logoutUser,
    currentUser,
  }
})
