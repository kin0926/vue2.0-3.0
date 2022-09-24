<template lang="">
  <!-- 1、默认插槽 在App.vue里的xx组件里写内容，再到xx组件里html里写slot标签
      内容在解析完毕后会被放到xx组件里的slot所在位置
      slot里可以写内容，作为默认值，当没有内容传递给slot时默认显示 -->
  <div class="bde">
    <h2>{{ title }}分类</h2>
    <!-- slot插槽 表示app那边的组件里面的标签解析后放这里 -->
    <slot name="one">这里是具名插槽1</slot>
    <slot name="two">这里是具名插槽2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.bde {
  border: 1px solid black;
  background-color: beige;
  width: 200px;
  height: 300px;
  float: left;
  margin-right: 15px;
}
h2 {
  text-align: center;
}
img {
  width: 100%;
}
</style>
