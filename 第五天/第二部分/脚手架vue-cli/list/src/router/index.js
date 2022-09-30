// 专门用于创建整个项目的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器
export default new VueRouter({
    // 下面是一个路由器，管理着里面的两个路由
    routes: [{
            path: '/about', //如果你的路径是这个
            component: About //那么我就给你展示这个组件
        },
        {
            path: '/home',
            component: Home
        }
    ]
})