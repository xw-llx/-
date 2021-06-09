<template>
  <div class="con">
    <!-- 返回上一级 -->
    <div class="return">
      <img
        src="../assets/img/login/jiantou.png"
        alt=""
        @click="imgClick"
        class="img2"
      />
      <span class="fbdtP">发布动态</span>
    </div>
    <!-- 顶部 -->
    <div class="top">
      <div class="topLeft">
        <p class="topLeftP">+</p>
      </div>
      <div class="topRight"></div>
    </div>
    <!-- 中部 -->
    <div class="center">
      <div class="centerTop">
        <p class="centerTop-p">公开</p>
        <p class="centerTop-p">不公开</p>
        <img src="../assets/img/postion.png" class="centerTopImg">
        <p>发送到信息共享平台</p>
      </div>
      <div class="centerBottom">
        <input type="text" class="centerBottomInput" placeholder="请输入要发布的内容">
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 左 -->
      <div class="bottom-img-p">
        <img
          src="../assets/img/footer_img/InternetWorld.png"
          class="bottom-img"
        />
        <p class="pp">互联世界</p>
      </div>
      <!-- 中 -->
      <div class="bottom-img-p">
        <img src="../assets/img/footer_img/friend.png" class="bottom-img" />
        <p class="pp">我的好友</p>
      </div>
      <!-- 右 -->
      <div class="bottom-img-p">
        <img src="../assets/img/footer_img/setUp.png" class="bottom-img" />
        <p class="pp">个人中心</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    imgClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.con {
  width: 100%;
}
.return {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fbdtP {
  font-size: 0.6rem;
}
.img2 {
  width: 0.6rem;
  height: 0.6rem;
  position: relative;
  right: 3.6rem;
  border: none;
  outline: none;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg);
}
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0 0 0;
}
.topLeft {
  width: 2.5rem;
  height: 2.5rem;
  /* border: 2px solid green; */
  border-radius: 50%;
  /* 20px的阴影大小，没有拓展，颜色绿黄色 */
  /* box-shadow: 0px 0px 20px greenyellow; */
  background-color: #95ff5f;
}
.topLeftP {
  font-size: 3rem;
  position: relative;
  color: white;
  bottom: 4rem;
  left: 0.16rem;
}
.topRight {
  width: 6.5rem;
  height: 6.5rem;
  /* border: 2px solid green; */
  border-radius: 10%;
  /* 20px的阴影大小，没有拓展，颜色绿黄色 */
  /* box-shadow: 0px 0px 20px greenyellow; */
  background-color: #21b070;
}
.center {
  padding: 15px 0 0 0;
}
.centerTop {
  border: 1px solid black;
  border: none;
  outline: none;
  height: 1.4rem;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 10px 0;
}
.centerTop-p{
  margin: 0;
  border: 1px solid black;
  border-radius: 10%;
  padding: 5px;
  width: 1rem;
  text-align: center;
}
.centerTopImg{
  width: .8rem;
  height: .8rem;
}
.centerBottom{
  width: 100%;
}
.centerBottomInput{
  width: 9.5rem;
  height: 5rem;
}
.bottom {
  width: 100%;
  padding: 10px 0 0 0;
  display: flex;
  align-items: center;
  background-color: #edeff2;
  right: 0;
}
.bottom-img {
  width: 0.7rem;
}
.bottom-img-p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.pp {
  margin: 0;
}
</style>