<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>

.desc p.co {
 
  font-size: 36px;
}
.desc p {
  padding-top: 10px;
  font-size: 12pt;
  /* color: aliceblue; */
}

.desc {
  text-align: left;
  margin-top: 100px
}
.links a {
  text-decoration: underline;
  color: rgb(211, 211, 211);
  font-weight: bold;
}

</style>