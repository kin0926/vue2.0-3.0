<template lang="">
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition过渡（页面加载时会自动脱掉这个标签）,appear刷新后直接先进场动画 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">彩蛋</h1>
        </transition>
        
    </div>
</template>

<script>
export default {
    name:'Demo1',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    /* 进入动画，v-enter-active(vue,进入，激活) */
    /* 这里的hello是上面<transition name="hello">里的name ，如果上面没写name，那这里就用v，即(vue) */
    .hello-enter-active{
        /* 播放动画下面的aa，播放1s */
        animation: aa 1s;
    }
    /* 离开动画 */
    .hello-leave-active{
        /* reverse反转 */
        animation: aa 1s reverse;
    }

    /* 动画关键帧 */
    @keyframes aa{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>