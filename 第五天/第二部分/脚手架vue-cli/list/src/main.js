// import有声明提升，不管放哪，vue都会先把所有的import执行掉
// 引入Vue
import Vue from "vue";
// 引入app组件
import App from "./App.vue";
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'

// 使用vue-router
Vue.use(VueRouter)

// 关闭vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: (h) => h(App),
    router: router
});