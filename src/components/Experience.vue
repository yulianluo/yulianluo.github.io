<script setup>
import { ref,computed, } from "vue";
import DExp from "./Desc/DExp.vue";

const large = ref(true);

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 660) {
        large.value = true;
      } else {
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
    <div class="large" v-show="large">
      <DExp />
    </div>
        <div class="small" v-show="!large">
      <DExp />
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