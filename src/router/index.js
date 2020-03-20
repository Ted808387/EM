import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Order from '@/components/pages/Order';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Couponcode from '@/components/pages/Couponcode';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Cart from '@/components/pages/Cart';

import HelloWorld from '@/components/frontPages/HelloWorld';
import frontHome from '@/components/frontPages/frontHome';
import frontProduct from '@/components/frontPages/frontProduct';
import productIn from '@/components/frontPages/productIn';
import frontCart from '@/components/frontPages/frontCart';
import OrderCheck from '@/components/frontPages/OrderCheck';
import OrderPayment from '@/components/frontPages/OrderPayment';
import PaymentSuccessful from '@/components/frontPages/PaymentSuccessful';
import frontCoupon from '@/components/frontPages/frontCoupon';



Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/frontHome',
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'HelloWorld',
            path: '/frontHome',
            component: HelloWorld,
            children: [
                {
                    name: 'frontHome',
                    path: '/frontHome',
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
                        requiresAuth: true,
                    },
                },
                {
                    name: 'Order',
                    path: 'Order',
                    component: Order,
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    name: 'Couponcode',
                    path: 'Couponcode',
                    component: Couponcode,
                    meta: {
                        requiresAuth: true,
                    },
                },
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