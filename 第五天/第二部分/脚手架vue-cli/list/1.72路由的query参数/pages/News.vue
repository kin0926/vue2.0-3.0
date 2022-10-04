<template lang="">
  <div>
    <ul>
      <li v-for="p in newslist" :key="p.id">
        <!-- 通过?的形式携带参数 -->
        <!-- to的字符串写法 -->
        <!-- <router-link :to="`/home/news/detail?id=${p.id}&title=${p.title}`">{{p.title}}</router-link> -->
        <!-- to的对象写法 -->
        <router-link
          :to="{
            path: '/home/news/detail',
            query: {
              id: p.id,
              title: p.title,
            },
          }"
        >
          {{ p.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newslist: [
        { id: "001", title: "吃顿饭" },
        { id: "002", title: "喝奶茶" },
        { id: "003", title: "听音乐" },
      ],
    };
  },
};
</script>

<style lang=""></style>
