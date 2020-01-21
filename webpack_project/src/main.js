// const {add, mul} = require("./mathUtils")
// console.log(add(20,30));
// import {name, sex} from "./info"
// console.log(name)
import Vue from "vue"
import App from "./vue/app.vue"

const app = new Vue({
  el: "#app",
  template: "<App/>",
  data: {
    message: "Hello Webpack"
  },
  components: {
    App
  }
})