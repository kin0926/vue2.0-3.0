<template lang="">
  <div>
    <!-- 数据不在我们这边时可以用作用域插槽，让数据逆向过来 -->
    <!-- 这里已经绑定CategoryVue，所以作用域插槽只会在他里面找 -->
    <CategoryVue title="美食">
      <!-- <template scope="xx">，里面不用写的和组件那的foods一样，随便写 -->
      <template scope="aa">
        <ul>
          <!-- aa.foods这里通过aa找到使用插槽的组件里的foods插槽 -->
        <li v-for="(i, index) in aa.foods" :key="index">{{ i }}</li>
      </ul>
      </template>
    </CategoryVue>

    <CategoryVue title="美食">
      <template scope="aa">
      <ol>
        <li v-for="(i, index) in aa.foods" :key="index">{{ i }}</li>
      </ol>
    </template>
    </CategoryVue>

    <CategoryVue title="美食">
      <template scope="aa">
        <h4 v-for="(i, index) in aa.foods" :key="index">{{ i }}</h4>
      </template>
    </CategoryVue>
</div>
</template>

<script>
import CategoryVue from "./components/Category.vue";
export default {
  name: "App",
  
  components: { CategoryVue },
};
</script>

<style lang=""></style>
