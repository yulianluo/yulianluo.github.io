<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, reactive,computed } from "vue";
import HelloWorld from "./components/About.vue";
import HomePage from "./components/HomePage.vue";
import Experience from "./components/Experience.vue";
import Header from "./components/Header.vue";
</script>


<template>
  <div id="app">
    <!-- Header -->
    <Header />
    <!-- Divide main page-->
   
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cdcdcd;
}


</style>
