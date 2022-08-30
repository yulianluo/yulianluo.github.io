<template>
  <div class="present">
    <h1>Projects</h1>
    <div class="item">
      <h3>CORACLE (Thesis Project)</h3>
      <ul>
        <li>
          • It's an SPA Web App for literature mining and data visualization.
        </li>
        <li>
          • Build the web app full-stack by using Vue, Flask, SQLite and Neo4j.
        </li>
        <li>• Scrape and organize data from NCBI public API .</li>
      </ul>
      <img src="../../assets/ixp.png" alt="ixp" class="bg" />
    </div>
    <div class="item">
      <h3>Internet Exchange Point</h3>
      <ul>
        <li>• It's a IXP network monitoring tool.</li>
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
      <img src="../../assets/ixp.png" alt="ixp" class="bg" />
    </div>
    <div class="item">
      <h3>Web Music Player</h3>
      <ul>
        <li>• It's a Web music player I built with Vue.</li>
        <li>
          • It's fully functionally and data is fetched from the NetEase Cloud
          Music API.
        </li>
      </ul>
      <img src="../../assets/WebPlayer.png" alt="web player" />
    </div>
    <div class="item">
      <h3>Travel Aid App UX Design</h3>
      <ul>
        <li>
          • This is the experience I had with UX design from beginning to end.
        </li>
        <li>
          • I learned a lot things like creating personas, A/B testing, and
          usability testing.
        </li>
        <li>• I even did street surveys with my teammate at Gamla Stan.</li>
      </ul>
      <img src="../../assets/TravelAid.png" alt="travel aid" />
    </div>
    <div class="item">
      <h3>WeSplit Android App</h3>
      <ul>
        <li>• It's a Android App for splitting bills with friends.</li>
        <li>• It's built with Android Studio and Mongo DB.</li>
      </ul>
      <img src="../../assets/WeSplitAndroidApp.png" alt="wesplit" />
      <br />
     
    </div>
     <h1>Work</h1>
    <div class="item">
      <h3>Editor (MDPI)</h3>
      <ul>
        <li>
          • I Processed academic manuscripts for publication. It was interesting
          and boring.
        </li>
        <li>• Looking for reviewers continuously could be very tedious.</li>
        <li>
          • So I wrote a script to scrape the internal system and find reviewers
          automatically.
        </li>
      </ul>
    </div>
    <div class="item">
      <h3>Assistant Product Manager (iHandy)</h3>
      <ul>
        <li></li>
      </ul>
    </div>
    <h3></h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.present {
  margin-top: 30px;
  text-align: left;
}
h1 {
  margin-top: 30px;
}

ul {
  margin-top: 8px;
  margin-bottom: 15px;
}
li {
  margin-left: 10px;
}
img.bg {
  background-color: white;
}
img {
  margin-left: 10px;
 
  width: 70%;
}
.item {
  
  background-color: rgb(59, 59, 59);
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
}
</style>