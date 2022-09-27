// 配置vuex最核心的store

// 导入Vuex
import Vuex from 'vuex'

// 在main.js那边不能先执行use(vuex)再执行import store，所以放这边
// 引入vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

// 准备store内3个东西（响应、操作、存储）
const actions = {
    // 加
    // add(a阉割版store,b内容) {
    add(context, value) {
        console.log('actions的add被调用了');
        context.commit('ADD', value)
    },
    // 减，  如果里面没有什么业务逻辑，数据可以直接给mutations，只要在发送请求
    //       的那边改成this.$store.commit就行
    // subtract(context, value) {
    //     console.log('actions的-被调用了');
    //     context.commit('SUBTRACT', value)
    // },
    // 乘
    multiply(a, b) {
        a.commit('MULTIPLY', b)
    },
}
const mutations = {
    ADD(state, value) {
        console.log('mutations的add被调用了');
        state.sum += value
    },
    SUBTRACT(state, value) {
        state.sum -= value
    },
    MULTIPLY(state, value) {
        state.sum *= value
    }
}
const state = {
    sum: 0, //当前总和
    school: 'sdfz',
    subject: '计算机',
    persons: [
        { id: '001', name: '张三' },
        { id: '002', name: '李四' },
    ]
}

// 创建并暴露store并使用上面3个
// const store = new Vuex.Store({
export default new Vuex.Store({
    // 完整写法和简写
    actions: actions,
    mutations,
    state,
})