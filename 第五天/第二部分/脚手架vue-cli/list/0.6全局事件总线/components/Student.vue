<template lang="">
    <div class="student">
        <h3>学生姓名{{name}}</h3>
        <h3>学生年龄{{age}}</h3>
        <button @click="sendStudentName">用总线把学生姓名给school</button>
    </div>
</template>
<script>

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
            // 事件总线-提供数据
            this.$bus.$emit('hello',this.name)
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