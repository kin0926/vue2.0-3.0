// import有声明提升，不管放哪，vue都会先把所有的import执行掉
// 引入Vue
import Vue from "vue";
// 引入app组件
import App from "./App.vue";

// vuex在store里面引入了，所以这边就不用了
// 引入store
import store from './store/index'



// 关闭vue的生产提示
Vue.config.productionTip = false;


new Vue({
    el: "#app",
    render: (h) => h(App),
    //vuex的store使用
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
});