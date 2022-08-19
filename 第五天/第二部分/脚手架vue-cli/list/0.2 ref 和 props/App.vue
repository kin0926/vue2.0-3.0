<template lang="">
  <div>
    <!-- ref="xx"可以获取DOM元素，然后在vue里的methods里面用this.$refs.xx可以输出 -->
    <!-- <h2 v-text="msg" ref="aa"></h2> -->
    <!-- <button @click="showDOM">点我输出上面的DOM元素</button> -->
    <!-- <schoolVue></schoolVue> -->

    <StudentVue name="小一" :age="19"></StudentVue>
  </div>
</template>

<script>
// 引入组件
// import schoolVue from "./components/School.vue";
import StudentVue from "./components/Student.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     // msg:'欢迎你'
  //   }
  // },
  components: {
    // schoolVue,
    StudentVue
  },
  // methods: {
  //   showDOM(){
  //     // 相当于输出了原始js的document.querselert('aa')
  //     // 只写this.$refs就输出所有的有ref的DOM值
  //     console.log(this.$refs.aa)
  //   }
  // },
};
</script>

<style lang=""></style>
