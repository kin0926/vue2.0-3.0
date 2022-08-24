<template lang="">
  <div>
    <schoolVue></schoolVue>
    <hr>
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
    StudentVue
  },

};
</script>

<style lang=""></style>
