<template>
  <div>
    <!-- 旋转图片 -->
    <div class="rotate">
      <div class="middle">
        <img src="../assets/img/login/icon/quan1.png" alt="" />
      </div>
      <div class="small">
        <img src="../assets/img/login/icon/diqiu.png" alt="" />
      </div>
      <div class="line-big">
        <img src="../assets/img/login/icon/quan2.png" alt="" />
      </div>
    </div>
    <!-- 顶部 -->
    <div class="accounts-login">
      <p class="aa">账号登录</p>
      <router-link to="/enroll" style="text-decoration:none;">
        <p class="bb">账号注册</p>
      </router-link>
    </div>
    <!-- 账号密码 -->
    <div class="accounts-login-input">
      <!-- 账号 -->
      <div class="accounts-login-input-zh">
        <img src="../assets/img/login/phone.png" alt="" class="img1" />
        <input
          v-model="username"
          type="text"
          placeholder="请输入登录手机号"
          class="input1"
        />
        <img
          src="../assets/img/login/close.png"
          alt=""
          class="img1"
          @click="imgClick1"
        />
      </div>
      <!-- 密码 -->
      <div class="accounts-login-input-zh">
        <img src="../assets/img/login/jiesuo.png" alt="" class="img1" />
        <input type="text" v-if="pwdType" v-model="password" style="
            border: none;
            outline: none;
            padding: 12px;
            margin: 12px;
            width: 350px;
          "/>
        <input
          style="
            border: none;
            outline: none;
            padding: 12px;
            margin: 12px;
            width: 350px;
          "
          type="password"
          placeholder="输入新密码"
          v-model="password"
          v-else
        />
        <img
          :src="seen ? seenImg : unseenImg"
          @click="changeType()"
          v-on:mouseover="hoverEye"
          v-on:mouseout="outEye"
          class="img1"
        />
      </div>
    </div>
    <!-- 忘记密码 -->
    <div class="wjmm">
      <p class="wjmm-p">忘记密码？</p>
    </div>
    <!-- 登录 -->
    <div class="btnLogin">
      <button class="btnClass" @click="btnLoginClick">登录</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      seen: "",
      unseenImg: require("../assets/img/login/pwd.png"), //看不见密码时小眼睛的显示图片地址
      seenImg: require("../assets/img/login/show_pwd.png"), //看得见密码时小眼睛的显示图片地址
      pwdType: false, //此时文本框隐藏，显示密码框
    };
  },
  methods: {
    changeType: function () {
      this.seen = !this.seen; //小眼睛的变化
      this.pwdType = !this.pwdType; //跟着小眼睛变化，密码框隐藏，显示文本框 内容就显示了
    },
    hoverEye: function (event) {
      console.log(event);
      this.seen = !this.seen;
    },
    outEye: function (event) {
      this.seen = !this.seen;
    },
    btnLoginClick() {
      if (this.username == "") {
        alert("请输入登录账号");
        return false;
      }
      if (this.password == "") {
        alert("请输入登录密码");
        return false;
      }
      axios({
        url: "http://81.68.233.243:3000/user/login",
        dataType: "json",
        method: "post",
        data: {
          us: this.username,
          ps: this.password,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            alert(res.data.msg);
            this.$router.push("/home");
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imgClick1() {
      this.username = "";
    },
  },
};
</script>

<style lang="stylus">
@import '../assets/css/login_icon.css';
@import '../assets/css/common.styl';

.accounts-login {
  display: flex;
  align-items: center;
  // position absolute
}

.img1 {
  width: 1rem;
  height: 1rem;
  border: none;
  outline: none;
}

.aa {
  color: blue;
  font-size: 30px;
  position: relative;
  left: 25px;
}

.bb {
  font-size: 20px;
  position: relative;
  left: 50px;
  color blue
}

.accounts-login-input {
  display: flex;
  flex-direction: column;
}

.accounts-login-input-zh {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border-bottom: 1px solid red;
}

.input1 {
  border: none;
  outline: none;
  padding: 12px;
  margin: 12px;
  width: 350px;
}

.wjmm {
  position: relative;
}

.wjmm-p {
  color: blue;
  position: relative;
  left: 280px;
  top: 25px;
  font-size: 15px;
}

.btnLogin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnClass {
  position: fixed;
  top: 15rem;
  width: 50%;
  height: 1.5rem;
  background-color: blue;
  color: white;
  border: none;
  outline: none;
  font-size: .5rem;
}
</style>