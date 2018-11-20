import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue'
import Admin from './../components/Admin/Admin.vue'
import UserPage from './../components/User/UserPage.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/userPage/:uid?',
        props:true,
      name: 'userPage',
      component: UserPage
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
  ]
})
