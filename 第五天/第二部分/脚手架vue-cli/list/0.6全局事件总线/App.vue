<template lang="">
  <div class="app">
    <schoolVue></schoolVue>
    <StudentVue></StudentVue>
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


};
</script>

<style>
.app {
  background-color: #ccc;
}
</style>
