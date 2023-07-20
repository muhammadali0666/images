<template>
  <div class="header">
    <div class="container">
      <div class="header_inner">
        <div class="header_top">
          <div class="header_icons">
            <button class="header_btn">
              <img
                src="../../assets/twitter.svg"
                alt=""
                class="header_btn_img"
                width="20"
                height="20"
              />
              Follow
            </button>
            <ul class="header_list">
              <li class="header_item">
                <a href="#" class="header_item_link">
                  <img
                    src="../../assets/youtube.svg"
                    alt=""
                    class="header_item_img"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
              <li class="header_item">
                <a href="#" class="header_item_link">
                  <img
                    src="../../assets/facebook.svg"
                    alt=""
                    class="header_item_img"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
              <li class="header_item">
                <a href="#" class="header_item_link">
                  <img
                    src="../../assets/instagram.svg"
                    alt=""
                    class="header_item_img"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
            </ul>
          </div>
          <h2 class="header_paragraph">Meidumish</h2>

          <form class="header_form">
            <input type="text" class="header_input" placeholder="search" />
            <button class="header_search_btn">
              <img
                src="../../assets/search.svg"
                alt="search"
                class="btn_img"
                width="20"
                height="20"
              />
            </button>
          </form>
        </div>
        <div class="header_navbar">
          <NavLink/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavLink from "../../components/navLink/NavLink.vue";

export default {
  components: {
    NavLink,
  },
};
</script>
<style>
.header_inner {
  padding-top: 30px;
  padding-bottom: 30px;
}
.header_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_icons {
  display: flex;
  align-items: center;
}
.header_btn {
  color: #046d04;
  border: #046d04 1px solid;
  background-color: transparent;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 16px;
  display: flex;
  align-items: center;
}
.header_btn_img {
  margin-right: 10px;
  color: #046d04;
}
.header_list {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.header_item + .header_item {
  margin-left: 20px;
}
/* .header_item_link {
} */
.header_item_img {
  width: 30px;
  height: 30px;
}
.header_paragraph {
  font-size: 36px;
  /* font-family: 'Segoe UI', Tahoma, sans-serif; */
}
.header_form {
  display: flex;
  align-items: center;
}
.header_input {
  padding: 16px 20px;
  border: 1px solid #767171;
  font-size: 18px;
  width: 15vw;
}
.header_search_btn {
  padding: 18px;
  background-color: #12c00f;
  border: none;
}
/* .btn_img {
} */

.header_navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}
.header_nav_list {
  display: flex;
  align-items: center;
}
.header_nav_item + .header_nav_item {
  margin-left: 30px;
}
.header_nav_link {
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, sans-serif;
  opacity: 0.5;
  text-transform: uppercase;
}
</style>