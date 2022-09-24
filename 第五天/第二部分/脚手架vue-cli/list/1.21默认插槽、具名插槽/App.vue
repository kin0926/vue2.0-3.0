<template lang="">
  <div>
    <CategoryVue title="游戏">
      <img
        slot="one"
        src="https://cdn.pixabay.com/photo/2022/07/21/13/40/mongolian-girl-7336271_960_720.jpg"
        alt=""
      />
      <a slot="two" href="javascript:;">具名插槽，插槽2</a>
    </CategoryVue>

    <CategoryVue title="美食">
      <ul slot="one">
        <li v-for="(i, index) in foods" :key="index">{{ i }}</li>
      </ul>
      <template slot="two">
        <a href="javascript:;">两个都要用slot='two'，，</a>
        <a href="javascript:;">用template包裹</a>
      </template>
    </CategoryVue>

    <CategoryVue title="汽车"></CategoryVue>
  </div>
</template>

<script>
import CategoryVue from "./components/Category.vue";
export default {
  name: "App",
  data() {
    return {
      games: ["崩坏1", "崩坏2", "原神", "崩坏3"],
      foods: ["火锅", "奶茶", "小龙虾", "意面"],
      cars: ["宝马", "丰田", "大众", "火焰鸟"],
    };
  },
  components: { CategoryVue },
};
</script>

<style lang=""></style>
