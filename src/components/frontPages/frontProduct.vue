<template>
  <div>
      <loading :active.sync="isLoading"></loading> 
      <section class="product">
        <div class="product-bg">
        </div>
        <div class="allproducts mt-5">
            <div class="row">
                <div class="col-sm-3">
                    <div class="itemlist">
                        <div class="itemtitle pl-4 font-weight-bold">
                            <div>產品列表</div>
                        </div>
                        <ul class="pl-0 font-weight-bold list-ul">
                                <li @click="getproducts">
                                    <div>全款商品</div>
                                </li>
                                <li @click="selectmask">
                                        <div>面罩</div>
                                </li>
                                <li @click="selectMedical">
                                        <div>口罩</div>
                                </li>
                                <li @click="selectgazmask">
                                        <div>防毒面具</div>
                                </li>
                        </ul>
                    </div>
                </div>
                <!-- products -->
                <div class="col-sm-9">
                    <div class="row">
                        <div class="card-item col-md-4 mb-5 pb-5 col-sm-6" v-for="item in products" :key="item.id">
                            <div class="card_detail-cart">
                                <div class="detail" @click="turnproduct(item.id)">
                                    <h2 class="card-detail">‧‧‧</h2>
                                </div>
                                <div class="card-add-cart" @click="addtoCar(item.id,1)">
                                    <i class="fas fa-spinner fa-spin fa-2x" v-if="status.loading == item.id"></i>
                                    <i class="fas fa-shopping-cart fa-2x" v-if="status.loading !== item.id"></i>
                                </div>
                            </div>
                            <div class="card-img">
                                <div class="product-img" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
                            </div>
                            <div class="card-cotnet">
                                <div class="card-category mt-3">
                                    <h5 class="mb-0">{{ item.category }}</h5>
                                </div>
                                <div class="card-title mt-1">
                                    <h4 class="font-weight-bold">{{ item.title }}</h4>
                                </div>
                                <div class="card-price">
                                    <div class="card-origin-price" v-if="!item.price">{{ item.origin_price | currency}}</div>
                                    <del class="card-origin-price" v-if="item.price">{{ item.origin_price | currency}}</del>
                                    <div>{{ item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <frontpagination :getpagination="pagination" @userpage="getproducts" v-if="displaypage"></frontpagination>
                </div>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
import $ from 'jquery';
import frontpagination from '../pagination';

export default {
    data() {
        return {
            allproducts: [],
            displaypage: false,
            products: [],  
            isLoading: false, 
            // product: {},
            pagination: {},
            status: {
                loading: {},
            },
        };
    },
    components: {
        frontpagination,
    },
    methods: {
        getproducts(page) { 
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            const vm = this;  
            this.$http.get(url).then((response) => {
                vm.allproducts = response.data.products;
                vm.products = vm.allproducts;
                vm.displaypage = true;
                vm.pagination = response.data.pagination;
            });
        },
        selectmask() {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products/all`;
            const vm = this;
            this.$http.get(url).then((response) => {
                vm.allproducts = response.data.products;
                vm.products = vm.allproducts.filter(function(item) {
                    return item.category == '面罩';
                });
                vm.displaypage = false;
            });
        },
        selectMedical() {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products/all`;
            const vm = this;
            this.$http.get(url).then((response) => {
                vm.allproducts = response.data.products;
                vm.products = vm.allproducts.filter(function(item) {
                    return item.category == '口罩';
                });
                vm.displaypage = false;
            });
        },
        selectgazmask() {
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products/all`;
            const vm = this;
            this.$http.get(url).then((response) => {
                vm.allproducts = response.data.products;
                vm.products = vm.allproducts.filter(function(item) {
                    return item.category == '防毒面具';
                });
                vm.displaypage = false;
            });
        },
        turnproduct(id) {
            this.$router.push({
                name: 'productIn',
                query: {
                    id: id,
                }, 
            });
            // const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            // const vm = this;  
            // vm.status.loading = id;
            // // this.$http.get(url).then((response) => {
            // //     vm.product = response.data.product;  
            // //     // $('#productModal').modal('show');
            // //     // console.log(vm.product);
            // //     vm.status.loading = "";
            // //     this.product.num = 0;
            // // });  
            // this.$bus.$emit('productinfo', id);
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
                this.$bus.$emit('message:push', response.data.message,'info');
                vm.status.loading = "";
                this.$bus.$emit('changecart');
            });
        },
    },
    created() {
        const vm = this;
        this.getproducts();
    },
};
</script>

<style scoped>
  .product-bg {
        width: 100%;
        height: 400px;
        background-image: url("../../assets/frontbgimg/productbg.jpg");
        background-position: center;
        background-size: cover;
        z-index: -10;
  }
  .product-bg:after {
       content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        background: linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -moz-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -webkit-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -o-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        opacity: 0.3;
  }
  .itemlist {
      position: sticky;
      top: 10%;
      left: 0;
  }
    .itemtitle {
      font-size: 24px;
      padding: 8px 24px;
      border: solid #8BCC8C 3px;
      color: #306136;
  }
  @media (max-width: 972px){
	.itemtitle {
       font-size: 16px;
	}
  }
  .allproducts {
      margin: 0 10%;
  }
  ul {
      list-style: none;
  }
  .list-text:hover {
       text-decoration: none;
  }
  li {
      padding: 12px 0;
      padding-left: 1.5em;
      cursor: pointer;
      color: #6eb577;
      border-bottom: 1px #6eb577 solid;
      transition: all 0.2s;
  }
  li:hover {
      border-bottom: 3px #306136 solid;
      color: #306136;
      transition: all 0.2s;
  }
  /* Card */
  .card-item {
      padding: 10px;
      border: 3px #fff solid;
      transition: all 0.6s;
      cursor: pointer;
  }
  .card-item:hover {
      border: 3px #6eb577 solid;
      transition: all 0.6s;
  }
  .card-item:hover .card-detail,
  .card-item:hover .card-add-cart{
      opacity: 1;
      transition: all 0.4s;
  }
  .card-detail:hover,
  .card-add-cart:hover {
      background-color: #8BCC8C;
      color: #fff !important;
      transition: all 0.5s;
      text-decoration: none;
  }
  .card_detail-cart {
      position: absolute;
      top: 20%;
      left: 0;
      width: 100%;
      height: 100px;
  }
  .card-detail {
      position: absolute;
      top: 30px;
      left: 25%; 
      width: 25%;
      color: black !important;
      text-align: center;
      font-size: 200%;
      padding: 10px 23px;
      background-color: #6eb577;
      opacity: 0;
      transition: all 0.4s;
      margin-right: 5px;
  }
  .card-add-cart {
       position: absolute;
      top: 30px;
      left: 65%;
      width: 25%;
      color: black !important;
      text-align: center;
      font-size: 100%;
      padding: 12px 15px;
      transform: translateX(-50%);
      background-color: #6eb577;
      opacity: 0;
      transition: all 0.4s;
      margin-left: 5px;
  }
    @media (max-width: 992px){
	.card-detail {
       font-size: 120%;
    }
    .card-add-cart {
      font-size: 50%;
    }
  }
  .card-category {
      text-align: center;
  }
  .card-title {
      text-align: center;
  }
  .card-price {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
  }
  .card-origin-price {
      font-size: 14px;
  }
  .card-img {
      width: 100%;
      height: 250px;
  }
  .product-img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
  }

</style>