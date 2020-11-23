import './db.js'

import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {firestorePlugin} from 'vuefire'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
