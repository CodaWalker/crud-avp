import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'

import store from './store'

Vue.use(Vuetify, VueAxios, axios);
Vue.config.productionTip = false;
export default {Vuetify, VueAxios, axios}
new Vue({
  el: '#app',
    router,
    store,
    template: '<App/>',
  //components: {App},
    data:{

    },
  render: h => h(App),
});
