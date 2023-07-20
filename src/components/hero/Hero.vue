<template>
  <div class="hero">
    <div class="container">
      <div class="hero_inner">
        <p class="hero_simple_p">Optional description for this category</p>
        <p class="hero_simple_line">Home</p>
        <hr class="hr">
        <div
          class="uk-position-relative uk-visible-toggle"
          tabindex="-1"
          uk-slideshow="animation: push"
        >
          <ul class="uk-slideshow-items">
            <li class="hero_item">
              <img src="../../assets/bg.jpg" alt="" uk-cover class="hero_img" />
              <div
                class="uk-position-center uk-position-small uk-text-center uk-light hero_box"
              >
                <h2 class="uk-margin-remove hero_paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  voluptatem. Dolor quas eaque ad nemo.
                </h2>
                <p class="uk-margin-remove hero_text" style="margin-top: 100px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident corrupti hic eligendi necessitatibus modi reiciendis
                  quidem, consequatur animi molestias placeat ipsa sapiente
                  magni officia nostrum amet a nesciunt dolorem doloribus cum
                  laudantium suscipit, fuga ipsam veritatis? Nostrum inventore
                  obcaecati necessitatibus!
                </p>
              </div>
            </li>
            <li class="hero_item">
              <img src="../../assets/bg.jpg" alt="" uk-cover class="hero_img" />
              <div
                class="uk-position-center uk-position-small uk-text-center uk-light hero_box"
              >
                <h2 class="uk-margin-remove hero_paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  voluptatem. Dolor quas eaque ad nemo.
                </h2>
                <p class="uk-margin-remove hero_text" style="margin-top: 100px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident corrupti hic eligendi necessitatibus modi reiciendis
                  quidem, consequatur animi molestias placeat ipsa sapiente
                  magni officia nostrum amet a nesciunt dolorem doloribus cum
                  laudantium suscipit, fuga ipsam veritatis? Nostrum inventore
                  obcaecati necessitatibus!
                </p>
              </div>
            </li>
            <li class="hero_item">
              <img src="../../assets/bg.jpg" alt="" uk-cover class="hero_img" />
              <div
                class="uk-position-center uk-position-small uk-text-center uk-light hero_box"
              >
                <h2 class="uk-margin-remove hero_paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  voluptatem. Dolor quas eaque ad nemo.
                </h2>
                <p class="uk-margin-remove hero_text" style="margin-top: 100px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident corrupti hic eligendi necessitatibus modi reiciendis
                  quidem, consequatur animi molestias placeat ipsa sapiente
                  magni officia nostrum amet a nesciunt dolorem doloribus cum
                  laudantium suscipit, fuga ipsam veritatis? Nostrum inventore
                  obcaecati necessitatibus!
                </p>
              </div>
            </li>
          </ul>

          <div class="uk-light">
            <a
              class="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous
              uk-slideshow-item="previous"
            ></a>
            <a
              class="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next
              uk-slideshow-item="next"
            ></a>
          </div>
        </div>
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