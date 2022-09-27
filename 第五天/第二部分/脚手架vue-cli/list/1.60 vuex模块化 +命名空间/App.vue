<template lang="">
  <div>
    <CountVue/>
    <hr>
    <PersonVue/>
</div>
</template>

<script>
import CountVue from './components/Count.vue';
import PersonVue from './components/Person.vue';
export default {
  name: "App",
  
  components: { CountVue,PersonVue },
};
</script>

<style lang=""></style>
