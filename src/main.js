import Vue from 'vue'
import App from './App'
import myaxios from './axios/index.js'
Vue.use(myaxios)

// //test
// import test from './axios/index-test'
// test.show()
// test.add()
// test.show()

// const test = require('./axios/index-test')
// test.show()
// test.add()
// test.show()



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
