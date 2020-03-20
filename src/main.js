import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';   
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


import App from './App';
import router from './router'; 
import './bus';  
import currencyFilter from './filters/currency'; 
import DateFilter from './filters/Date';
import VeeValidate from 'vee-validate';
import zhTW_Validate from 'vee-validate/dist/locale/zh_TW';  
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';


axios.defaults.withCredentials = false;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency',currencyFilter);
Vue.filter('Date',DateFilter);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW',zhTW_Validate);
Vue.use(VueAwesomeSwiper);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  if(to.meta.requiresAuth) {
   const api = `${process.env.API_PATH}/api/user/check`;
          axios.post(api).then((response) => {
          console.log(response.data);
          if(response.data.success){
            next();
          }else{
            next({
              path: '/Login',
            });
          }
      });
  }else{
    next();
  }
});