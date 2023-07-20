<template>
  <ul class="author_wrapper">
    <li class="author">
      <h4 class="author_paragraph">John Smith</h4>
      <p class="author_p">6 posts</p>
      <p class="author_text">
        I am Sun Sky, a fake author at this website which is actually a preview
        for Medley theme. Medley is a very modern Medium styled theme!
      </p>
      <ul class="author_list">
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/message-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/message-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
      </ul>
    </li>
    <li class="author">
      <h4 class="author_paragraph">Wow Themes</h4>
      <p class="author_p">6 posts</p>
      <p class="author_text">
        I am the author of my life. Unfortunately, I am writing in pen and can’t
        erase my mistakes. My life is built on a series of choices that I’ve
        made. Being an author simply means you’re in charge of this present
        moment.
      </p>
      <ul class="author_list">
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/message-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
          src="../../assets/message-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
      </ul>
    </li>
    <li class="author">
      <h4 class="author_paragraph">Wow Themes</h4>
      <p class="author_p">6 posts</p>
      <p class="author_text">
        I am the author 
      </p>
      <ul class="author_list">
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/message-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
        <li class="author_item">
          <img
            src="../../assets/wifi-solid.svg"
            alt="icon"
            class="author_img"
            width="20"
            height="20"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style>
.author_wrapper {
  display: flex;
  justify-content: space-between;
}
.author {
  width: 30vw;
  border-radius: 4px;
  border: 1px solid #dec9c9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.author + .author {
  margin-left: 30px;
}
.author_paragraph {
  margin-top: 50px;
  font-size: 26px;
  color: #000;
  font-weight: 700;
  margin-bottom: 0;
}
.author_p {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
}
.author_text {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
}
.author_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.author_item + .author_item {
  margin-left: 20px;
}
/* .author_img {
} */
</style>