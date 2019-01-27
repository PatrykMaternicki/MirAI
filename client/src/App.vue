<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="h3"><i class="far fa-image fa-2"></i>Screenshots: {{ preparedScreenshots }}/{{ maxStockScreenshots }}</h1>
      </div>
    </div>
    <GridImage />
  </div>
</template>
<script>
  import GridImage from './partials/GridImage.vue';
  export default {
    name: 'app',
    data () {
      return {
        maxStockScreenshots: 0,
        preparedScreenshots: 0,
      }
    },
    created() {
      console.log(window.preparedScreenshots);
      this.maxStockScreenshots = window.maxStockScreenshots;
      this.preparedScreenshots = window.preparedScreenshots;
    },
    components: {
      GridImage
    }
  }
</script>
