// 配置vuex最核心的store

// 导入Vuex
import Vuex from 'vuex'

// 在main.js那边不能先执行use(vuex)再执行import store，所以放这边
// 引入vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

// 准备store内3个东西（响应、操作、存储）
const actions = {}
const mutations = {}
const state = {}

// 创建并暴露store并使用上面3个
// const store = new Vuex.Store({
export default new Vuex.Store({
    // 完整写法和简写
    actions: actions,
    mutations,
    state,
})