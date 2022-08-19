<template lang="">
  <!-- 快捷键输入 <vueInit -->
  <div>
    <h2>学校地址{{ address }}</h2>
    <h2 @click="showName">学校名称{{ name }}</h2>
  </div>
</template>

<script>
// 调用mixin，再在下面使用
import hunhe from '../hunhe.js'

export default {
  name: "school",
  data() {
    return {
      address: "深圳",
      name: "设计院",
    };
  },
  // 使用多个时用，隔开
  mixins:[hunhe]
}
</script>

<style lang=""></style>
