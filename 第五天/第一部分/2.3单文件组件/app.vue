<template lang="">
    <div>
        <schoolVue></schoolVue>
        <studentVue></studentVue>
    </div>
</template>

<script>
// 引入组件
import schoolVue from './school.vue';
import studentVue from './student.vue';

export default {
    name:'App',
    components:{
        schoolVue,
        studentVue
    }
}
</script>

<style lang="">
    
</style>