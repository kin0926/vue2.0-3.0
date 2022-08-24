<template lang="">
    <div class="demo">
        <h3>学生姓名{{name}}</h3>
        <h3>学生年龄{{age}}</h3>
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
}
</script>

<!-- scoped作用域，给style添加上之后就只影响当前文件内的样式了
不加的话，如果其他组件内有同名的样式，则按照引入组件顺序，后引入的
同名样式覆盖前引入的同名样式 -->
<style scoped>
    .demo{
        background-color: antiquewhite;
    }
</style>