import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () =>
    import ("views/home/Home");

const Article = () =>
    import ("views/article/Articles")
const Login = () =>
    import ("views/login/Login")
const BlogView = () =>
    import ('views/blog/BlogView');

const PictureShow = () =>
    import ('views/picture/PictureShow')

const Profile = () =>
    import ('views/profile/Profile');

const EditorView = () =>
    import ('views/editor/EditorView');
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
}, {
    path: '/blogview',
    component: BlogView
}, {
    path: '/picturelist',
    component: PictureShow
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/editor',
    component: EditorView
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router