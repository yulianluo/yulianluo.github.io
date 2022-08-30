<script setup>
import { ref } from "vue";

var number = "123";
function log() {
  console.log(number);
}
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="main">
    <div class="present">
      <h1>Things About Me</h1>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: rgb(43, 43, 43);
  width: 100%;
  display: flex;
  justify-content: center;
}
.present {
  width: 70%;
  background-color: rgb(170, 110, 110);
  text-align: left;
}
</style>
