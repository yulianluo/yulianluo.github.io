<script setup>
import { ref } from "vue";
import DHome from "./Desc/DHome.vue";

const large = ref(true);
const small = ref(false);

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 660) {
        large.value = true;
        small.value = false;
      } else {
        small.value = true;
        large.value = false;
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
</script>

<template>
  <div class="main">
    <div class="bg" v-show="large">
      <div class="hire">Hire Me</div>

      <div class="large">
        <DHome />
      </div>
    </div>

    <div class="small" v-show="small">
      <DHome />
    </div>
    <div class="end">
     
      <p>
        Interested? Check my
        <a
          href="https://drive.google.com/file/d/1tV0MXDJW7DjtkiS9elJsS_CGFUXZkhrc/view?usp=sharing
"
          >CV</a
        >, details about things 
        <router-link to="/experience">I've done</router-link></p><p>
  
        and things <router-link to="/about">about me</router-link> as a person.
      </p>
     <div>
    </div>
  </div>
  </div>
</template>



<style scoped>
.main{
  min-height:530px;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 20px
 
}

.small {
  width: 90%;
  position: absolute;
  /* color: white; */
  top: 60px;
  right: 0;
  left: 0;
  margin: auto;
}


.hire {
   /* background-image: linear-gradient(45deg, #555555 ,#2f2f2f, #555555); */
  background-image: repeating-linear-gradient(45deg, #3f3f3f 40px,#2f2f2f 80px);
   min-height:530px;
  /* background-color: rgb(107, 107, 107); */
  position: absolute;
  color: white;
  top: 30px;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  font-size: 180px;
  width: 100%;
 
  z-index: -1;
}
.large {
  background-image: linear-gradient(180deg, rgba(63, 63, 63,0.9) 8px,rgba(43,43,43,1) 28px);
  width: 80%;
  height: 360px;
  /* background-color: rgb(43, 43, 43); */
  position: absolute;
  color: white;
  top: 170px;
  right: 0;
  left: 0;
  margin: auto;
  border-radius: 10px;
  z-index: 5;
}
.end {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 10px;
  margin: auto;
  width: 90%;
  font-size: 18px;
}

.end a {
  text-decoration: underline;
  color: rgb(211, 211, 211);
  font-weight: bold;
}
</style>