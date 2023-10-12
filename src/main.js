import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用API文件
import api from './api/http.js'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import 'element-ui/lib/theme-chalk/display.css';
import {formatDate} from './common/filterdate.js'

import * as echarts from 'echarts';
// import 'echarts-wordcloud'

//引用mock
require('./mock');


Vue.filter('formatDate', formatDate);

Vue.use(ElementUI);
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false
import "./assets/font/iconfont/iconfont.css";
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
})
