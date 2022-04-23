<template>
  <div class="camera">
    <h1>{{ text }}</h1>
    <label for="cameraFileInput">
      <span class="btn btn-primary">Open camera</span>

      <!-- The hidden file `input` for opening the native camera  type="file"  -->
      <input style="display:none;"
        id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
      />
    </label>

    <!-- displays the picture uploaded from the native camera -->
    <img id="pictureFromCamera" />
  </div>
</template>

<script>
export default {
  name: 'CameraComponent',
  data() {
      return {
          text: 'this is a camera O__O',
      }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.openCamera()
    })
    //window.onload = this.openCamera()
  },
  methods: {
    openCamera () {
      document
        .getElementById("cameraFileInput")
        .addEventListener("change", function () {
          document
            .getElementById("pictureFromCamera")
            .setAttribute("src", window.URL.createObjectURL(this.files[0]));
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<!--


-->
