<template>
  <div class="container-fluid left-container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="h3"><i class="far fa-image fa-2"></i>Screenshots: {{ preparedScreenshots }}/{{ maxStockScreenshots }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <GridImage />
      </div>
      <Sidebar />
    </div>
  </div>
</template>
<script>
  import GridImage from './partials/GridImage.vue';
  import Sidebar from './partials/Sidebar.vue';
  export default {
    name: 'app',
    data () {
      return {
        maxStockScreenshots: 0,
        preparedScreenshots: 0,
      }
    },
    created() {
      this.maxStockScreenshots = window.maxStockScreenshots;
      this.preparedScreenshots = window.preparedScreenshots;
    },
    components: {
      GridImage,
      Sidebar
    }
  }
</script>
