<template>
  <nav>
    <ul class="header_nav_list">
      <li class="header_nav_item">
        <router-link to="/" class="header_nav_link"> Home </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/life" class="header_nav_link"> life </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/marketing" class="header_nav_link">
          matketing
        </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/creativity" class="header_nav_link"> creativity </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/social" class="header_nav_link"> social </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/authors" class="header_nav_link">
          authors
        </router-link>
      </li>
      <li class="header_nav_item">
        <router-link to="/contact" class="header_nav_link"> contact </router-link>
      </li>
      <li class="header_nav_item">
        <a class="header_nav_link"> buy Mediumush</a>
      </li>
      <li class="header_nav_item">
        <a class="header_nav_link">...</a>
      </li>
    </ul>
    <router-view />
  </nav>
</template>
<script>
export default {};
</script>
<style>
.header_nav_list {
  margin-left: 25vw;
}
</style>