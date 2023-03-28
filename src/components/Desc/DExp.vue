<script>
import { ref } from "vue";

export default {
  name: "DExp",
  data() {
    return {
      bannerHeight: "",
      bgColor: "",
      textColor: "",
    };
  },
  setup() {
    const large = ref();
    const isPhone = ref();
    const windowWidth = ref(window.innerWidth);

    return { large, isPhone, windowWidth };
  },

  mounted() {
    console.log("w", this.windowWidth);

    if (this.windowWidth > 1105) {
      this.large = true;
      this.isPhone = false;
    } else if (this.windowWidth < 450) {
      this.isPhone = true;
      this.large = false;
    } else {
      this.large = false;
      this.isPhone = false;
    }

    const docEl = document.documentElement;
    const resizeEvt =
      "orientationchange" in window ? "orientationchange" : "resize";
    const recalc = () => {
      const clientWidth = docEl.clientWidth;
      console.log("sss", clientWidth);
      if (!clientWidth) return;
      if (clientWidth > 1105) {
        this.large = true;
        this.isPhone = false;
      } else if (clientWidth < 450) {
        this.isPhone = true;
        this.large = false;
      } else {
        this.large = false;
        this.isPhone = false;
      }
    };
    if (!docEl.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    docEl.addEventListener("DOMContentLoaded", recalc, false);

    // window.addEventListener(
    //   "resize",
    //   () => {
    //     this.bannerHeight = this.$refs.bannerHeight.height;
    //   },
    //   false
    // );
    // setTimeout(function () {
    //   // console.log("hash out", window.location.hash);
    //   const id_hash = window.location.hash.split("#/experience#")[2];
    //   if (id_hash) {
    //     document.getElementById(id_hash).scrollIntoView({
    //       behavior: "smooth",
    //       block: "start",
    //       inline: "nearest",
    //     });
    //   }
    // }, 100);
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      let topS = document.documentElement.scrollTop;

      console.log("tttop top ", topS, this.large);
      if (topS > 100 && topS < 680) {
        this.bgColor = "#eeedee";
        this.textColor = "#069fa7";
      } else if (this.large == false && topS > 1000 && topS < 4000) {
        this.bgColor = "#E1E5EB";
        this.textColor = "#E59462";
      } else if (this.large == true && topS > 1800 && topS < 2800) {
        this.bgColor = "#E1E5EB";
        this.textColor = "#E59462";
      } else if (this.isPhone == true && topS > 1800 && topS < 3800) {
        this.bgColor = "#E1E5EB";
        this.textColor = "#E59462";
      } else {
        this.bgColor = "";
        this.textColor = "";
      }
    },
  },
};
</script>  





