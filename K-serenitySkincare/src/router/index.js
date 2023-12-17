import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
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
            path: "/product/:productId",
            component: ProductView
        },
        {
            path: "/login",
            component: LoginView
        },
        {
            path: "/cart",
            component: CartView
        },
    ]
})

export default router