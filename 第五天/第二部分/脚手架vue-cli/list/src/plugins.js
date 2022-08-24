export default {
    // 可以在install里定义全局事件，如全局过滤器、全局指令等
    // 可以传参，返回vue构造函数
    install(Vue){
        console.log('这是插件练习',Vue);
    }
}