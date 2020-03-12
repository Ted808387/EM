import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Order from '@/components/pages/Order';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Couponcode from '@/components/pages/Couponcode';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Cart from '@/components/pages/Cart';
//後台自訂義元件
import HelloWorld from '@/components/HelloWorld';
import frontHome from '@/components/frontHome';
import frontProduct from '@/components/frontPages/frontProduct';
import productIn from '@/components/frontPages/productIn';
import frontCart from '@/components/frontPages/frontCart';
import OrderCheck from '@/components/frontPages/OrderCheck';
import OrderPayment from '@/components/frontPages/OrderPayment';
import PaymentSuccessful from '@/components/frontPages/PaymentSuccessful';
import frontCoupon from '@/components/frontPages/frontCoupon';
// 前台自定義元件


Vue.use(VueRouter);//啟用


export default new VueRouter({
    routes: [
        {
            path: '*', //如果網頁位址尾端輸入亂碼
            redirect: '/login',  //則返回設定得頁面(login)
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'HelloWorld',
            path: '/',
            component: HelloWorld,
            children: [
                {
                    name: 'frontHome',
                    path: 'frontHome',
                    component: frontHome,
                },
                {
                    name: 'productIn',
                    path: 'productIn',
                    component: productIn,
                },
                {
                    name: 'frontProduct',
                    path: 'frontProduct',
                    component: frontProduct,
                },
                {
                    name: 'frontCart',
                    path: 'frontCart',
                    component: frontCart,
                },
                {
                    name: 'OrderCheck',
                    path: 'OrderCheck',
                    component: OrderCheck,
                },
                {
                    name: 'OrderPayment',
                    path: 'OrderPayment',
                    component: OrderPayment,
                },
                {
                    name: 'PaymentSuccessful',
                    path: 'PaymentSuccessful',
                    component: PaymentSuccessful,
                },
                {
                    name: 'frontCoupon',
                    path: 'frontCoupon',
                    component: frontCoupon,
                },
            ],
        },
        {
            name: 'Dashboard',
            path: '/Dashboard',
            component: Dashboard,
            children: [
                {
                    name: 'Products',
                    path: 'Products',
                    component: Products,
                    meta: {
                        requiresAuth: true, //確認進入Products頁面需要被驗證
                    },
                },
                {
                    name: 'Order',
                    path: 'Order',
                    component: Order,
                    meta: {
                        requiresAuth: true, //確認進入Oder頁面需要被驗證
                    },
                },
                {
                    name: 'Couponcode',
                    path: 'Couponcode',
                    component: Couponcode,
                    meta: {
                        requiresAuth: true, //確認進入Couponcode頁面需要被驗證
                    },
                },
            ],
        },
        {
            name: 'Dashboard',
            path: '/',
            component: Dashboard,
            children: [
                {
                    name: 'CustomerOrder',
                    path: 'customer_order',
                    component: CustomerOrder,
                },
                {
                    name: 'CustomerCheckout',
                    path: 'Customer_checkout/:orderId',
                    component: CustomerCheckout,
                },
                {
                    name: 'Cart',
                    path: 'Cart',
                    component: Cart,
                },
            ],
        },
    ],
});