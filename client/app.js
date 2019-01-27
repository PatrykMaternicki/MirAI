import App from './src/App.vue';
import Vue from 'vue';

export default class Panel{
  constructor() {
    new Vue({
      render: h => h(App),
    }).$mount('#app')
    window.panel = this;
  }
}

new Panel();
