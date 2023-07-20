<template>
  <form class="contact_form">
    <div class="contact_box">
      <input type="text" class="contact_input" placeholder="Name">
      <input type="email" class="contact_input" placeholder="Email">
    </div>
    <textarea cols="19" rows="20" placeholder="Message" />
    <button class="contact_btn" type="submit">
      Send
    </button>
  </form>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  /* .contact_form {
} */
.contact_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact_input {
  width: 45vw;
  font-size: 20px;
  color: #4c4848;
  border: #ebd7d7 1px solid;
  padding: 10px;
}
textarea {
  margin-top: 40px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
}
.contact_input+ .contact_input {
  margin-left: 30px;
}
.contact_btn {
  margin-top: 20px;
  border: none;
  background-color: #0f8135;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 20px;
}
</style>