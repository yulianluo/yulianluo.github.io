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
          alt="Swimming fish"
          width="277" height="260"
          style="trans"
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
      My name is Yu(雨) Lian(莲). In Chinese, 雨 means rain and 莲 means lotus.
    </p>
    <p>
      Apart from coding, I like making interesting things, like this not-so-useful cartoon avatar of myself.
    </p>
    <p>
      Know some Korean. Self-test Topik level 2 (about A2 level). Can
      understand more than I can speak.
    </p>
    <p>
      Passed the SFI D level exam. But that was before my study leave. Now I
      basically forget everything.
    </p>
    <p>
      I like travelling by myself and chatting with random strangers in hostels or
      restaurants.
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
  margin-top: 30px;
}
.links a {
  text-decoration: underline;
  color: rgb(211, 211, 211);
  font-weight: bold;
}
.inner{
  display: flex;
   justify-content: justify
}
.inner img{
 
   opacity: 0.8;
}
.hi{
  /* background-color: rgba(255, 255, 255, 0.573); */
    background-image: repeating-linear-gradient(
    45deg,
    #3f3f3f 40px,
    #2f2f2f 80px
  );
  width: 166px;
  text-align: center;
 
}
.hi p{
  font-size: 50px;
  margin-top: 100px;
  width:166px

}


div.slide-slow {
  width: 90%;
  height: 260px;
  /* overflow: hidden; */
     overflow: auto;
  
}
div.slide-slow div.inner {
  animation: slide-slow 3s;
  margin-top: 0%;
  margin-left: 10%;
  animation-iteration-count: 1;

  flex-direction: row;
  flex-wrap: nowrap;
}
@keyframes slide-slow {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 10%;
  }
}

</style>