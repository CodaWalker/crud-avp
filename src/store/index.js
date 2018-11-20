import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import users from './users'
import shared from './shared'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        admin,
        users,
        shared
    }
})
