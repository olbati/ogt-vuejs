// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import Resource from 'vue-resource'

import Candidates from './components/candidates'
import Contact from './components/contact'

Vue.use(vueRouter)
Vue.use(Resource)

const router = new vueRouter({
    routes: [
      { path: "/", component: Candidates },
      { path: "/contact", component: Contact }]
    });



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: `<div id="app">

  <nav class="navbar navbar-inverse navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Geektime Event</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Candidates</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>


              <router-view></router-view>
            </div>
            `

}).$mount("#app")
