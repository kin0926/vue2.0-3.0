<template lang="">
  <div class="app">
    <schoolVue :getSchoolName="getSchoolName"></schoolVue>
    <StudentVue @studentww="getStudentName" @aa="domo"></StudentVue>
    <!-- 在组件<>里写的标签vue都认为是自定义事件，除非在后面加native -->
    <StudentVue @click.native="pop"></StudentVue>
  </div>
</template>

<script>
// 引入组件
import schoolVue from "./components/School.vue";
import StudentVue from "./components/Student.vue";

export default {
  name: "App",

  components: {
    schoolVue,
    StudentVue,
  },

  methods: {
    getSchoolName(name) {
      console.log(name);
    },
    // 传递多个时可以用...X，就是第一个name正常输出，之后的都封装成一个数组一起输出
    getStudentName(name,...a){
      console.log('$emit使用',name,a);
    },
    domo(){
      console.log('测试事件domo被触发');
    },
    pop(){
      alert('native原生事件')
    }
  },
};
</script>

<style>
.app {
  background-color: #ccc;
}
</style>
