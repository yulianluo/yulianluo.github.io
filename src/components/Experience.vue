<script setup>
import { ref } from "vue";
const test = false;
// Get data from Filters.vue
const count = ref(0);
const filter = ref({});
const updateFilter = (e) => {
  filter.value = e.value;
  count.value += 1;
};
//Change active tab
const activeName = ref("stat");
</script>


<template>
  <div class="main">
    <div class="present">
      <h1>Projects</h1>
      <h3>CORACLE (Thesis Project)</h3>
      <ul>
        <li>
          • Develop a web app for literature mining and data visualization.
        </li>
        <li>
          • Scrape and organize article information from NCBI public API .
        </li>
        <li>
          • Build the web app full-stack by using Vue, Flask, SQLite and Neo4j.
        </li>
        <img src="../assets/ixp.png" alt="ixp" class="ixp" />
      </ul>
      <h3>Internet Exchange Point</h3>
      <ul>
        <li>
          • Collected and filtered traceroutes information from online
          databases.
        </li>
        <li>
          • Scraped IXP information from online databases and restructured JSON
          files.
        </li>
        <li>• Built up network topology, identified the abnormal IXP links.</li>
      </ul>
      <img src="../assets/ixp.png" alt="ixp" class="ixp" />
      <h3>Web Music Player</h3>
      <ul>
        <li>• It's a Web music player I built with Vue.</li>
        <li>• It's fully functionally including MV.</li>
        <li>
          • Unfortunatly the API ( NetEase Cloud Music) I used is only
          accessable in China. 😢
        </li>
      </ul>
      <h3>Travel Aid App UX Design</h3>
      <ul>
        <li>• This is the experience I had with UX design.</li>
        <li>
          • I learned a lot about the UX design process such as creating
          personas, A/B testing, and usability testing.
        </li>
        <li>• I even did street surveys with my teammate at Gamla Stan.</li>
        <img src="../assets/TravelAid.png" alt="travel aid" class="ixp" />
      </ul>
      <h3>WeSplit Android App</h3>
      <ul>
        <li></li>
      </ul>

      <img src="../assets/WeSplitAndroidApp.png" alt="wesplit" class="ixp" />
      <h1>Work</h1>
      <h3>MDPI Editor</h3>
      <ul>
        <li>
          • I Processed academic manuscripts for publication. It was interesting
          and boring.
        </li>
        <li>•  Looking for reviewers continuously could be very tedious.</li>
        <li>
          • So I wrote a script to scrape the internal system and find reviewers automatically.
        </li>
      </ul>
      <h3>iHandy Assistant Product Manager</h3>
      <ul>
        <li></li>
      </ul>
      <h3></h3>
    </div>
  </div>
</template>




<style scoped>
.main {
  width: 100%;
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: center;
}
.present {
  width: 60%;
  text-align: left;
}
img.ixp {
  width: 60%;
}
img{
  background-color:white;
}
</style>