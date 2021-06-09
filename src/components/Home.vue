<template>
  <div id="app">
    <myCpn />
  </div>
</template>

<script>
export default {};
// 创建组件构造器
const myComponent = Vue.extend({
  template: `
  <div>
    <h2>组件标题</h2>
    <p>我是组件中的内容</p>
  </div>
  `,
});

// 注册组件
Vue.component("myCpn", myComponent);

var app = new Vue({
  el: "#app",
  data() {
    return {
      message:'你好'
    };
  },
});
</script>

<style>
</style>