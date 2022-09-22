
<script setup>
import { ref, onMounted } from "vue";

const bgm = ref();
const playing = ref(false);

//  onMounted(
//    ()=>{
//     playMusic()
//    }
//  )

function playMusic() {
  bgm.value.play();
  playing.value = true;
}
function pauseMusic() {
  bgm.value.pause();
  playing.value = false;
}
</script>

<template>
  <div class="main">
    <!-- <div>Happy Birthday</div> -->

    <audio ref="bgm" hidden>
      <source src="../assets/bdaysong.mp3" type="audio/mpeg" />
    </audio>
    <span style="font-size: 24pt">🎙</span>
    <div @click="playMusic()" v-show="!playing" class="m-play">
      <img src="../assets/play.png" width="39" height="39" />
    </div>
    <div @click="pauseMusic()" v-show="playing" class="m-pause">
      <img src="../assets/pause.png" width="39" height="39" />
    </div>

    <div class="slide-hori">
      <div class="inner">
        <h1>
          🎊 祝李韵小朋友生日快乐！🎉 祝 平安健康 工作顺利 生活美满 爱情甜蜜
          天天开心 日进斗金 貌美如花 永远十八 🍾️ 生日快乐 🎂🥳🥳
        </h1>
      </div>
    </div>

    <div class="slide-slow">
      <div class="inner">
        <img src="../assets/cake2.png" width="277" style="trans" />
        <br />

        <div class="bday-bg">
          <p>Happy Birthday</p>
        </div>
      </div>
    </div>

    <div class="fire">
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    </div>

    <div class="btt"></div>
  </div>
</template>

  

<style scoped>
.main {
  margin: 0;
  padding: 20px 0 0 0;
  background: rgb(32, 32, 32);
  overflow: hidden;
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 900px;
}
.fire {
  margin-top: 100px;
}
.m-play img:hover, .m-pause img:hover{
    cursor: pointer;
    
}

div.slide-slow {
  width: 100%;
  position: absolute;
  margin-top: 200px;
  height: 100%;
  overflow-x: auto;
  z-index: 10000;
}
div.slide-slow::-webkit-scrollbar {
  display: none;
}

div.slide-slow div.inner {
  animation: slide-slow 3s;
  margin-top: 0%;
  /* margin-left: 18%; */
  animation-iteration-count: 1;
  flex-direction: row;
  flex-wrap: nowrap;
}

@keyframes slide-slow {
  from {
    margin-top: 150%;
  }
  to {
    margin-top: 0%;
  }
}

.slide-slow p {
  font-family: "Great Vibes";
  font-size: 44pt;
background: linear-gradient(125deg,#e4b636,#ff6565,#ff6565,#ff6565, #65edff, #65edff,#65edff,#4168de);
  /* background: linear-gradient(125deg, #de621f,#ff6565,#ff6565, #65c1ff,#65c1ff,#de65ff,#de65ff); */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
/* hori */

div.slide-hori {
  width: 100%;
  position: absolute;
  margin-top: 80px;
  height: 100%;
  overflow-x: auto;
  z-index: 10000;
}
div.slide-hori::-webkit-scrollbar {
  display: none;
}

div.slide-hori div.inner {
  animation: slide-hori 30s linear;
  margin-top: 0%;
  animation-iteration-count: infinite;
  /* flex-direction: column;
  flex-wrap: nowrap; */
  width: 3000px;
  background-image: linear-gradient(135deg, #ff6565, #e1982b, #ecdb25, #56afbe,#4978e3);
  overflow-x: hidden;
  border-radius: 6px;
  padding: 3px 0;
}

@keyframes slide-hori {
  from {
    margin-left: 130%;
  }
  to {
    margin-left: -3000px;
  }
}

.slide-hori h1 {
  font-size: 36pt;
  color: whitesmoke;
  /* font-family: "PingFang SC", sans-serif; */
}

/*  */

.pyro > .before,
.pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84,
    190px 16.33333px #002bff, -113px -308.66667px #ff009d,
    -109px -287.66667px #ffb300, -50px -313.66667px #ff006e,
    226px -31.66667px #ff4000, 180px -351.66667px #ff00d0,
    -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00,
    -69px -27.66667px #ff0400, -111px -339.66667px #6200ff,
    155px -237.66667px #00ddff, -152px -380.66667px #00ffd0,
    -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00,
    -88px 10.33333px #0d00ff, 112px -309.66667px #005eff,
    69px -415.66667px #ff00a6, 168px -100.66667px #ff004c,
    -244px 24.33333px #ff6600, 97px -325.66667px #ff0066,
    -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff,
    140px -196.66667px #9000ff, 125px -175.66667px #00bbff,
    118px -381.66667px #ff002f, 144px -111.66667px #ffae00,
    36px -78.66667px #f600ff, -63px -196.66667px #c800ff,
    -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff,
    -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2,
    91px -278.66667px #000dff, -22px -191.66667px #9dff00,
    139px -392.66667px #a6ff00, 56px -2.66667px #0099ff,
    -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb,
    -238px -346.66667px #00ff73, 62px -363.66667px #0088ff,
    244px -170.66667px #0062ff, 224px -142.66667px #b300ff,
    141px -208.66667px #9000ff, 211px -285.66667px #ff6600,
    181px -128.66667px #1e00ff, 90px -123.66667px #c800ff,
    189px 70.33333px #00ffc8, -18px -383.66667px #00ff33,
    100px -6.66667px #ff008c;
  -moz-animation: 2s bang ease-out infinite backwards,
    2s gravity ease-in infinite backwards,
    10s position linear infinite backwards;
  -webkit-animation: 2s bang ease-out infinite backwards,
    2s gravity ease-in infinite backwards,
    10s position linear infinite backwards;
  -o-animation: 2s bang ease-out infinite backwards,
    2s gravity ease-in infinite backwards,
    10s position linear infinite backwards;
  -ms-animation: 2s bang ease-out infinite backwards,
    2s gravity ease-in infinite backwards,
    10s position linear infinite backwards;
  animation: 2s bang ease-out infinite backwards,
    2s gravity ease-in infinite backwards,
    10s position linear infinite backwards;
}

.pyro > .after {
  -moz-animation-delay: 1.75s, 1.75s, 1.75s;
  -webkit-animation-delay: 1.75s, 1.75s, 1.75s;
  -o-animation-delay: 1.75s, 1.75s, 1.75s;
  -ms-animation-delay: 1.75s, 1.75s, 1.75s;
  animation-delay: 1.75s, 1.75s, 1.75s;
  -moz-animation-duration: 1.75s, 1.75s, 8.75s;
  -webkit-animation-duration: 1.75s, 1.75s, 8.75s;
  -o-animation-duration: 1.75s, 1.75s, 8.75s;
  -ms-animation-duration: 1.75s, 1.75s, 8.75s;
  animation-duration: 1.75s, 1.75s, 8.75s;
}

@-webkit-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-moz-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-o-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-ms-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes position {
  0%,
  19.99% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.99% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.99% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.99% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.99% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
</style>