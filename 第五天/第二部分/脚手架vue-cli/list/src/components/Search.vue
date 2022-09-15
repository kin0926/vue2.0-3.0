<template lang="">
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="输入要搜索名"
        v-model="keyWord"
        @keyup.enter="searchUsers"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新List的数据,对应着List里的isFirst,isLoading,errMsg,users
      this.$bus.$emit("updateListDate",{
            isFirst: false,
            isLoading: true,
            errMsg: "",
            users: [],
          });
      axios.get("https://api.github.com/search/users?q=" + this.keyWord).then(
        (response) => {
          console.log("请求成功了");
        //   请求成功后更新List数据
          this.$bus.$emit("updateListDate", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败了");
        //   请求失败后更新List数据
          this.$bus.$emit("updateListDate",{
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style></style>
