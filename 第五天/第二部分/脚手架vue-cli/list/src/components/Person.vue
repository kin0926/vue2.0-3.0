<template lang="">
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "person",
  computed: {
    // persons(){
    //     return this.$store.state.persons
    // }
    ...mapState(["persons"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit('ADD_PERSON',personObj)
      this.name = "";
    },
  },
};
</script>

<style lang=""></style>
