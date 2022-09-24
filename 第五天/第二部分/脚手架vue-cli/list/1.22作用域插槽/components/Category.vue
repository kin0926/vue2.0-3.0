<template lang="">
  <div class="bde">
    <h2>{{ title }}分类</h2>
    <!-- data里面的数据交给了这里的foods，App那边调用插槽时foods会交过去，相当于逆向给数据 -->
    <slot :foods="foods">作用域插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      foods: ["火锅", "奶茶", "小龙虾", "意面"],
    };
  },
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
