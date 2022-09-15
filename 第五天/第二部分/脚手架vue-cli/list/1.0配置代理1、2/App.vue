<template lang="">
  <div>
    <!-- <Demo1Vue></Demo1Vue> -->
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
// 引入组件
import axios from 'axios';
// import Demo1Vue from './components/Demo1.vue';

export default {
  name: "App",
  // components: {Demo1Vue},
  methods: {
    // public相当于服务器位置，优先匹配前端资源，没有才去找服务器，有前缀另说。说的挺乱的
    getStudent(){
      axios.get('http://localhost:8080/xx1/students').then(
        response=>{
          console.log('请求5000给数据成功了',response.data)
        },
        error=>{
          console.log('请求5000给数据失败了',error.message)
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/xx2/cars').then(
        response=>{
          console.log('请求5000给数据成功了',response.data)
        },
        error=>{
          console.log('请求5000给数据失败了',error.message)
        }
      )
    }
  },
};
</script>