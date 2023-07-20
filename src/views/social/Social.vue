<template>
  <HeroSocial/>
  <div class="card_wrapper container">
    <Card v-for="data in datas" :key="data" :data="data" />
  </div>
  <div class="pagination">
    <Pagination />
  </div>
</template>
<script>
import HeroSocial from "../../components/heroSocial/HeroSocial.vue";
import Pagination from "../../components/pagination/Paagination.vue";
import Card from "../../components/card/Card.vue";
import { datas } from "../../data";

export default {
  data() {
    return {
      datas: datas,
    };
  },
  components: {
    Card,
    Pagination,
    HeroSocial
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