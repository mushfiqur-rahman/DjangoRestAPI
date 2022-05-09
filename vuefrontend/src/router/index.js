import Vue from 'vue'
import VueRouter from 'vue-router'
import PostView from "@/views/PostView";
import LoginView from "@/views/LoginView";
import LogoutView from "@/views/LogoutView";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'post',
        component: PostView,
        meta: {
            requiresLogin: true
          }
        },
        {
        path: '/login',
        name: 'login',
        component: LoginView,
        },
        {
        path: '/logout',
        name: 'logout',
        component: LogoutView,
        },
    ]
})