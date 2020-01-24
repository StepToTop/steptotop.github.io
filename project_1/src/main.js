import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 提示信息

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
  render: h => h(App)
}).$mount('#app')
