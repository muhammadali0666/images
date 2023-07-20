<template>
  <div class="img_card">
    <img :src="data.img" alt="" class="card_photo" style="width: 100%;" height="100"/>
    <div class="card_box">
      <h4 class="card_paragraph">{{ data.paragraph }}</h4>
      <p class="card_text">
       {{ data.text }}
      </p>
      <div class="card_bottom">
        <div class="card_bottom_box">
          <img
            :src="data.img"
            alt=""
            class="card_bottom_box_img"
            width="30"
            height="30"
          />
          <div class="card_bottom_box_mini">
            <p class="card_bottom_box_mini_p">sal</p>
            <p class="card_bottom_box_mini_text">May 24, 2023 3 min read</p>
          </div>
        </div>
        <img
          src="../../assets/bookmark.svg"
          alt="img"
          class="card_bottom_img"
          width="20"
          height="20"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.img_card {
  width: 27vw;
  border: 1px solid #dac8c8;
  border-radius: 4px;
  margin-bottom: 30px;
}
/* .card_photo {
} */
.card_photo {
  height: 200px;
}
.card_box {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_paragraph {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}
.card_text {
  font-size: 18px;
}
.card_bottom {
  display: flex;
  justify-content: space-between;
}
.card_bottom_box {
  display: flex;
  align-items: center;
}
.card_bottom_box_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
.card_bottom_box_mini {
  margin-bottom: 0;
  padding-bottom: 0;
}
.card_bottom_box_mini_p {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 16px;
}
.card_bottom_box_mini_text {
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 16px;
}
/* .card_bottom_img {
} */
</style>