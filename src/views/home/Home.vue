<template>
 <div class="hero_wrpper_box_1">
  <Hero />
 </div>

  <div class="card_wrapper container">
    <Card v-for="data in datas" :key="data" :data="data"/>
  </div>
  <div class="pagination">
    <router-view></router-view>
    <Pagination />
  </div>
  <!-- <Footers />  -->
</template>
<script>
import Hero from "../../components/hero/Hero.vue";
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
    Hero,
    Card,
    Pagination,
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