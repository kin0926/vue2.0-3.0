<template lang="">
    <div>
        <h3 @click="showName">学生姓名{{name}}</h3>
        <h3>学生年龄{{age}}</h3>
    </div>
</template>
<script>
// 调用mixin，再在下面使用
import hunhe from '../hunhe.js'

export default {
    name:'student',
    data() {
        return {
            name:'李敏',
            age:19,
        }
    },
    // 使用mixin，把相同的部分单独放一个js里，然后需要用时用mixin调用
    // 如果混合和data里面有相同的元素名配置，以data里的为主
    mixins:[hunhe]
}
</script>

<style lang="">
    
</style>