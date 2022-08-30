<template>
<div>
    hi
  <!-- <iframe height="100%" width=100% src="../assets/ixp.png" ></iframe> -->
  <embed src="cv_massimo_girondi_eng.pdf" width="100%" height="700px"  /> 
  hi
 
</div>
</template>

<script>
export default {
  name: 'PDFJSViewer',
  props: {
    fileName: String,
    path:String
  },
  computed:{ 
    getFilePath: function () {
      if(this.fileName!==''){
          return this.path +'?file=' + this.fileName
      }
      return this.path 
    }
  }
}
</script>
<style scoped>
div {
  width: 100%;
  height: 79vh;
  min-width: 400px;
}
</style>