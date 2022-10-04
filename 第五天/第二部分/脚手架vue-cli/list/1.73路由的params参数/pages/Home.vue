<template lang="">
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 注意这里的路由，因为是二级路由，所以to="/home/news"要写完整 -->
          <router-link class="list-group-item" active-class="active" to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <ul>
        <router-view></router-view>
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
