<style></style>

<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>

export default {
  name: "student",
  data() {
    return {
      studentName: "sad",
      age: 18,
    };
  },
};
</script>
