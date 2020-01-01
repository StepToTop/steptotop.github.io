import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm'
import App from './App.vue'


new Vue({
    el: '#app',  // 用于挂载要管理的元素
    render: h => h(App),  // 
    // data: { // 定义数据
    //     message: "牛大了"
    // }
});