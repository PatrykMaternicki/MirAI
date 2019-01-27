<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="h4">Yours screenshots</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-3" v-for="n in preparedScreenshots">
        <img :src="`/images/screenshots/${n}.png`" class="col grid-image"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GridImage',
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
