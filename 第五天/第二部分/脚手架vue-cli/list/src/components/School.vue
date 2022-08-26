<template lang="">
  <!-- 快捷键输入 <vueInit -->
  <div class="school">
    <h2>学校地址{{ address }}</h2>
    <h2>学校名称{{ name }}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
  name: "school",
  props:['getSchoolName'],
  data() {
    return {
      address: "深圳",
      name: "设计院",
    };
  },
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  },
};
</script>

<style>
.school {
  background-color: green;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
