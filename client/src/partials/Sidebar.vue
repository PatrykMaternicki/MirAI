<template>
  <div class="container-fluid sidebar bg-light">
    <div class="row sidebar-wraper">
      <div class="col-lg-12">
        <p><i class="fas fa-vector-square"></i>This is your dummy model</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12">
        <img :src="`/images/screenshots/0.png`" class="col"/>
      </div>
    </div>
    <div class="row button-wraper">
      <button type="button" class="btn btn-outline-light btn-lg">Change</button>
      <button type="button" class="btn btn-outline-light btn-lg">Start</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Sidebar',
    data () {
      return {
        maxStockScreenshots: 0,
      }
    },
    created() {
      this.preparedScreenshots = Number.parseInt(window.preparedScreenshots);
    }
  }
</script>
