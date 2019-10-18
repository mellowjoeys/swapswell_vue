import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import GoodsIndex from './views/GoodsIndex.vue';
import GoodsNew from './views/GoodsNew.vue';
import GoodsShow from './views/GoodsShow.vue';
import GoodsEdit from './views/GoodsEdit.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home },
    {path: '/goods', name: 'goods-index', component: GoodsIndex },
    {path: '/goods/new', name: 'goods-new', component: GoodsNew },
    {path: '/goods/:id', name: 'goods-show', component: GoodsShow },
    {path: '/goods/:id/edit', name: 'goods-edit', component: GoodsEdit },
    {path: "/signup", name: "signup", component: Signup },
    {path: "/login", name: "login", component: Login },
    {path: "/logout", name: "logout", component: Logout }
    

  ]
});