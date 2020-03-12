<template>
    <div>
        <loading :active.sync="isLoading"></loading> 
        <div class="row mt-4">
            <!-- 產品列表 -->
            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                <div class="card border-0 shadow-sm">
                    <div style="height: 150px; background-size: cover; background-position: center"
                     :style="{backgroundImage: `url(${item.imageUrl})`}">
                    </div>
                    <div class="card-body">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
                        <del class="h6" v-if="item.price">{{ item.origin_price }}</del>
                        <div class="h5" v-if="item.price">{{ item.price }}</div>
                    </div>
                    </div>
                    <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="getproduct(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loading == item.id"></i>
                        查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addtoCar(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loading == item.id"></i>
                        加到購物車
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Model -->
            <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        {{ product.title }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" alt="" class="img-fluid mx-auto d-block" style="height: 400px;">
                        <blockquote class="blockquote mt-3">
                            <p class="mb-0">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h5" v-if="!product.price">{{ product.origin_price }}</div>
                            <del class="h6" v-if="product.price">{{ product.origin_price }}</del>
                            <div class="h5" v-if="product.price">{{ product.price }}</div>
                        </div>
                        <!-- 會將數量佔存在product內的num -->
                        <select name="" class="form-control mt-3" v-model="product.num">
                            <option value="0" disabled selected>-- 選購數量 --</option>
                            <option :value="num" v-for="num in 10" :key="num">
                                選購 {{ num }} {{ product.unit }}
                            </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計 <strong>{{ product.num * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary" @click="addtoCar(product.id, product.num)">
                            加到購物車
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <!-- pagination -->
        <pagination :getpagination="pagination" @userpage="getproducts"></pagination>
    </div>
</template>


<script>
import $ from 'jquery';
import pagination from '../pagination';

export default {
    data() {
        return {
            products: [],  
            isLoading: false, 
            product: {},
            pagination: {},
            status: {
                loading: {},
            },
        };
    },
    components: {
        pagination,
    },
    methods: {
        getproducts(page) { 
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            const vm = this;  
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.products = response.data.products;  
                vm.pagination = response.data.pagination;
                vm.isLoading = false;
            });
        },
        getproduct(id) {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            const vm = this;  
            vm.status.loading = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;  
                $('#productModal').modal('show');
                vm.status.loading = "";
                console.log(vm.product);
                this.product.num = 0;  //預設num=0，這樣一開始點選商品的modal就不會直接選擇數量，value=0
            });  
        },
        addtoCar(id, qty = 1) {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;  
            vm.status.loading = id;
            const car = {
                product_id: id,
                qty  //可直接用一個變數代替，直接將值帶進來
            };
            this.$http.post(url, { data:car }).then((response) => {
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
                vm.isLoading = false;
            });
        },
    },
    created() {
        this.getproducts();
    },
};
</script>