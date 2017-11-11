import vueRouter from "vue-router";
import home from './components/home.vue';
import member from './components/member.vue';
import shopping from './components/shopping.vue';
import search from './components/search.vue';
import newslist from './components/newscomponents/newslist.vue';
import newsinfo from './components/newscomponents/newsinfo.vue';
var router=new vueRouter({
   routes:[
       {path:'/',redirect:'/home'},
       {path:'/home',component:home},
       {path:'/member',component:member},
       {path:'/shopping',component:shopping},
       {path:'/search',component:search},
       {path:'/home/newslist',component:newslist},
       {path:'/newslist/newsinfo/:id',component:newsinfo}
   ],
    linkActiveClass:'mui-active'
});
export default router;