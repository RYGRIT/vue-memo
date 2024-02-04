<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'LoginView'
})

const isLogin = ref(true)
const form = ref({
  username: '',
  password: '',
  phone: ''
})

const router = useRouter()
const { register, login } = userStore()
const submitForm = async () => {
  if (isLogin.value) {
    try {
      // 登录
      let res = await login(form.value)
      if (res === 'ok') {
        router.push('/')
        return ElMessage.success('登录成功')
      } else {
        return ElMessage.error('登录失败')
      }
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return ElMessage.error((err as any).toString())
    }
  } else {
    // 注册
    let res = await register(form.value)
    if (res === 'ok') {
      router.push('/login')
      return ElMessage.success('注册成功')
    } else {
      return ElMessage.error('注册失败')
    }
  }
}
</script>

<template>
  <div class="login-page">
    <el-form class="login-form">
      <h2 class="title">{{ isLogin ? '登录' : '注册' }}</h2>
      <el-form-item v-if="!isLogin">
        <el-input placeholder="用户名" size="large" v-model="form.username" />
      </el-form-item>
      <el-form-item>
        <el-input placeholder="手机号" size="large" v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" size="large" v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm" class="btn" type="primary">
          {{ isLogin ? '提交' : '注册' }}</el-button
        >
        <div class="text-row">
          <span class="text-wrap" @click="isLogin = !isLogin">
            <span>
              {{ isLogin ? '没有账号？去注册' : '已有账号？去登录' }}
            </span>
          </span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  width: 360px;
  background: #fff;
  padding: 30px 50px 10px 50px;
  border-radius: 7px;
  margin: 20px auto;
  box-shadow: var(--el-box-shadow);

  .title {
    text-align: center;
    margin-bottom: 18px;
  }

  .btn {
    width: 100%;
  }

  .text-row {
    margin-left: auto;

    .text-wrap {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
