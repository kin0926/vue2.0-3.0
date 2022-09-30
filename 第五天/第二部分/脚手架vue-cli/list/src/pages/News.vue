<template lang="">
  <div>
    <ul>
      <li v-for="p in newslist" :key="p.id">
        <router-link to="/home/news/defail">{{p.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'News',
    data() {
      return {
        newslist:[
          {id:'001',title:'吃顿饭'},
          {id:'002',title:'喝奶茶'},
          {id:'003',title:'听音乐'}
        ]
      }
    },
};
</script>

<style lang=""></style>
