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
      if (clientWidth >= 640) {
        large.value = true;
        small.value = false;

        console.log(">=640", clientWidth, large.value);
      } else {
        small.value = true;
        large.value = false;

        console.log("else", clientWidth, large.value);
        console.log("else", clientWidth, small.value);
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

</script>

<template>
  <div class="main">
    <div class="large" v-show="large">
      <DHome />
    </div>
        <div class="small" v-show="small">
      <DHome />
    </div>
  </div>
</template>



<style scoped>
.main {
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(43, 43, 43);
}
.large {
  width: 60%;
}
.small{
  width: 90%;
}



</style>