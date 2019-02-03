<template>
  <div class="container">
    <div class='row'>
      <div class='col-lg-6'>
        <div class='row'>
          <table>
            <tr v-for='item in results'>
              <td>
                {{ item.className }}
              </td>
              <td>
                {{ item.probability }}
              </td>
            </tr>
          </table>
        </div>
        <div class='row'>
           <img  :src="`/images/screenshots/0.png`" class="col grid-image"/>
        </div>
      </div>
      <div class='col-lg-6'>
        <div class='row'>
          <table>
            <tr v-for='item in compareResult'>
              <td>
                {{ item.className }}
              </td>
              <td>
                {{ item.probability }}
              </td>
            </tr>
          </table>
        </div>
          <div class='row'>
           <img  :src="`/images/screenshots/1.png`" class="col grid-image"/>
        </div>
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
    },
     computed: {
      results() {
        return this.$store.getters.result;
      },
      compareResult() {
        return this.$store.getters.compareResult;
      }
    },
  }
</script>
