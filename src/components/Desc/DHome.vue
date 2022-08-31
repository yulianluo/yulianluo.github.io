<template>
  <div class="desc">
    <p class="co">Hi! I'm Yulian</p>

    <p>
      A master's student at KTH about to graduate and looking for a job right
      now.
    </p>
    <div class="fix-box">
      <div class="skills">
        <div class="skill-item">
          <div class="skill-item-header">
            <img
              src="../../assets/work.png"
              alt="work"
              style="margin-left: 2px; width: 36px; height: 36px"
            />
            <h4>Looking for a Job</h4>
          </div>
          <p>
            Feel competent for
            <b>front/back-end</b> and
            <b>full-stack </b>junior postions.
          </p>

          <p>
            Open to <b>any developer job</b> if
            you found me suitable.
          </p>
        </div>

        <div class="skill-item">
          <div class="skill-item-header">
            <img
              src="../../assets/code.png"
              alt="code"
              style="width: 40px; height: 25px; margin-top: 5px"
            />
            <h4>Coding Skills</h4>
          </div>
          <p>
            Comfortable with writing
           <b> Python</b>, <b>Javascript</b>, <b>HTML</b>, <b>CSS</b>.
          </p>

          <p>Crouse project experience with Java and C++.</p>
          <p>SQL/NoSQL databases, Linux, Git.</p>
        </div>

        <div class="skill-item">
          <div class="skill-item-header">
            <img
              src="../../assets/video.png"
              alt="video"
              style="width: 36px; height: 36px"
            />
            <h4>Others</h4>
          </div>
          <p>Experience with <b>UX design</b>.</p>
          <p>
            Good at Adobe Premiere and Audition. Always happy to help with <b>video and audio
            editing</b>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.desc p.co {
  font-size: 36px;
  margin-top: 20px;
}
.desc p {
  font-size: 12pt;
  /* color: aliceblue; */
}

.desc {
  text-align: center;
  padding: 5px;
}

.fix-box {
  overflow: auto;

  height: 220px;
}
.skills {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  padding: 0 5px;
}

.skill-item {
  margin: 10px 5px 0px 5px;
  width: 280px;
  text-align: left;
  padding: 10px;
  background-color: rgb(60, 60, 60);
  border-radius: 10px;
}
.skill-item-header {
  display: flex;
  display: -webkit-flex;
  width: 90%;
  margin-bottom: 8px;
}
.skill-item-header h4 {
  margin-top: 8px;
  margin-left: 10px;
}

.skill-item p {
  margin-top: 4px;
  margin-left: 14px;
  display: list-item;
   list-style-type: circle;
 
}
</style>