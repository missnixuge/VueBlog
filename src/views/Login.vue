<template>
  <el-row type="flex" justify="center">
      <el-card v-if="isLogin">
          欢迎：admins
          <br>
          <br>
          <el-button type="primary" icon="el-icon-upload" @click="loginOut">退出登录</el-button>
      </el-card>
      <el-form v-else ref="loginForm" :model="user" :rules="rules" status-icon label-width="50px">
          <el-form-item label="账号" prop="name">
              <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
              <el-input v-model="user.pass" type="password"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
          </el-form-item>
      </el-form>
  </el-row>
</template>

<script>
export default {
methods: {
  login: function() {
    let that = this;
      that.$store.commit("saveToken", "");//清掉 token
      this.$refs.loginForm.validate(valid => {
      if (valid) {
        this.$api.get(
          "Login/Token0",
          { name: that.user.name, pass: that.user.pass },
          r => {
            if (r.data.success) {
              var token = r.data.token;
              console.log(r.data.token);
              that.$store.commit("saveToken", token);//保存 token
              this.$notify({
                type: "success",
                message: "欢迎你," + this.user.name + "!",
                duration: 3000
              });
              console.log(that.$store.state.token);
              this.$router.replace("/");
            } else {
              this.$message({
                type: "error",
                message: "用户名或密码错误",
                showClose: true
              });
            }
          }
        );
      } else {
        return false;
      }
    });
  },
    loginOut(){
        this.isLogin=false;
        this.$store.commit("saveToken", "");//清掉 token

    }
},
data() {
  return {
      isLogin:false,
    user: {},
    rules: {
      name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
    }
  };
},
  created() {
      if (window.localStorage.Token&&window.localStorage.Token.length>=128){
          this.isLogin=true;
      }
  }

};
</script>