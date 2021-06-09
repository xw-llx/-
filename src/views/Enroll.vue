<template>
  <div>
    <!-- 返回上一级 -->
    <div>
      <img
        src="../assets/img/login/jiantou.png"
        alt=""
        @click="imgClick"
        class="img2"
      />
    </div>
    <div class="accounts-login">
      <p class="aa">账号注册</p>
    </div>
    <div class="accounts-login-input">
      <div class="accounts-login-input-zh">
        <img src="../assets/img/login/phone.png" alt="" class="img1" />
        <input
          v-model="username"
          type="text"
          placeholder="请输入注册的账号"
          class="input1"
        />
        <img src="../assets/img/login/close.png" alt="" class="img1" @click="imgClick1"/>
      </div>
      <div class="accounts-login-input-zh">
        <img src="../assets/img/login/jiesuo.png" alt="" class="img1" />
        <input type="text" v-if="pwdType" v-model="password" style="
            border: none;
            outline: none;
            padding: .2rem;
            margin: .4rem;
            width: 70%;
          "/>
        <input
          style="
            border: none;
            outline: none;
            padding: .2rem;
            margin: .4rem;
            width: 70%;
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
        <!-- <input
          v-model="password"
          type="number"
          placeholder="请输入登录密码"
          class="input1"
        />
        <img src="../assets/img/login/pwd.png" alt="" class="img1" @click="imgClick2"/> -->
      </div>
      <!-- <div class="accounts-login-input-zh">
        <img src="../assets/img/login/dun.png" alt="" class="img1" />
        <input type="text" placeholder="请输入验证码" class="input1" />
        <p class="p1">获取验证码</p>
      </div> -->
      <div class="btnLogin">
        <button class="btnClass" @click="btnClick">注册</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      cc: "",
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
    imgClick() {
      this.$router.go(-1);
    },
    btnClick() {
      // 判断输入框是否有内容
      if (this.username == "") {
        alert("请先输入要注册的账号");
        return false;
      }
      if (this.password == "") {
        alert("请先输入要注册的密码");
        return false;
      }
      axios({
        url: "http://81.68.233.243:3000/user/regist",
        dataType: "json",
        method: "post",
        data: {
          us: this.username,
          ps: this.password,
        },
      })
        .then((aa) => {
          if (aa.data.code == 200) {
            this.cc = aa;
            alert("注册成功！");
            this.$router.go(-1);
          } else {
            alert(aa.data.msg);
            // 账户名存在的时候 清空输入框
            this.username=""
            this.password=""
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imgClick1(){
      // 清空输入框的内容
      this.username=''
    },
    imgClick2(){
    }
  },
};
</script>

<style scoped>
.accounts-login {
  display: flex;
  align-items: center;
}

.img1 {
  width: 1rem;
  height: 1rem;
  border: none;
  outline: none;
}
.img2 {
  width: 1rem;
  height: 1rem;
  border: none;
  outline: none;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg);
}

.aa {
  color: blue;
  font-size: .9rem;
  position: relative;
  left: 25px;
  padding: 60px 0 0 0;
}

.bb {
  font-size: 20px;
  position: relative;
  left: 50px;
}

.accounts-login-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.accounts-login-input-zh {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border-bottom: 1px solid gray;
}

.input1 {
  border: none;
  outline: none;
  padding: 12px;
  margin: 12px;
  width: 70%;
}
.input1::placeholder {
  font-size: 8px;
}
.p1 {
  color: blue;
  width: 26%;
}
.btnLogin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnClass {
  position: fixed;
  top: 12rem;
  width: 90%;
  height: 1.5rem;
  background-color: blue;
  color: white;
  border: none;
  outline: none;
  font-size: .6rem;
}
</style>