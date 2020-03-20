<template>
    <div>
        <section class="Payment">
            <div class="payment-bg">
            </div>
             <div class="container">
                <div class="row pt-5 justify-content-around">
                    <div class="order-process process-undone-color col-12 col-md-3">Information</div>
                    <div class="order-process process-now-color col-12 col-md-3">Payment</div>
                    <div class="order-process process-undone-color col-12 col-md-3">Consummation</div>
                </div>
                <div class="my-5 row justify-content-center">
                    <form class="col-md-6" @submit.prevent="payOder(orderId)">
                        <table class="table">
                        <thead>
                            <th>品名</th>
                            <th width="100">數量</th>
                            <th width="150">單價</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                                <td class="align-middle">{{ item.product.title }}</td>
                                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                                <td class="align-middle text-right">{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" class="text-right">總計</td>
                                <td class="text-right">{{ order.total }}</td>
                            </tr>
                        </tfoot>
                        </table>

                        <table class="table">
                        <tbody>
                            <tr>
                            <th width="100">Email</th>
                            <td>{{ order.user.email }}</td>
                            </tr>
                            <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                            </tr>
                            <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                            </tr>
                            <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                            </tr>
                            <tr>
                            <th>付款狀態</th>
                            <td>
                                <span v-if="!order.is_paid">尚未付款</span>
                                <span v-else class="text-success">付款完成</span>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <div class="text-right" v-if="order.is_paid === false">
                            <button class="btn btn-danger">確認付款去</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    data() {
        return {
            orderId: '',
            order: {
                user: {},
            },
        };
    },
    methods: {
        getOder(id) {
            const vm = this;
            vm.orderId = id;
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/order/${id}`;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                vm.order = response.data.order;
                vm.isLoading = false;
                console.log(response);
            });
        },
        payOder(id) {
            const vm = this;
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/pay/${id}`;
            vm.isLoading = true;
            this.$http.post(api).then((response) => {
                console.log(response.data);
                vm.isLoading = false;
                this.getOder();
                vm.$router.push('/frontHome/PaymentSuccessful');
            });
            this.$bus.$emit('changecart');
        },
    },
    created() {
        this.getOder(this.$route.query.id);
    },
}
</script>



<style scoped>
    .payment-bg {
        width: 100%;
        height: 100px;
        background-image: url("../../assets/frontbgimg/porductinfor.jpg");
        background-position: center;
        background-size: cover;
        z-index: -10;
    }
    .payment-bg:after {
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
    </style>