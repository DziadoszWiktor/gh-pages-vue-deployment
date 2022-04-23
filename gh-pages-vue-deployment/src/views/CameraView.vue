<template>
  <div class="home">
    <CameraComponent></CameraComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import CameraComponent from '@/components/Camera.vue'


export default {
  name: 'CameraView',
  components: {
    CameraComponent
  }
}
</script>