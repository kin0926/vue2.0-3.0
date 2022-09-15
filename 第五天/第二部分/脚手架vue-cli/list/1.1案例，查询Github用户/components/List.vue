<template lang="">
  <div class="row">
    <!-- 制作4个不同情况的展示内容，用v-show显示隐藏 -->

    <!-- 展示用户列表 -->
    <!-- v-show有长度就是true显示，没有就是false隐藏 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="info.isFirst">欢迎使用本功能！输入关键词查找Github用户</h2>
    <!-- 展示加载中 -->
    <h2 v-show="info.isLoading">系统正在全力加载中。。。。。</h2>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">请求出错了：{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        // 是否为初次展示
        isFirst: true,
        // 是否处于加载中
        isLoading: false,
        // 加载失败情况
        errMsg: "",
        // 加载成功显示的用户数据
        users: [],
      },
    };
  },
  // 全局事件总线接收search的数据
  mounted() {
    this.$bus.$on("updateListDate", (dataObj) => {
      this.info = dataObj;
      // console.log('List收到数据',users);
      // 收到的数据存到自身的data里
      // this.isFirst = isFirst
      // this.isLoading = isLoading
      // this.errMsg = errMsg
      // this.users = users
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
