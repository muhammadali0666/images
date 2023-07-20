<template>
  <hr>
  <ul class="uk-pagination pagianation_bottom" uk-margin>
    <li><a href="#">First</a></li>
    <li><a href="#"><span uk-pagination-previous></span></a></li>
    <li class="uk-disabled"><span>…</span></li>
    <li><a href="#">1</a></li>
    <li class="uk-active" style="color: #000; font-weight: 500;"><span>2</span></li>
    <li><a href="#">3</a></li>
    <li class="uk-disabled"><span>…</span></li>
    <li><a href="#"><span uk-pagination-next></span></a></li>
    <li><a href="#">Last</a></li>
</ul>
</template>
<script>
export default {
  
}
</script>
<style>
.pagianation_bottom {
  margin-left: 40vw;
  margin-top: 20px;
  padding-bottom: 0px;
}
hr {
  margin-top: 50px;
}
</style>