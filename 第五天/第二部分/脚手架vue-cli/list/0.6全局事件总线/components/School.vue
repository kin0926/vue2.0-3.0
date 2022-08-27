<template lang="">
  <!-- 快捷键输入 <vueInit -->
  <div class="school">
    <h2>学校地址{{ address }}</h2>
    <h2>学校名称{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "school",
  props:['getSchoolName'],
  data() {
    return {
      address: "深圳",
      name: "设计院",
    };
  },
  mounted(){
    // 事件总线-接收数据
    this.$bus.$on('hello',(data)=>{
      console.log('我是学校，收到了',data);
    })
  },
  beforeDestroy() {
    //不用了就结束并关闭总线傀儡上的hello
    this.$bus.$off('hello')
  },
};
</script>

<style>
.school {
  background-color: green;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
