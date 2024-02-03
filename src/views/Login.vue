<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'LoginView'
})

const isLogin = ref(true)
const form = ref({
  username: '',
  password: '',
  phone: ''
})

const submitForm = () => {}
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
