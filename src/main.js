import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.http.options.root='http://vue.studyit.io';
import router from "./router.js"
import app from "./app.vue";
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "./lib/MUI/dist/css/mui.min.css";
import "./lib/MUI/dist/css/icons-extra.css";
var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
});