<template>
  <HeroCreative />
  <div class="card_wrapper container">
    <Card v-for="data in datas" :key="data" :data="data" />
  </div>
</template>
<script>
import Card from "../../components/card/Card.vue";
import { datas } from "../../data";
import HeroCreative from "../../components/heroCreative/HeroCreative.vue";

export default {
  data() {
    return {
      datas: datas,
    };
  },
  components: {
    Card,
    HeroCreative
  },
};
</script>
<style>
.card_wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>