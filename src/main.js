import Vue from "vue";
//导入配置路由
import vueRouter from "vue-router";
Vue.use(vueRouter);
//导入配置发送请求
import vueResource from 'vue-resource';
Vue.use(vueResource);
//配置全局根路径
Vue.http.options.root='http://vue.studyit.io';
//导入路由模块
import router from "./router.js"
//导入入口组件
import app from "./app.vue";
//导入Mint-UI组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入MUI样式
import "./lib/MUI/dist/css/mui.min.css";
import "./lib/MUI/dist/css/icons-extra.css";
//配合全局时间过滤器
import moment from 'moment';
Vue.filter('dateFormat',function (str) {
    return  moment(str).format('YYYY-MM-DD HH:mm:ss');
});
var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
});