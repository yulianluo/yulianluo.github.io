<script setup>
import { ref, onMounted } from "vue";

let i = ref(0);
const hi_e = ref();
const hi_s = ref();
const hi_c = ref();
const hi_k = ref();
onMounted(function () {
  window.setInterval(() => {
    i.value = i.value + 1;
    if (i.value === 4) {
      i.value = 0;
    }
    if (i.value === 0) {
      hi_e.value = true;
      hi_s.value = false;
      hi_c.value = false;
      hi_k.value = false;
    } else if (i.value === 1) {
      hi_e.value = false;
      hi_s.value = true;
      hi_c.value = false;
      hi_k.value = false;
    } else if (i.value === 2) {
      hi_e.value = false;
      hi_s.value = false;
      hi_c.value = true;
      hi_k.value = false;
    } else {
      hi_e.value = false;
      hi_s.value = false;
      hi_c.value = false;
      hi_k.value = true;
    }
  }, 1500);
});
</script>
<template>
  <div class="desc">
    <h1>About Me</h1>
    <!-- <video width="320" height="240" controls="controls">
      <source src="../../assets/movie.mp4" type="video/mp4" />
    </video> -->

    <div class="slide-slow">
      <div class="inner">
        <img
          src="../../assets/bg.gif"
          alt="cartoon avatar"
          width="277"
          height="260"
          style="trans"
          loading="lazy"
        />
        <div class="hi">
          <p v-show="hi_e">Hi</p>
          <p v-show="hi_s">Hej</p>
          <p v-show="hi_c">嗨</p>
          <p v-show="hi_k">하이</p>
        </div>
      </div>
    </div>
    <p>
      My name is Yǔ(雨) Lián(莲). In Chinese, 雨 means rain and 莲 means lotus.
      Isn't it a super easy Chinese name for English speakers to pronounce.
    </p>
    <!-- <p>
      Apart from coding, I like making interesting things, like this
      not-so-useful cartoon avatar of myself.
    </p> -->
    <p>
      I'm learning Swedish but now I'm at the stage that knowing more words is
      necessary. As I can't find any helpful app, I'm writing one by myself.
      Hoppas att appen jag vill ha verkligen kan hjälpa mig och att mitt minne
      inte är problemet.
    </p>
    <p>
      Know some Korean. Self-test Topik level 2 (about A2 level). Can understand more than I can speak.
    </p>

    <p>
      I like travelling by myself and chatting with random strangers in hostels
      or restaurants.
    </p>
    <p>I also like baking 🍞 and playing ping pong 🏓️.</p>
  </div>
</template>



<style scoped>
.desc p.co {
  font-size: 36px;
}
.desc p {
  padding-top: 10px;
  font-size: 12pt;
  /* color: aliceblue; */
}

.desc {
  text-align: left;
  margin: 80px 0 20px 0;
}
.links a {
  text-decoration: underline;
  color: rgb(211, 211, 211);
  font-weight: bold;
}
.inner {
  display: flex;
  justify-content: justify;
}
.inner img {
  opacity: 0.9;
}
.hi {
  /* background-color: rgba(255, 255, 255, 0.573); */
  background-image: repeating-linear-gradient(
    45deg,
    #3f3f3f 40px,
    #2f2f2f 80px
  );
  width: 166px;
  text-align: center;
}
.hi p {
  font-size: 50px;
  margin-top: 100px;
  width: 166px;
}

div.slide-slow {
  /* width: 90%; */
  margin-top: 5px;
  height: 265px;
  overflow-x: auto;
}
div.slide-slow::-webkit-scrollbar {
  display: none;
}

div.slide-slow div.inner {
  animation: slide-slow 3s;
  margin-top: 0%;
  /* margin-left: 18%; */
  animation-iteration-count: 1;
  flex-direction: row;
  flex-wrap: nowrap;
}

@keyframes slide-slow {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}
</style>