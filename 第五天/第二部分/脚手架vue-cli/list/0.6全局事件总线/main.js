// 引入Vue
import Vue from "vue";
// 引入app组件
import App from "./App.vue";

// 关闭vue的生产提示
Vue.config.productionTip = false;


new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate(){
    // 在初始化之前给vue的原型绑定了一个x，指向vue
    // Vue.prototype.x = this     //bus公共汽车、总线
    Vue.prototype.$bus = this     //安装全局事件总线
  }
});
