import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$genesis = axios.create({
      baseURL: 'https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN',
      headers: { key: "1PxLCzxHpt344JYTchMDBPaaxV5xhpJ4o7"}
    })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
