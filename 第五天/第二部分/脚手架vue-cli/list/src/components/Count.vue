<template lang="">
  <div>
    <!-- 这里原本是要写$store.state.sum，但是在下面的computed里封装了，所以直接sum -->
    <h1>当前求和为{{ sum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
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
// 为了批量添加computed里的那些，先导入mapState【map映射 state状态】
import { mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的每次增加的数值
    };
  },
  computed: {
    // 靠程序员自己写$store.state
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
  
    // 用mapState生成$store.state，从state中读取数据
    // ...xxx,意思是把xxx内容展开放到...所在位置
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),
    
    // 如果两个名字一样，可以用数组形式，要加''，
    // 如果要简写不能用{}显示，因为sum{}会自动解析为sum:sum，而不是sum:'sum'
    ...mapState(['sum','school','subject']),
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
