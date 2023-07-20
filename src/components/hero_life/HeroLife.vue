<template>
  <div class="hero">
    <div class="container">
      <div class="hero_inner">
        <p class="hero_simple_p">Optional description for this category</p>
        <p class="hero_simple_line">Life</p>
        <hr class="hr">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.hr {
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.hero_simple_p {
  font-size: 20px;
}
.hero_simple_line {
  font-weight: 600;
  font-size: 26px;
  color: #000;
  border-bottom: 1px solid #000;
  width: 70px;
  padding-bottom: 0px;
  margin-bottom: +0px;
}

.hero_img {
  position: relative;
  height: 10vh;
}
.hero_box {
  width: 900px;
  position: absolute;
  left: 50%;
}
.hero_paragraph {
  font-weight: 700;
  width: 900px;
  text-align: center;
}
.uk-position-center {
  margin-left: auto;
  margin-right: auto;
}
</style>