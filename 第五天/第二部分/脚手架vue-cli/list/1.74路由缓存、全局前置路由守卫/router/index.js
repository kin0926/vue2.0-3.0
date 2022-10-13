// 专门用于创建整个项目的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    //第一层的路由叫{一级路由}，如果要在里面继续嵌套路由，则里面的
    //称之为二级路由。。。，这些嵌套的要写到一级路由的里面
    // 下面是一个路由器，管理着里面的两个路由
    routes: [
        // 一级路由：
        {
            name: 'guanyu',
            path: '/about', //如果你的路径是这个
            component: About //那么我就给你展示这个组件
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            // 二级路由：
            children: [
                // 二级路由的path里面不需要加/ ，会自动添加的
                {
                    name: 'xingde',
                    path: 'news',
                    component: News,
                    // 三级路由
                    children: [{
                        name: 'xiangqing', //给路由命名，可以简化编码，多级路由时可以直接写名字
                        path: 'detail/:id/:title',
                        component: Detail,
                    }]
                },
                {
                    name: 'jiude',
                    path: 'message',
                    component: Message
                },
            ]
        },
    ]
})

// 全局前置路由守卫--初始化、切换路由前被调用
// before之前 Each每一个 beforeEach每次切换之前
// 带3个参数，to(到哪里去),from(从哪里出发),next(放行)
router.beforeEach((to, from, next) => {
    console.log('全局前置路由守卫发现切换了，准备放行');
    // 判断这里用name和path都可以，不过name方便一点
    if (to.name === 'xingde' || to.path === '/home/message') {
        if (localStorage.getItem('school') === 'iliveyou') {
            next()
        } else {
            alert('无权限，请存钱')
        }
    } else {
        next()
    }
})
export default router