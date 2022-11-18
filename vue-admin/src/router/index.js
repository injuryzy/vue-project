import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    component: Main,
    redirect: "/home",
    children: [
        { path: 'home', component: Home }, //首页
        { path: 'user', component: User }, //用户管理
        { path: 'mall', component: Mall }, //商城管理
        { path: 'page1', component: PageOne }, //商城管理
        { path: 'page2', component: PageTwo }, //商城管理
    ]
}]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router