<template>
  <HeroAuthors />
  <div class="card_wrapper container">
    <AuthorsCard />
  </div>
</template>
<script>
import { datas } from "../../data";
import HeroAuthors from "../../components/heroAuthors/HeroAuthors.vue";
import AuthorsCard from "../../components/authorCard/AuthorCard.vue";

export default {
  data() {
    return {
      datas: datas,
    };
  },
  components: {
    HeroAuthors,
    AuthorsCard,
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