import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () =>
    import ("views/home/Home");

const Article = () =>
    import ("views/article/Articles")
const Login = () =>
    import ("views/login/Login")

const routes = [{
    path: '',
    redirect: "/home"
}, {
    path: '/home',
    component: Home
}, {
    path: '/article',
    component: Article
}, {
    path: '/login',
    component: Login
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router