<template>
    <div>
        <section class="Order">
            <div class="order-bg">
            </div>
            <div class="container">
                <div class="row pt-5 justify-content-around">
                    <div class="order-process process-now-color col-12 col-md-3">Information</div>
                    <div class="order-process process-undone-color col-12 col-md-3">Payment</div>
                    <div class="order-process process-undone-color col-12 col-md-3">Consummation</div>
                </div>
                <div class="row">
                    <div class="col-sm-7 mt-5">
                        <div class="row justify-content-center">
                            <form class="col-md-10">
                                <div class="form-group">
                                <h4 class="mb-3">Contact information</h4>
                                <label for="useremail">Email</label>
                                <!-- 如果無內容送出表單的話，可以在input內加上required去阻擋，Chrome會自動跳出錯誤訊息 -->
                                <input type="email" class="form-control" name="email" id="useremail"
                                    v-model="form.user.email" placeholder="請輸入 Email" v-validate="'required|email'" 
                                    :class="{'is-invalid' : errors.has('email')}" required>
                                <span class="text-danger" v-if="errors.first('email')">{{ errors.first('email') }}</span>
                                </div>
                            
                                <div class="form-group">
                                <label for="username">Name</label>
                                <input type="text" class="form-control" name="name" id="username"
                                    v-model="form.user.name" placeholder="請輸入姓名" 
                                    v-validate="'required'" :class="{'is-invalid' : errors.has('name')}" required>
                                <span class="text-danger" v-if="errors.has('name')">姓名錯誤</span>
                                </div>
                            
                                <div class="form-group">
                                <label for="usertel">Phone</label>
                                <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話" name="tel" 
                                v-validate="'required'" :class="{'is-invalid' : errors.has('tel')}" required>
                                <span v-if="errors.has('tel')" class="text-danger">電話錯誤</span>
                                </div>
                            
                                <div class="form-group">
                                <label for="useraddress">Address</label>
                                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                                    placeholder="請輸入地址" v-validate="'required'" :class="{'is-invalid' : errors.has('address')}" required>
                                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                                </div>
                            
                                <div class="form-group">
                                <label for="comment">Other</label>
                                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message" 
                                placeholder="留言其他建議" style="resize:none;"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-5 mt-5" style="border-left: 1px solid #adb5bd;">
                        <div class="order-card">
                            <h4 class="mb-5">YOUR ORDER</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th width="85%">Products</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in Cart.carts">
                                        <td>{{item.product.title}} X {{item.qty}}</td>
                                        <td class="text-right">{{item.total | currency}}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="font-weight-bold align-middle">
                                            <h5>Total</h5>
                                        </td>
                                        <td class="text-right">
                                            <h5 v-if="Cart.total === Cart.final_total">{{Cart.total | currency}}</h5>
                                            <h5 class="text-primary" v-if="Cart.total>Cart.final_total">
                                                discount</br>{{Cart.final_total | currency}}
                                            </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" id="credit_card" name="payment-method" v-model="form.payment_method" value="credit_card">
                                        <label for="credit_card">信用卡</label>
                                        </input></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" id="PayPal" name="payment-method" v-model="form.payment_method" value="PayPal">
                                        <label for="PayPal">PayPal</label>
                                        </input></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" id="Pick_up_payment" name="payment-method" v-model="form.payment_method" value="Pick_up_payment">
                                        <label for="Pick_up_payment">超商取貨付款</label>
                                        </input></td>
                                        <td></td>
                                    </tr>
                                    <tr class="text-center">
                                        <td colspan="2">
                                            <button class="btn btn-dark mt-5" style="width:100%;" @click.prevent="createdOrder">Submit orders</button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
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
            form: {   //購物車訂購
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
                payment_method: '',
            },
            Cart: {},
            isLoading: false,
        };
    },
    methods: {
        gettoCar() {   //把購物車資料在取回，不然頁面不會變動
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;  
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.Cart = response.data.data;
                console.log(response);
                vm.isLoading = false;
            });
        },
        createdOrder() {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/order`;
            const vm = this;  
            const order = vm.form;
            // vm.isLoading = true;
            this.$validator.validate().then((valid) => {
                if (valid) {
                    this.$http.post(url, {data: order}).then((response) => {  //將form傳到api
                        console.log('訂單已建立',response);
                        vm.isLoading = false;
                        if(response.data.success) {
                            // vm.$router.push(`/HelloWorld/OrderPayment/${response.data.orderId}`); //成功後轉到結帳頁面
                            vm.$router.push({
                                name: 'OrderPayment',
                                query: {
                                            id: response.data.orderId,
                                },
                            });
                        }
                    });
                }else {
                    console.log("欄位不完整");
                }
            });
        },
    },
    created() {
        this.gettoCar();
    }
}
</script>


<style scoped>
    .order-bg {
        width: 100%;
        height: 100px;
        background-image: url("../../assets/frontbgimg/porductinfor.jpg");
        background-position: center;
        background-size: cover;
        z-index: -10;
    }
    .order-bg:after {
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
    .order-process {
        border-radius: 10px;
        width: 30%;
        padding: 5px;
        margin: 5px 0;
        color: #fff;
        font-size: 24px;
        line-height: 45px;
        text-align: center;
        font-weight: 900;
    }
    .process-now-color {
        background-color: #83D4A5;
    }
    .process-undone-color {
        background-color: #65A37F;
    }
    .order-card {
        height: 500px;
    }
</style>