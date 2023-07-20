<template>
  <div class="card_wrapper container">
    <ContactForm />
    </div>
</template>
<script>
import { datas } from "../../data";
import ContactForm from "../../components/contactFrom/ContactForm.vue";

export default {
  data() {
    return {
      datas: datas,
    };
  },
  components: {
    ContactForm,
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