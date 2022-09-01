<script>
export default {
  name: "DExp",
  data() {
    return {
      bannerHeight: "",
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight.height;
      },
      false
    );
  },
};
</script>

<template>
  <div class="present">
    <h1>Projects</h1>
    <div class="item">
      <h3>CORACLE ( Thesis Project )</h3>
      <ul>
        <li>
          It's an <b>SPA</b> for literature mining and data visualization.
        </li>
        <li>
          Build the web app full-stack by using <b>Vue</b>, <b>Flask</b>,
          <b>SQLite </b> and <b> Neo4j</b>.
        </li>
        <li>
          Knowledge of deploying apps online such as <b>AWS</b> and
          <b>Docker</b>.
        </li>
      </ul>
      <el-carousel
        :interval="3000"
        :height="bannerHeight + 'px'"
        class="carousel"
        indicator-position="outside"
      >
        <el-carousel-item>
          <div class="caro-box">
            <img ref="bannerHeight" src="@/assets/co3.png" alt="co1" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/co4.png" alt="co2" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/co6.png" alt="co3" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/co1.png" alt="co4" width="100%" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/co2.png" alt="co5" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="item">
      <h3>Internet Exchange Point</h3>
      <ul>
        <li>It's an IXP network monitoring tool built with <b>Python</b>.</li>
        <li>
          Scraped and processed traceroutes information from online databases
          via APIs.
        </li>

        <li>
          Built up network topology and identified the abnormal IXP links.
        </li>
      </ul>
      <div class="image-box">
        <img src="../../assets/ixp.png" alt="ixp" class="bg" />
      </div>
    </div>
    <div class="item">
      <h3>Web Music Player</h3>
      <ul>
        <li>It's a Web music player I built with <b>Vue</b>.</li>
        <li>
          It's fully functional and data is fetched from the NetEase Cloud Music
          API.
        </li>
      </ul>
      <div class="image-box">
        <img src="../../assets/WebPlayer.png" alt="web player" />
      </div>
    </div>
    <div class="item">
      <h3>Travel Aid App UX Design</h3>
      <ul>
        <li>
          This is the experience I had with <b>UX design</b> from beginning to
          end.
        </li>
        <li>
          I learned a lot of things like creating personas, A/B testing, and
          usability testing.
        </li>
        <li>I even did street surveys with my teammate at Gamla Stan.</li>
      </ul>
      <div class="image-box">
        <img src="../../assets/TravelAid.png" alt="travel aid" />
      </div>
    </div>
    <div class="item">
      <h3>WeSplit Android App</h3>
      <ul>
        <li>It's an Android App for splitting bills with friends.</li>
        <li>It's built with Android Studio and <b>Mongo DB</b>.</li>
      </ul>
      <div class="image-box">
        <img src="../../assets/WeSplitAndroidApp.png" alt="wesplit" />
      </div>
    </div>
    <br />
    <h1>Work</h1>
    <div class="item">
      <h3>Editor (MDPI)</h3>
      <ul>
        <li>
          Processed academic manuscripts for publication. It was interesting and
          boring.
        </li>
        <li>Looking for reviewers continuously could be very tedious.</li>
        <li>
          So I wrote a script to scrape the internal system and find reviewers
          automatically.
        </li>
      </ul>
    </div>
    <div class="item">
      <h3>Assistant Product Manager (iHandy)</h3>
      <ul>
        <li>
          Did typical things including analyzing user logs, conducting
          competitive product analysis and coordinating the work of developers
          and designers.
        </li>
        <li>
          Also trivial things like communicating with meditation script
          writers/voice-over actors, replying to users' feedback, and updating
          content.
        </li>
        <li>
          Helped with editing videos and audios for our products, which freed
          our team from queueing for designers.
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>



    


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
  display: flex;
  flex-direction: column;
}
li {
  margin-left: 10px;
  display: list-item;
  list-style-type: disc;
}
img.bg {
  background-color: white;
}
img {
  width: 86%;
  opacity: 0.9;
}

.item {
  background-color: rgb(59, 59, 59);
  /* background-color: #fff; */
  margin-top: 30px;
  padding: 30px;
  /* height: 400px; */
  border-radius: 20px;
}
.carousel img {
  opacity: 1;
}
.caro-box {
  height: 300x;
  display: flex;
  justify-content: center;
  padding: 0 5px;
}
.image-box {
  display: flex;
  justify-content: center;
}
</style>