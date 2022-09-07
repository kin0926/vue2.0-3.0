<template lang="">
  <!-- 快捷键输入 <vueInit -->
  <div class="school">
    <h2>学校地址{{ address }}</h2>
    <h2>学校名称{{ name }}</h2>
  </div>
</template>

<script>
// 消息订阅与发布   先安装工具npm i pubsub-js
// 引用消息订阅
import pubsub from 'pubsub-js';

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
    // 订阅消息,(a,b)里a是数据名，b是数据
    this.pubId = pubsub.subscribe('hello',(name,data)=>{
      console.log('有人发布了hello消息，hello消息的回调执行了',name,data);
    })
  },
  beforeDestroy() {
    //不用了就结束并关闭订阅上的hello
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style>
.school {
  background-color: green;
  padding: 5px;
  margin-bottom: 20px;
}
</style>
