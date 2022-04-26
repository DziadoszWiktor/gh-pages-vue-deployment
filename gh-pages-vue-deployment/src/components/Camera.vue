<template>
  <div class="camera">
    <h1>{{ text }}</h1>
    <label for="cameraFileInput">
      <span class="btn btn-primary">Open camera</span>

      <!-- The hidden file `input` for opening the native camera  type="file"  -->
      <input
        style="display:none"
        id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
      />
    </label><br>

    <!-- displays the picture uploaded from the native camera width:800px;heigh:800px; -->
    <img id="pictureFromCamera" style="width:800px;heigh:800px;object-fit: scale-down;"/>
    <br>
    <h1>-----------------------</h1>
    <img id="pictureFromStorage" style="width:800px;heigh:800px;object-fit: scale-down;"/>
  </div>
</template>

<script>
import { uploadString } from '@firebase/storage';
//import { refImg } from '../firebase';
//import { base64StringToBlob } from 'blob-util';
import { storage } from '../firebase';
import { ref } from '../firebase';
//import { getDownloadURL } from '../firebase';

export default {
  name: 'CameraComponent',
  data() {
      return {
          text: 'this is a camera O__O',
      }
  },
  mounted() {
    this.openCamera();
  },
  methods: {
    openCamera () {
        document
        .getElementById("cameraFileInput")
        .addEventListener("change", function () {
          var FR= new FileReader();
          FR.addEventListener("load", function(e) {
            document.getElementById("pictureFromCamera").src = e.target.result;
            //window.console.log("this is: "+e.target.result);
            const base64img = e.target.result;
            //window.console.log("this is a base64 var: "+ base64img);
            var uuid = require("uuid");
            var id = uuid.v4();
            //console.log(id);
            const refImg = ref(storage, 'cars/'+id+'.jpg');
            uploadString(refImg,base64img,'data_url').then((snapshot) =>{
              console.log("The photo has been sent in path cars/"+id+".jpg");``
            })
          }); 
          FR.readAsDataURL( this.files[0] );
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<!--


-->
