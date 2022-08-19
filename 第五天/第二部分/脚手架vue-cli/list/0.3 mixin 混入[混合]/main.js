// 引入Vue
import Vue from "vue";
// 引入app组件
import App from "./App.vue";

// // 调用mixin，再在下面使用
// import hunhe from '../hunhe.js'
// // 全局引用mixin

Vue.mixin(hunhe)
// 关闭vue的生产提示
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
