// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';   //這裡只載入bootstrap模組，jquery只是相依套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//官方或npm套件

import App from './App';
import router from './router'; //這邊連結到router/index.js
import './bus';  //將bus注入，就可在全域使用
import currencyFilter from './filters/currency'; //注入currency
import DateFilter from './filters/Date';
import VeeValidate from 'vee-validate';
import zhTW_Validate from 'vee-validate/dist/locale/zh_TW';  //載入中文語系
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
// 自訂義套件

axios.defaults.withCredentials = true;  //true可將cookie存起來
Vue.config.productionTip = false;
Vue.use(VueAxios, axios); //運行
Vue.component('Loading', Loading); //啟用Vue Loading Overlay套件
Vue.filter('currency',currencyFilter);  //Vue.filter('自定義名稱',import名稱)
Vue.filter('Date',DateFilter); //轉換時間
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW',zhTW_Validate); //載入中文語系
Vue.use(VueAwesomeSwiper); //啟用Swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  if(to.meta.requiresAuth) {  //如果true的話，就放
   const api = `${process.env.API_PATH}/api/user/check`;   //驗證有無重複登入，會記憶帳號，有重複登入就直接登入
          axios.post(api).then((response) => {  //不是login元件內，vm.$http要變成axios
          console.log(response.data);
          if(response.data.success){ //有成功，就放行
            next();
          }else{
            next({
              path: '/Login',  //不成功就返回登入頁面
            });
          }
      });
  }else{
    next(); //requiresAuth != true，也就是說現在還在HelloWorld頁面
  }
});