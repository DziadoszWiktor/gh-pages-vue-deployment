<template>
  <div class="camera">
    <h1>{{ text }}</h1>
    
    <div>
        <video ref="video">Stream unvaiable</video>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CameraComponent',
  mounted() {
      this.video = this.$refs.video
      this.startCapture(0)
  },
  methods: {
      startCapture () {
          navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
              this.video.srcObjcet = stream
              this.video.play()
          }).catch(error =>{
              console.log(error)
          })
      }
  },
  data() {
      return {
          text: 'this is a camera O__O',
          video: null
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
