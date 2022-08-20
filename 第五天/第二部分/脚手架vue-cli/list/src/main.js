// 引入Vue
import Vue from "vue";
// 引入app组件
import App from "./App.vue";
// 引入插件
import plugins from './plugins'

// 关闭vue的生产提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(plugins)

new Vue({
  el: "#app",
  render: (h) => h(App),
});
