<template lang="">
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 在transition的name里写如样式名，里面的enter和leave里面导入animate库里的样式 -->
    <transition 
    appear
    name="animate__animated animate__bounce" 
    enter-active-class="animate__fadeInDownBig"
    leave-active-class="animate__bounceOutDown"
    >
      <h1 v-show="isShow">彩蛋</h1>
    </transition>
  </div>
</template>

<script>
// 引入外部动画样式包
import "animate.css";
export default {
  name: "Demo1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
