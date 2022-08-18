<template lang="">
  <div>
    <schoolVue></schoolVue>
    <studentVue></studentVue>
  </div>
</template>

<script>
// 引入组件
import schoolVue from "./components/School.vue";
import studentVue from "./components/Student.vue";

export default {
  name: "App",
  components: {
    schoolVue,
    studentVue,
  },
};
</script>

<style lang=""></style>
