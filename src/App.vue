<script setup>
import { ref } from "vue";

const large = ref(true);
const small = ref(false);
const small_menu = ref(false);
function setDrawer() {
  small_menu.value = !small_menu.value;
}

function closeSmallMenu() {
  setTimeout(500);
  small_menu.value = false;
}

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 660) {
        large.value = true;
        small.value = false;
      } else {
        small.value = true;
        large.value = false;
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
</script>

<template>
  <div id="app">
    <div>
      <div class="main-header">
        <div class="hearder-large" v-show="large">
          <div class="header-left">
            <ul>
              <li>
                <img
                  src="./assets/cat.png"
                  alt="logo"
                  style="width: 26px; margin-top: 5px"
                />
              </li>
              <li><router-link to="/">Yulian Luo</router-link></li>
            </ul>
          </div>
          <div class="header-large-right">
            <ul>
              <li><router-link to="/experience">Experience</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1jQ5kfLcKAq-yoyRuSc5PY5vlN1hF9MXD/view?usp=sharing
"
                  >CV</a
                >
              </li>
            </ul>
          </div>
          <!-- <el-col :span="3"> Add BTNs later {{ isHeader }} </el-col> -->
        </div>
        <div class="header-small" v-show="small">
          <div class="header-small-left">
            <ul>
              <li>
                <img
                  src="./assets/small-cat.png"
                  alt="logo"
                  style="width: 55px"
                  @click="setDrawer()"
                />
              </li>
              <li><router-link to="/">Yulian Luo</router-link></li>
            </ul>
          </div>

          <div class="header-small-right" v-show="small_menu">
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1jQ5kfLcKAq-yoyRuSc5PY5vlN1hF9MXD/view?usp=sharing
"
                  >CV</a
                >
              </li>

              <li @click="closeSmallMenu()">
                <router-link to="/experience">Experience</router-link>
              </li>
              <li @click="closeSmallMenu()">
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
        <el-affix> </el-affix>
      </div>
    </div>
    <div @click="closeSmallMenu()" class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  props: { isHeader: String },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cdcdcd;
}

.contact {
  position: fixed;
  right: 30px;
  top: 12px;
  font-size: 18px;
  height: 30px;
  font-weight: bold;
  /* background-color: #fff; */
  text-align: right;
  z-index: 10;
}
.main-header {
  /* background-color: #c5c5c5; */
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: rgb(35, 35, 35);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.main-header img {
  width: 40px;
  padding-top: 5px;
  padding-right: 10px;
}

.main-header .hearder-large ul li {
  float: left;
  height: 50px;
}
.main-header ul li a {
  display: inline-block;
  padding: 0 15px;
  height: 100%;
  color: rgb(219, 219, 219);
  /* padding-left: 30px; */
}
.main-header ul li a:hover {
  background-color: #4e4e4e;
}
.main-header ul li a.link-active {
  /* background-color: rgb(168, 168, 168); */
  background-image: linear-gradient(135deg, #2f2f2f, #4e4e4e);
  color: #f7f7f7;
}
.hearder-large {
  width: 80%;
}
.header-large-right {
  float: right;
  padding-right: 20px;
}
.header-small {
  width: 90%;
}
.header-small img:hover {
  cursor: pointer;
}
.header-small-left img {
  width: 100px;
}
.header-small-left ul li {
  float: left;
  height: 50px;
}
.header-small-right {
  display: inline-block;
  position: absolute;
  top: 50px;
  left: 10px;
  text-align: left;
  background-color: rgb(33, 33, 33);
  width: 120px;
  overflow: hidden;
  z-index: 30;
}
.header-small-right ul li a {
  width: 100%;
  z-index: 100000;
}
</style>