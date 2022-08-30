<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/About.vue";
import HomePage from "./components/HomePage.vue";
import Experience from "./components/Experience.vue";
var number = "123";
function log() {
  console.log(number);
}
import { ref } from "vue";

// const isHeader = "🥣";

const value1 = ref([]);
const value2 = ref([]);

</script>


<template>
  <div id="app">
    <!-- Header -->
    <Header />
    <!-- Divide main page-->
    <div class="mainpage">
      
      
      
       <!-- <router-link to="/statistics">Search</router-link> -->
    <!-- <router-link to="/about"><SearchFrame /></router-link> -->
     
     

    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

// let filters = [
//   { id: 1, title: "Publication Type", value: [] },
//   { id: 2, title: "Journal", value: [] },
//   { id: 3, title: "Language", value: [] },
//   { id: 4, title: "MeSH", value: [] },
// ];

// let menus = [
//   { id: 1, title: "Statistics", to: "/statistics" },
//   { id: 2, title: "Citation Map", to: "/citation-map" },
//   { id: 3, title: "Similartiy Network", to: "/similarity-network" },
//   { id: 4, title: "MeSH Map", to: "/mesh-map" },
// ];
// let filters = [
//   { id: 1, title: "Publication Type" },
//   { id: 2, title: "Journal" },
//   { id: 3, title: "Language" },
//   { id: 4, title: "MeSH" },
// ];

export default {


  data() {
    return {
      title: "Hej",
      text: "Da",
      isHeader: '🥣'
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cdcdcd;
   
}

.mainpage {
  background-color: rgb(141, 141, 172);
  /* min-height: 520px; */
  height: 100%;
}

</style>
