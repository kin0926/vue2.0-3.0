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
    <button @click="add(n)">+</button>
    <button @click="subtract(n)">-</button>
    <button @click="multiply(n)">*</button>
    <button @click="addWait(n)">等一等再加</button>

    <h3>person组件总人数是：{{persons.length}}</h3>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// 为了批量添加computed里的那些，先导入mapState【map映射 state状态】
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的每次增加的数值
    };
  },
  computed: {
    ...mapState(['sum','school','subject','persons']),

    // $store.getters也是相同方法
  },

  methods: {
    ...mapMutations({subtract:'SUBTRACT'}),     //对象写法

    ...mapActions(['add','multiply','addWait'])
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
