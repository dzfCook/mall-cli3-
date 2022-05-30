import Vue  from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
const Home = ()=> import('views/home/home.vue')
const Cart = ()=> import('views/cart/cart.vue')
const Category = ()=> import('views/category/category.vue')
const Mine = ()=> import('views/mine/mine.vue')

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/mine',
        component:Mine
    }
]

const router = new VueRouter({
     routes,
     mode:'history'
})

export default router