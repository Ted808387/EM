import Vue from 'vue';
Vue.prototype.$bus = new Vue();  //再 Vue 的 prototype 下新增一個 $bus 屬性，而且指向一個物件
// Message
// vm.$bus.$emit('message:push', message, status);   //內傳外層
// message(String): 訊息內容
// status(String): Alert 的樣式