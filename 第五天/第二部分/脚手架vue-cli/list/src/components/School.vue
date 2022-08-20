<template lang="">
  <!-- 快捷键输入 <vueInit -->
  <div class="demo">
    <h2 class="clr">学校地址{{ address }}</h2>
    <h2>学校名称{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "school",
  data() {
    return {
      address: "深圳",
      name: "设计院",
    };
  },
};
</script>

<!-- less的特点是样式可以嵌套着写 -->
<style lang="less">
.demo {
  background-color: green;
  .clr{
    color: rgb(255, 241, 47);
  }
}
</style>
