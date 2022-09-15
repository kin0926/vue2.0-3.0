<template lang="">
  <div class="container">
    <SearchVue/>
    <ListVue/>
  </div>
</template>

<script>
  // 引入
import SearchVue from './components/Search';
import ListVue from './components/List';

export default {
  name: "App",
  // 注册
  components:{SearchVue,ListVue}
};
</script>
