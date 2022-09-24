<template lang="">
  <div>
    <h1>当前求和为{{sum}}</h1>
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
      n:1,    //用户选择的每次增加的数值
      sum:0   //当前总和
    }
  },
  methods: {
    add(){
      this.sum += this.n
    },
    subtract(){
      this.sum -= this.n
    },
    multiply(){
      this.sum *= this.n
    },
    addWait(){
      setTimeout(()=>{
        this.sum += this.n
      },800)
    },
  },
};
</script>

<style>
  select{
    margin: 0 10px;
  }
  button{
    margin-right: 10px;
  }
</style>
