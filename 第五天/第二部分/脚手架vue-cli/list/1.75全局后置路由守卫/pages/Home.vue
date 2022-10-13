<template lang="">
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 注意这里的路由，因为是二级路由，所以to="/home/news"要写完整 -->
          <router-link replace class="list-group-item" active-class="active" to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <ul>
        <!-- keep-alive缓存路由组件，给谁加则它里面的组件增加缓存功能
          include="Message"缓存特定组件，不加则默认给所有加缓存，
            组件名是组件里写的export default { }里的那个name -->
        <!-- 缓存多个组件时 :include="aa,bb,cc" 或:include="'aa','bb','cc'" -->
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang=""></style>
