<template>
  <div class="main">
    <div class="home">
      <div class="desc">
        <p class="co">Hi!</p>

        <p>I'm <span style="font-size:26px">Yulian Luo</span> a master's student at KTH.</p>
        <p>I'm about to graduate and <span style="font-size:22px">looking for a job</span> right now.</p>
        <p>I'm comfortable with writing <span style="font-size:22px"> Python, Javascript, HTML, CSS</span>.</p>
        <p>I've learned and used Java and C++ for course projects as well.</p>
        <p>
          I've been building an SPA with  <span style="font-size:22px">Vue</span> and  <span style="font-size:22px">Flask</span> from scratch for my
          thesis.
        </p>

        <p>So I feel competent for  <span style="font-size:22px">front/back-end</span> and <span style="font-size:22px"> full-stack</span> junior postions.</p>
        <p>But I'm open to any developer position if you found me suitable.</p>

        <div class="links">
          <p>
            If you're interested, please check my <router-link to="/cv">CV</router-link>, details
            about things <router-link to="/experience">I've done</router-link> and things
            <router-link to="/about">about me</router-link> as a person.
          </p>

          <p>Please feel free to contact me: yulian@kth.se</p>
          <!-- <img src="../assets/email.png" alt="email" style="width: 20px"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     console.log(this.$store.state)
  //   this.$store.commit('setPubdate')
  //   console.log(this.$store.state)
  //   }
  // }
  // mounted(){
  //   console.log(this.$store.state)
  //   this.$store.commit('setPubdate','Hello')
  //   console.log(this.$store.state)
  // }
};
</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(43, 43, 43);
}
.home {
  top: 50px;
  width: 60%;
}

.home p.co {
  padding-top: 70px;
  font-size: 36px;
}
.home p {
  padding-top: 10px;
  font-size: 12pt;
  /* color: aliceblue; */
}

.desc {
  text-align: left;
}

.BTNS {
  /* background-color: #fff; */
  /* display: block; */
  /* margin: 0 auto;
  width: 200px; */
  width: 100%;
  margin-top: 50px;
}
.BTN {
  background-color: rgb(51, 94, 175);
  /* width: 100px; */
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 10px;
  border-radius: 5px;
  /* display: block;
  margin: 0 auto; */
}
.BTN p {
  color: azure;
}
.BTN :hover {
  background-color: #894b9c;
  border-radius: 5px;

  cursor: pointer;
}
.links a {
  text-decoration: underline;
  color: rgb(211, 211, 211);
  font-weight: bold;
}
</style>