import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let app;
let render = () => {
  app = new Vue({
    render: (h) => h(App),
  })
  app.$mount('#app')
}

render();
