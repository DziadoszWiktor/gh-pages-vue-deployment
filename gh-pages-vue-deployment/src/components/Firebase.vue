<template>
  <div class="f">
    <h1>{{ text }}</h1>
    <div v-for="(car, index) in cars" :key="index">
      <h1>---------------</h1>
      <h4>{{ car.color }}</h4>
      <h4>{{ car.engine }}</h4>
      <h4>{{ car.make }}</h4>
      <h4>{{ car.model }}</h4>
      <!--<img v-bind:src="car.path">-->
    </div>
  </div>

</template>

<script>
import { db } from '../firebase'
//import { refImg } from '../firebase'

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
          })
        });
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
