import App from './App.vue'
import router from './router/index'
import { createApp } from 'vue';

createApp(App).use(router).mount('#app')
//mountとは、VueインスタンスをDOMにマウントすることを意味する。
//DOMとは、HTMLの要素を指す。
//VueインスタンスをDOMにマウントすることで、VueインスタンスのデータをDOMに反映させることができる。
//#appは、index.htmlのid="app"の要素を指している。