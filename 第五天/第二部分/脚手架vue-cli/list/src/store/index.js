// 配置vuex最核心的store

// 导入Vuex
import Vuex from 'vuex'

// 在main.js那边不能先执行use(vuex)再执行import store，所以放这边
// 引入vue
import Vue from 'vue'
//使用插件
Vue.use(Vuex)

// 模块化管理
// 准备store内3个东西（响应、操作、存储）,getters可以不用，相当于methods
// count组件相关
const countOptions = {
        namespaced: true,
        actions: {
            // 加
            add(context, value) {
                console.log('actions的add被调用了');
                context.commit('ADD', value)
            },
            // 乘
            multiply(a, b) {
                a.commit('MULTIPLY', b)
            },
            addWait(context, value) {
                // 定时器也可以写在store的actions里
                setTimeout(() => {
                    context.commit('ADD', value)
                }, 800);
            }
        },
        mutations: {
            ADD(state, value) {
                console.log('mutations的add被调用了');
                state.sum += value
            },
            SUBTRACT(state, value) {
                state.sum -= value
            },
            MULTIPLY(state, value) {
                state.sum *= value
            },
        },
        state: {
            sum: 0, //当前总和
            school: 'sdfz',
            subject: '计算机',
        },
        getters: {}
    }
    // person组件相关
const personOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [
            { id: '001', name: '张三' },
            { id: '002', name: '李四' },
        ]
    },
    getters: {}
}


// 创建并暴露store并使用上面3个
// const store = new Vuex.Store({
export default new Vuex.Store({
    // 上面模块化之后这里要改成modules模块
    modules: {
        a: countOptions, //countOptions: countOptions, => countOptions
        b: personOptions
    }
})