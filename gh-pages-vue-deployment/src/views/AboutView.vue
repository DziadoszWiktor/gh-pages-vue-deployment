<template>
  <div class="camera" style="text-align:center;">
    <h1>smhhh</h1><br>
    <button class="btn btn-primary mb-5" @click="Upload()">Upload photo</button><br>
    <img id="pictureFromStorage" style="width:800px;heigh:800px;object-fit: scale-down;"/>

  </div>
</template>

<script>
//import { uploadString } from '@firebase/storage';
//import { refImg } from '../firebase';
//import { base64StringToBlob } from 'blob-util';
import { storage } from '../firebase';
import { ref } from '../firebase';
import { getDownloadURL } from '../firebase';

export default {
  name: 'CameraComponent',
  data() {
      return {
          text: 'this is a camera O__O',
      }
  },
  methods: {
    Upload () {
            const refImage = ref(storage, 'cars/d5e1a2ee-f9fe-49bb-b46e-5e9658cac44b.jpg')
            getDownloadURL(refImage).then((url)=>{
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'data_url';
              xhr.onload = (event) => {
                const imgurl = xhr.response;
              }
              xhr.open('GET', url)
              xhr.send();

              const receivedimg = document.getElementById("pictureFromStorage");
              receivedimg.setAttribute('src',url);
            })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<!--

mounted() {
    this.Upload();
  },

-->
