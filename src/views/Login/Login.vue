<template>
  <div class="login">
    <el-card class="login-wrapper">
      <img src="@/assets/imgs/logo_index.png" alt="" />
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input
            placeholder="请输入手机号"
            v-model="loginForm.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.code"
          ></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <el-checkbox v-model="loginForm.type"
            >我已经阅读和同意用户协议和隐私条款</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isloading"
            type="primary"
            class="codebtn"
            @click="onsubmit"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { loginAPI } from '@/api/index.js'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        mobile: '13911111111', // 手机号
        check: '', // 验证码
        code: '246810', // 密码
        type: true // 协议是否勾选
      },
      isloading: false,
      rules: {
        mobile: [
          { pattern: /^1[3|4|5|6|7|8|9]\d{9}$/, required: true, message: '请输入正确的手机号！', trigger: 'blur', min: 11, max: 11 }
        ],
        code: [
          { required: true, len: 6, message: '请输入正确的验证码！' }
        ],
        type: [
          {
            validator: (rule, value, callback) => {
              if (value === false) {
                callback(new Error('请勾选协议'))
              } else {
                callback()
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    onsubmit () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid === false) return
        const res = await loginAPI(this.loginForm)// await可以把回调函数干掉（不用then了）只会接受promise成功的结果
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/imgs/login_bg.jpg) no-repeat center / cover;
  .login-wrapper {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto 20px;
    }
    .codebtn {
      width: 100%;
    }
  }
}
</style>
