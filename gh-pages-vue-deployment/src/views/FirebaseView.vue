<template>
  <div class="home">
    <h1>{{ text }}</h1>
    <!--<CameraComponent></CameraComponent>-->
    <FirebaseComponent></FirebaseComponent>
  </div>
</template>

<script>
//import CameraComponent from '@/components/Camera.vue'
import FirebaseComponent from '@/components/Firebase.vue'

export default {
  name: 'FirebaseView',
  components: {
    //CameraComponent,
    FirebaseComponent
  },
  data() {
    return {
      text: "title"
    }
  },
}
</script>
