import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
Vue.use(VueRouter)
const routes = [{ path: '/user', Comment: User }, { path: '/home', Comment: Home }]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router