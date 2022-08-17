<style>
</style>

<template>
    <div>
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default ({
    name: 'school',
    data() {
        return {
            schoolName: '白金之星',
            address: '深圳',
        }
    },
})
</script>