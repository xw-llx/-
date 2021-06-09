<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <p class="top-p1">奇索世界</p>
      <p class="top-p2">与你一起成长</p>
      <div class="top-border">
        <!-- 左 -->
        <div class="topFb">
          <span class="top-span-left">{{ locationMsg }}</span>
        </div>
        <!-- 右 -->
        <div class="topFb2">
          <span class="top-span-right" @click="btnSpan">发布内容</span>
        </div>
      </div>
    </div>
    <!-- 中部 -->
    <div class="middle">
      <div class="middle-daYuan">
        <div class="middle-daYuan-div">
          <img
            src="../assets/img/home/xiangji.png"
            alt=""
            @click="btnXj"
            class="middle-daYuan-img"
          />
        </div>
        <div class="middle-daYuan-div2">
          <img
            src="../assets/img/home/lianggerenwu.png"
            alt=""
            class="middle-daYuan-img"
            @click="btnLgr"
          />
        </div>
        <div class="middle-daYuan-div3">
          <img
            src="../assets/img/home/bofang_right.png"
            alt=""
            class="middle-daYuan-img"
            @click="btnBofangRight"
          />
        </div>
        <div class="middle-daYuan-div4">
          <img
            src="../assets/img/home/gerenzhongxin-xuanzhongxin.png"
            alt=""
            class="middle-daYuan-img"
            @click="btnGenRenZhongXin"
          />
        </div>
        <div class="middle-daYuan-div5">
          <img
            src="../assets/img/home/caidan.png"
            alt=""
            class="middle-daYuan-img"
          />
        </div>
        <!-- 搜索框 -->
        <div class="middle-daYuan-div6">
          <img
            src="../assets/img/home/search.png"
            class="middle-daYuan-img"
            @click="btnSearch"
          />
        </div>
        <div class="middle-daYuan-div7">
          <img
            src="../assets/img/home/bofang_left.png"
            alt=""
            class="middle-daYuan-img"
            @click="btnBofangLeft"
          />
        </div>
        <div class="middle-daYuan-div8">
          <img
            src="../assets/img/home/emial.png"
            alt=""
            class="middle-daYuan-img"
            @click="btnEmial"
          />
        </div>
        <div class="middle-xiaoYuan">
          <div class="middle-xiaoYuan-neiquan">
            <p class="middle-xiaoYuan-p">北京同城2000万人</p>
            <img
              src="../assets/img/home/diqiu.png"
              class="middle-xiaoYuan-img2"
            />
            <img
              src="../assets/img/home/saoyisao.png"
              alt=""
              class="middle-xiaoYuan-img"
            />
          </div>
        </div>
      </div>
      <div class="middle-div">
        <p class="middle-p" v-show="searchO">精彩瞬间一起分享</p>
      </div>
      <div class="inputSearchImg">
        <input type="text" placeholder="请输入搜索关键词" id="inputSearch" v-show="searchT"/>
      </div>
      <img src="../assets/img/home/bottomImge.png" class="middle-bottomImge" />
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
  </div>
</template>


<script>
import getCurrentCityName from "@/util/getUserLocation";
export default {
  data() {
    return {
      locationMsg: "当前城市:",
      // 文字
      searchO: true,
      // 输入框
      searchT: false,
      st:0
    };
  },
  mounted() {
    this.getCurrentCity();
  },
  methods: {
    getCurrentCity() {
      getCurrentCityName().then((city) => {
        this.locationMsg = city;
      });
    },
    btnSearch() {
      this.st++
      console.log(this.st);
      if (this.st%2!=0) {
        this.searchO=false
      } else {
        this.searchT=true
      }
    },
    // 发布内容
    btnSpan() {
      this.$router.push("/bofang_right");
    },
    // 相机
    btnXj() {
      this.$router.push("/");
    },
    // 两个人
    btnLgr() {
      this.$router.push("/twopeople");
    },
    // 播放右
    btnBofangRight() {
      this.$router.push("/bofang_right");
    },
    // 个人中心
    btnGenRenZhongXin() {
      this.$router.push("/gerenzhongxin");
    },
    // 实时动态
    btnBofangLeft() {
      this.$router.push("/bofang_left");
    },
    // 系统推送
    btnEmial() {
      this.$router.push("/emial");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/home.css");
</style>