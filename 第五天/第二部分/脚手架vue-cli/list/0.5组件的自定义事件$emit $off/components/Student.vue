<template lang="">
    <div class="student">
        <h3>学生姓名{{name}}</h3>
        <h3>学生年龄{{age}}</h3>
        <h3>{{n}}</h3>
        <button @click="n++">点我n+1</button>
        <button @click="sendStudentName">用自定义事件把学生名给app</button>
        <button @click="unbind">解绑$emit</button>
        <button @click="vcdead">点我销毁vc</button>
    </div>
</template>
<script>

export default {
    name:'student',
    data() {
        return {
            name:'李敏',
            age:19,
            n:0,
        }
    },
    methods: {
        // 绑定自定义事件用$emit，第一个写要绑定的自定义事件名字，用于子传父
        sendStudentName(){
            // $emit绑定了studentww自定义事件
            this.$emit('studentww',this.name,666,888,999),
            this.$emit('aa')
        },
        // 解绑事件用$off，解绑一个是直接写（字符串形式），多个时用数组
        unbind(){
            // 解绑一个时
            // this.$off('studentww')

            // 解绑多个时
            this.$off(['studentww','aa'])

            // 解绑全部时
            // this.$off();
        },
        vcdead(){
            this.$destroy()
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