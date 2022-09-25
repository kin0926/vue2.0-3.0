<template lang="">
  <div>
    <h1>当前求和为{{ $store.state.sum }}</h1>
    <!-- 加number强制数字型转换 -->
    <!-- 如果不加.number，使用第二列的2和第三列的3的时候会变成字符串拼接 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <button @click="multiply">*</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的每次增加的数值
    };
  },
  methods: {
    add() {
      this.$store.dispatch("add", this.n);
    },
    // 因为减没有业务逻辑，比如判断什么的，所以直接commit发送给mutations也可以
    subtract() {
      this.$store.commit("SUBTRACT", this.n);
    },
    multiply() {
      this.$store.dispatch("multiply", this.n);
    },
    addWait() {
      // 定时器也可以写在store的actions里
      setTimeout(() => {
        this.$store.dispatch("add", this.n);
      }, 800);
    },
  },
};
</script>

<style>
select {
  margin: 0 10px;
}
button {
  margin-right: 10px;
}
</style>