<template>
  <div
    class="present"
    :style="{ backgroundColor: bgColor, color: textColor }"
    @scroll="handleScroll"
  >
    <h1 id="project">Projects</h1>
    <div class="item" id="mem">
      <div class="item-desc" :style="{ width: large ? '350px' : '80%' }">
        <h3>Memorize {{ descWidth }}</h3>
        <ul>
          <li>I build the <b>Web App</b> for helping me remember Swedish words.</li>
          <li>
            Fullfiled functions like choose meaning, check spell, add wordbook.
          </li>
          <li>
            Build the app full-stack by using <b>React</b>, <b>Express</b>, and
            <b>MongoDB</b>.
          </li>
        </ul>
      </div>
      <div class="image-box">
        <img
          src="../../assets/memm.gif"
          alt="mem1"
          style="trans"
          loading="lazy"
        />
      </div>

      <!-- <el-carousel
        :interval="4000"
        :height="bannerHeight + 'px'"
        class="carousel"
        indicator-position="outside"
      >
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/memm.gif" alt="mem1" loading="lazy" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/c2.png" alt="c2" loading="lazy" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img src="../../assets/c3.png" alt="c3" loading="lazy" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="caro-box">
            <img
              src="../../assets/c4.png"
              alt="c4"
              width="100%"
              loading="lazy"
            />
          </div>
        </el-carousel-item>
      </el-carousel> -->
    </div>
    <div class="item" id="coracle">
      <div class="item-desc" :style="{ width: large ? '350px' : '80%' }">
        <h3>CORACLE</h3>
        <h4>Thesis Project: COVID-19 Literature Compiler</h4>
        <ul>
          <li>
            It's an <b>SPA</b> for literature mining and data visualization.
          </li>
          <li>
            Build the web app full-stack by using <b>Vue</b>, <b>Flask</b>,
            <b>SQLite </b> and <b> Neo4j</b>.
          </li>
          <li>
            Gain knowledge of deploying apps online such as <b>AWS</b> and
            <b>Docker</b>.
          </li>
          <li>
            Check
            <a href="https://youtu.be/lVo1loxRlUI" target="_blank">the demo</a>
            on YouTube.
          </li>
        </ul>
      </div>
      <div class="image-box">
        <el-carousel
          :interval="3000"
          class="carousel"
          indicator-position="outside"
        >
          <el-carousel-item>
            <div class="caro-box">
              <img
                src="../../assets/c1.png"
                alt="c1"
                width="600"
                loading="lazy"
              />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="caro-box">
              <img src="../../assets/c2.png" alt="c2" loading="lazy" />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="caro-box">
              <img src="../../assets/c3.png" alt="c3" loading="lazy" />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="caro-box">
              <img
                src="../../assets/c4.png"
                alt="c4"
                width="100%"
                loading="lazy"
              />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="caro-box">
              <img src="../../assets/c5.png" alt="c5" loading="lazy" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="item" id="ixp">
      <div class="item-desc" :style="{ width: large ? '300px' : '80%' }">
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
      </div>
      <div class="image-box">
        <img src="../../assets/ixp.png" alt="ixp" class="bg" />
      </div>
    </div>
    <div class="item" id="musicplayer">
      <div class="item-desc" :style="{ width: large ? '300px' : '80%' }">
        <h3>Web Music Player</h3>
        <ul>
          <li>It's a Web music player I built with <b>Vue</b>.</li>
          <li>
            It's fully functional and data is fetched from the NetEase Cloud
            Music API.
          </li>
        </ul>
      </div>
      <div class="image-box">
        <img src="../../assets/WebPlayer.png" alt="web player" />
      </div>
    </div>
    <div class="item" id="travelaid">
      <div class="item-desc" :style="{ width: large ? '300px' : '80%' }">
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
      </div>
      <div class="image-box">
        <img src="../../assets/TravelAid.png" alt="travel aid" />
      </div>
    </div>
    <div class="item" id="wesplit">
      <div class="item-desc" :style="{ width: large ? '300px' : '80%' }">
        <h3>WeSplit Android App</h3>
        <ul>
          <li>It's an Android App for splitting bills with friends.</li>
          <li>It's built with Android Studio and <b>Mongo DB</b>.</li>
        </ul>
      </div>
      <div class="image-box">
        <img src="../../assets/WeSplitAndroidApp.png" alt="wesplit" />
      </div>
    </div>
    <br />
    <div class="work">
      <h1 id="work">Work</h1>
      <div class="item" :style="{ width: large ? '60%' : '80%' }">
        <h3>Editor (MDPI Sensors Journal)</h3>
        <ul>
          <li>
            Processed academic manuscripts for publication. It was interesting
            and boring.
          </li>
          <li>
            Looking for reviewers continuously could be very tedious. So I wrote
            a Python script to scrape the internal system and find reviewers
            automatically.
          </li>
        </ul>
      </div>
      <div class="item" :style="{ width: large ? '60%' : '80%' }">
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
            Helped with editing videos and audios for our sleep/meditation app,
            which freed our team from queueing for designers.
          </li>
        </ul>
      </div>
    </div>
    <br />
  </div>
</template>



    


<style scoped>
.present {
  transition: background-color 0.5s, color 0.1s;
  width: 100%;
}

.present {
  margin-top: 80px;
  text-align: left;
}
h1 {
  text-align: center;
  top: 200px;
  font-size: 100px;
}
h3 {
  font-size: 30px;
}

h1#project {
  padding: 100px 0 120px 0;
}

h1#work {
  padding: 100px 50px 0;
}

ul {
  margin-top: 8px;
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
  margin-top: 15px;
  width: 86%;
  opacity: 0.9;
  height: 86%;
}

.item {
  /* background-color: rgb(45, 93, 119); */
  /* background-color: #fff; */

  padding: 50px 0;
  margin: auto 0;

  /* height: 400px; */
  /* border-radius: 20px; */
  scroll-margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-desc {
  /* background-color: #fff; */
  padding: 50px;
  /* max-width: 300px; */
}
.item .image-box {
  /* display: flex;
  justify-content: center; */
  width: 600px;
  margin: 0 20px;
}
.image-box img {
  width: 100%;
  height: auto;
}

.carousel img {
  opacity: 1;
}

.present li a {
  /* color:rgb(233, 233, 233); */
  color: #c83f5f;
  font-weight: bold;
}

.item#mem {
  background-color: #eeedee;
  color: #069fa7;
}

.item#coracle {
  background-color: #d8d0cd;
  color: #b2456e;
}
.item#ixp {
  background-color: #656e77;
  color: #dddbde;
}

.item#musicplayer {
  background-color: #0c0d0d;
  color: #d1b5a3;
}
.item#travelaid {
  background-color: #3a6d80;
  color: #f3cd53;
}

.item#wesplit {
  background-color: #edf4f2;
  /* color: #31473A */
  color: #68a4a5;
}

.item#wesplit {
  background-color: #e1e5eb;
  color: #e59462;
}

.work .item{
 
  margin:  0 auto;
}
</style>