import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ShopPage from './pages/ShopPage.vue';
import DetailPage from './pages/DetailPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

const routes = [
    { path: '/', component: HomePage },
  { path: '/shop', component: ShopPage },
  { path: '/detail/:productId', component: DetailPage },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;