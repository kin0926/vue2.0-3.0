<template lang="">
  <div>
    <CategoryVue title="游戏">
      <img
        src="https://cdn.pixabay.com/photo/2022/07/21/13/40/mongolian-girl-7336271_960_720.jpg"
        alt=""
      />
    </CategoryVue>

    <CategoryVue title="美食">
      <ul>
        <li v-for="(i, index) in foods" :key="index">{{ i }}</li>
      </ul>
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
