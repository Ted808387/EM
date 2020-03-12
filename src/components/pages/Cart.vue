<template>
    <div>
        <loading :active.sync="isLoading"></loading> 
        <table class="table mt-4 mx-auto" style="width: 500px;" v-if="Cart.total !== 0">
            <thead style="width: 500px;">
                <tr>
                    <th width="100"></th>
                    <th>品名</th>
                    <th width="100">數量</th>
                    <th width="100">價格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in Cart.carts" :key="item.id">
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteCar(item.id)">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                    <td>
                        {{ item.product.title }}
                        <div class="text-success" v-if="item.coupon">
                            已套用優惠卷
                        </div>
                    </td>
                    <td>{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="text-right">
                        {{ item.final_total | currency}}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <!-- 這邊計算都用後端運算 -->
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ Cart.total }}</td>
                </tr>
                <!-- 如果final_total與total相同，就不出現優惠價格-->
                <tr class="text-primary" v-if="Cart.final_total !== Cart.total">
                    <td colspan="3" class="text-right">折扣價</td>
                    <td class="text-right">{{ Cart.final_total }}</td>
                </tr>
            </tfoot>
        </table>
        <table class="table mx-auto" style="width: 500px; font-size: 14px" v-if="Cart.total !== 0">
            <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control " placeholder="請輸入優惠碼" aria-describedby="basic-addon2" v-model="couponcode">
                <div class="input-group-append">
                    <button class="input-group-text btn btn-outline-secondary" id="basic-addon2" @click="addCouponCode">套用優惠碼</button>
                </div>
            </div>
        </table>
        <!-- 訂購表單 -->
        <div class="my-5 row justify-content-center" @submit.prevent="createdOrder">
            <form class="col-md-6">
                <div class="form-group">
                <label for="useremail">Email</label>
                <!-- 如果無內容送出表單的話，可以在input內加上required去阻擋，Chrome會自動跳出錯誤訊息 -->
                <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email" placeholder="請輸入 Email" v-validate="'required|email'" 
                    :class="{'is-invalid' : errors.has('email')}" required>
                <span class="text-danger" v-if="errors.first('email')">{{ errors.first('email') }}</span>
                </div>
            
                <div class="form-group">
                <label for="username">收件人姓名</label>
                <input type="text" class="form-control" name="name" id="username"
                    v-model="form.user.name" placeholder="輸入姓名" 
                    v-validate="'required'" :class="{'is-invalid' : errors.has('name')}" required>
                <span class="text-danger" v-if="errors.has('name')">姓名錯誤</span>
                </div>
            
                <div class="form-group">
                <label for="usertel">收件人電話</label>
                <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話" name="tel" 
                v-validate="'required'" :class="{'is-invalid' : errors.has('tel')}" required>
                <span v-if="errors.has('tel')" class="text-danger">電話錯誤</span>
                </div>
            
                <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                    placeholder="請輸入地址" v-validate="'required'" :class="{'is-invalid' : errors.has('address')}" required>
                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                </div>
            
                <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
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
            form: {   //購物車訂購
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
        };
    },
    methods: {
        addtoCar(id, qty) {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;  
            vm.status.loading = id;
            const car = {
                product_id: id,
                qty  //可直接用一個變數代替，直接將值帶進來
            };
            this.$http.post(url, { data:car }).then((response) => {
                // console.log(response);
                vm.status.loading = "";
                $('#productModal').modal('hide');
                this.gettoCar();
            });
        },
        gettoCar() {   //把購物車資料在取回，不然頁面不會變動
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;  
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.Cart = response.data.data;
                // console.log(response);
                vm.isLoading = false;
            });
        },
        deleteCar(id) {  //將選擇的物品id傳過來
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            const vm = this;  
            vm.isLoading = true;
            this.$http.delete(url).then((response) => {
                // console.log(response.data);
                vm.isLoading = false;
                this.gettoCar();  //還要在取回一次資料，不然頁面不會變動
            });
        },
        addCouponCode() {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const vm = this;  
            const coupon = {
                code: vm.couponcode,  //將input的優惠碼post到API
            };
            vm.isLoading = true;
            this.$http.post(url, {data: coupon}).then((response) => {  //將input的優惠碼post到API
                console.log(response.data);
                vm.isLoading = false;
                this.gettoCar();  //還要在取回一次資料，不然頁面不會變動
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
                            vm.$router.push(`/Customer_checkout/${response.data.orderId}`); //成功後轉到結帳頁面
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
        // const vm = this;
        // vm.$bus.$on('cart', (id, qty=1)=> {  
        // vm.addtoCar(id, qty);
        // });
    },
};
</script>