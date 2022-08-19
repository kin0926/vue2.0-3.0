<template lang="">
<!-- 快捷键输入 <vueInit -->
  <div>
    <h2>学校地址{{address}}</h2>
    <h2>学校名称{{name}}</h2>
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

<style lang="">

</style>
