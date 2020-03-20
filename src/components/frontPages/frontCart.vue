<template>
    <div>
        <loading :active.sync="isLoading"></loading> 
        <section class="Cart">
            <div class="cart-bg">
            </div>
            <!-- Cart -->
            <div class="container">
                <h2 class="text-center mt-3 mb-5 font-weight-bold">Shopping Cart</h2>
                <div class="Nothing text-center" v-if="Cart.total === 0">
                    <h3 class="font-weight-bold mb-5">－&nbsp;購物車無物品&nbsp;－</h3>
                    <router-link to="/frontHome/frontProduct">
                        <button class="btn btn-success btn-lg">Shopping now</button>
                    </router-link>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                                <table class="table mt-4" v-if="Cart.total !== 0">
                            <thead style="width: 500px;">
                                <tr>
                                    <th width="100">
                                        <button type="buttom" class="btn btn-outline-danger" @click.stop="deleteall">Clear</button>
                                    </th>
                                    <th class="productimg" width="150"></th>
                                    <th class="align-middle">Product</th>
                                    <th width="150" class="text-center align-middle">Price</th>
                                    <th width="200" class="text-center align-middle">Quantity</th>
                                    <th width="100" class="align-middle">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in Cart.carts" :key="item.id">
                                    <td class="align-middle">
                                        <button class="btn btn-outline-danger btn-sm" @click="deleteCar(item.id)">
                                            <i class="fa fa-spinner fa-spin" v-if="status.loading === true"></i>
                                            <i class="far fa-trash-alt" v-if="status.loading === false"></i>
                                        </button>
                                    </td>
                                    <td class="productimg">
                                        <div class="cart-img">
                                            <img :src="item.product.imageUrl" alt="" class="img-fluid d-block" style="width: 100%; height: 100%; background-size: cover;
                                            background-position: center;">
                                    </div>
                                    </td>
                                    <td class="align-middle">
                                        {{ item.product.title }}
                                        <div class="text-success font-weight-bold" v-if="item.coupon">
                                            Offer applied
                                        </div>
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ item.product.price | currency}}
                                    </td>
                                    <td class="align-middle text-center">{{ item.qty }}/{{ item.product.unit }}</td>
                                    <td class="text-right align-middle">
                                        {{ item.total | currency}}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot class="font-weight-bold">
                                <tr>
                                    <!-- 這邊計算都用後端運算 -->
                                    <td class="productimg"></td>
                                    <td colspan="4" class="text-right">Total</td>
                                    <td class="text-right">{{ Cart.total }}</td>
                                </tr>
                                <!-- 如果final_total與total相同，就不出現優惠價格-->
                                <tr class="text-primary" v-if="Cart.final_total !== Cart.total">
                                    <td class="productimg"></td>
                                    <td colspan="4" class="text-right">折扣價</td>
                                    <td class="text-right">{{ Cart.final_total }}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="col-sm-12">
                         <table class="coupon table float-md-right mx-sm-auto" v-if="Cart.total !== 0">
                            <div class="input-group mb-3 input-group-md">
                                <input type="text" class="coupon-code form-control" placeholder="Coupon Code" aria-describedby="basic-addon2" v-model="couponcode">
                                <div class="input-group-append">
                                    <button class="input-group-text btn btn-outline-primary font-weight-bold" id="basic-addon2" @click="addCouponCode">
                                        <i class="fa fa-spinner fa-spin mr-1" v-if="status.loading === true"></i>
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                            <button class="btn btn-outline-success font-weight-bold float-right" @click="toOrdercheck" style="width: 100%;">PROCEED TO CHECKOUT</button>
                        </table>
                    </div>
                </div>    
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            status: {
                loading: {},
            },
            isLoading: false, 
            Cart: {},
            couponcode: '',
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            status: {
                loading: false,
            },
        };
    },
    methods: {
        gettoCar() {   //把購物車資料在取回，不然頁面不會變動
            const vm = this;
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.Cart = response.data.data;
                vm.isLoading = false;
            });
        },
        deleteCar(id) {  //將選擇的物品id傳過來
            const vm = this;  
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.status.loading = true;
            this.$http.delete(url).then((response) => {
                vm.status.loading = false;
                this.$bus.$emit('message:push', response.data.message,'danger');
                this.gettoCar();  //還要在取回一次資料，不然頁面不會變動
                this.$bus.$emit('changecart');
            });
        },
        deleteall() {
            const vm = this;
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            this.$http.get(url).then((response) => {
                response.data.data.carts.forEach((item) => {
                    const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${item.id}`;
                    this.$http.delete(api).then((response) => {
                        this.gettoCar();
                        this.$bus.$emit('changecart');
                    });
                });
                    if(response) {
                        this.$bus.$emit('message:push', '清空購物車','danger');
                    }
            });
        },
        addCouponCode() {
            const vm = this;  
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const coupon = {
                code: vm.couponcode,
            };
            vm.status.loading = true;
            this.$http.post(url, {data: coupon}).then((response) => {
                if(response.data.success) {
                    console.log(response.data);
                    this.$bus.$emit('message:push', response.data.message,'success');
                    this.gettoCar(); 
                } else {
                    this.$bus.$emit('message:push', response.data.message,'danger');
                }
                 vm.status.loading = false;
            });
        },
        toOrdercheck() {
             this.$router.push({
                name: 'OrderCheck',
            });
        }
    },
    created() {
        const vm = this;
        this.gettoCar();
    },
};
</script>

<style scoped>
    .cart-bg {
        width: 100%;
        height: 100px;
        background-image: url("../../assets/frontbgimg/porductinfor.jpg");
        background-position: center;
        background-size: cover;
        z-index: -10;
    }
    .cart-bg:after {
       content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -moz-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -webkit-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -o-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        opacity: 0.6;
    }
    .cart-img {
      width: 50px;
    }
    .coupon-code {
      transition: all 0.3s;
    }
    .coupon-code:focus {
      height: 50px;
      transition: all 0.3s;
    }
    .coupon {
        width: 50%;
    }
    @media (max-width: 768px){
        .coupon {
            width: 100%;
        }
        .productimg {
            display: none;
        }
    }

</style>