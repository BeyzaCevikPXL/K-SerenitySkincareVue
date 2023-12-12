import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
/*import PageNotFoundView from '../views/PageNotFoundView.vue'*/

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/', 
            component: HomeView
        },
        {
            path: '/producten',
            component: ProductsView
        },
        {
            path: "/product",
            component: ProductView
        },
        {
            path: "/login",
            component: LoginView
        },
        /*,
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        } altijd als laatst*/
    ]
})

export default router