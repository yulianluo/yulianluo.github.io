<template>
  <div class="main">
    <div class="hearder">
    <div class="header-left">
      <ul>
        <li><img src="../assets/cat.png" alt="logo" style="width: 26px; margin-top: 5px" /></li>
        <li><router-link to="/">Yulian Luo</router-link></li>
      </ul>
    </div>
    <div class="header-right">
      <ul>
        <li><router-link to="/cv">CV</router-link></li>
        <a href="../assets/CV_YulianLuo_KTH.pdf" target=”_blank”>CV</a>
        
       
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <!-- <el-col :span="3"> Add BTNs later {{ isHeader }} </el-col> -->
  </div>
  </div>
</template>

<script>
export default {
  props: { isHeader: String },
};
</script>

<style scoped>
.main {
  /* background-color: #c5c5c5; */
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: rgb(35, 35, 35);

    display: flex;
  justify-content: center;
}
.main img {
  width: 40px;
  padding-top: 5px;
  padding-right: 10px;
}
.main ul li {
  float: left;
  height: 50px;
}
.main ul li a {
  display: inline-block;
  padding: 0 20px;
  height: 100%;
  color: rgb(219, 219, 219);
  /* padding-left: 30px; */
}
.main ul li a:hover {
  background-color: rgb(106, 106, 106);
}
.main ul li a.link-active {
  /* background-color: rgb(168, 168, 168); */
  background-image: linear-gradient(135deg, #2f2f2f, #4e4e4e);
  color: #f7f7f7;
}
.hearder{
  width: 66%
}
.header-right{
  float: right;
}
</style>