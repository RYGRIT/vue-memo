import { localGetItem } from './../../utils/index'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserType } from './type'
import { localSetItem, genId, ImitateHttp } from '@/utils/index'

/*
export default defineStore({
  id: 'user',
  state: () => ({
    userInfo: null as UserType | null
  }),
  actions: {
    setUser(user: UserType) {

    }
  }
})
*/

export default defineStore('user', () => {
  const userInfo = ref<UserType | null>(null)

  function setUser(user: UserType) {
    userInfo.value = user
    localSetItem('login_user', user)
  }

  // register
  function register(form: UserType) {
    return ImitateHttp(s => {
      form.userId = genId()
      localSetItem('register_user', form)
      s('ok')
    })
  }

  // login
  function login(form: UserType) {
    const registerUser = localGetItem('register_user')
    return ImitateHttp((s, f) => {
      if (!registerUser) {
        f('no register')
      } else {
        const user: UserType = registerUser
        if (user.phone === form.phone && user.password === form.password) {
          setUser(user)
          s('ok')
        } else {
          f('error')
        }
      }
    })
  }

  return {
    userInfo,
    setUser,
    register,
    login
  }
})
