import App from './src/App.vue';
import Vue from 'vue';
import Store from './src/store';

export default class Panel{
  constructor() {
    new Vue({
      render: h => h(App),
      store: Store,
    }).$mount('#app')
    window.panel = this;
  }
}

new Panel();
