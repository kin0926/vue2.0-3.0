<template lang="">
    <div class="student">
        <h3>学生姓名{{name}}</h3>
        <h3>学生年龄{{age}}</h3>
        <button @click="sendStudentName">用总线把学生姓名给school</button>
    </div>
</template>
<script>
// 引用消息订阅
import pubsub from 'pubsub-js';

export default {
    name:'student',
    data() {
        return {
            name:'李敏',
            age:19,
        }
    },
    methods: {
        sendStudentName(){
            pubsub.publish('hello',666)
        }
    },
}
</script>


<style scoped>
    .student{
        background-color: antiquewhite;
        padding: 1px;
    }
</style>