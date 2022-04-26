<template>
  <div class="f">
    <h1>{{ text }}</h1>
    <div v-for="(car, index) in cars" :key="index">
      <h1>---------------</h1>
      <h4>{{ car.color }}</h4>
      <h4>{{ car.engine }}</h4>
      <h4>{{ car.make }}</h4>
      <h4>{{ car.model }}</h4>
      <h4>{{ car.path }}</h4>
      <img :id="'path_'+car.path" width="800" height="500" >
      <!--<img id="pictureFromStorage" width="800" height="500">-->
      <!--<h4>{{ toString(car.path) }}</h4>-->
      <!--<img v-bind:src="car.path">-->
    </div>
  </div>

</template>

<script>
import { db } from '../firebase';
//import { refImg } from '../firebase'
import { storage } from '../firebase';
import { ref } from '../firebase';
import { getDownloadURL } from '../firebase';

export default {

  name: 'FirebaseComponent',
  data:() => ({
      text: 'Some cars form db',
      color: null,
      engine: null,
      make: null,
      model: null,
      path: null,
      cars: [],
    }),
  methods: {
      fetchData(){
        db.collection("cars").get().then(docs => {
          docs.forEach(doc => {
            this.cars.push(doc.data());
            console.log(doc.data())
            console.log(doc.data().path)
            const ImagePath = ref(storage, doc.data().path)
            this.getSRC(ImagePath)
          })
        });
            /*   
            //const ImagePath = ref(storage, 'cars/6453047b-c8d9-4679-902c-88e8324594a7.jpg')
            getDownloadURL(this.path).then((url)=>{
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'data_url';
              xhr.onload = (event) => {
                const imgurl = xhr.response;
              }
              xhr.open('GET', url)
              xhr.send();

              const receivedimg = document.getElementById("pictureFromStorage");
              receivedimg.setAttribute('src',url);
            })*/
      },
      async getSRC (pathelement) {
            await getDownloadURL(pathelement).then((url)=>{
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'data_url';
              xhr.onload = (event) => {
                const imgurl = xhr.response;
              }
              xhr.open('GET', url)
              xhr.send();
              //const receivedimg = document.getElementById("pictureFromStorage");
              //receivedimg.setAttribute('src',url);
              const idm = 'path_'+pathelement;
              console.log(url);
              const receivedimg = document.querySelector(idm).setAttribute('src',url);
              //const receivedimg = document.getElementById(idm).setAttribute('src',url);
              //receivedimg.setAttribute('src',url);
            })
            .catch((error) => {
              console.log(error);
            })
      },
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
