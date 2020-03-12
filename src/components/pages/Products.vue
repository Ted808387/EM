<template>
<div>
    <!-- 加上套件Vue Loading Overlay -->
    <loading :active.sync="isLoading"></loading> 
    <div class="text-right mt-4">
        <button class="btn btn-outline-primary" @click="openModals(true)">建立新的產品</button>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="120">啟用/未啟用</th>
                <th width="125">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">
                    {{ item.origin_price | currency}}
                </td>
                <td class="text-right">
                    {{ item.price | currency}}
                </td>
                <td class="text-center">
                    <!-- is_enabled == 1 為啟用 -->
                    <span v-if="item.is_enabled" class="text-success">啟用</span> 
                    <span v-else>未啟用</span>
                </td>
                <td>
                    <!-- @click="openModals(false, item)" ， 並將item丟入-->
                    <button class="btn btn-outline-primary btn-sm" @click="openModals(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm" @click="deletModals(item)">刪除</button>
                </td>
            </tr>
        </tbody>
    </table>
     <!-- Pagination -->
     <!-- userpage為子層$emit要用父層getproducts的function -->
     <!-- :pagination為子層的props要跟父層拿資料 -->
     <pagination :getpagination="pagination" @userpage="getproducts"></pagination> 
    <!-- 產品Model -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>新增產品</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                        <label for="image">輸入圖片網址</label>
                        <input type="text" class="form-control" id="image"
                            placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                        </div>
                        <div class="form-group">
                        <label for="customFile">或 上傳圖片
                            <i class="fas fa-spinner fa-pulse" v-if="status.fileUploading"></i>
                        </label>
                        <input type="file" id="customFile" class="form-control"
                            ref="files" @change="uploadFile">
                        </div>
                        <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                        class="img-fluid" alt="" :src="tempProduct.imageUrl">
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control" id="title"
                            placeholder="請輸入標題" v-model="tempProduct.title">
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input type="text" class="form-control" id="category"
                            placeholder="請輸入分類" v-model="tempProduct.category">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">單位</label>
                            <input type="unit" class="form-control" id="unit"
                            placeholder="請輸入單位" v-model="tempProduct.unit">
                        </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="origin_price">原價</label>
                            <input type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價" v-model="tempProduct.origin_price">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input type="number" class="form-control" id="price"
                            placeholder="請輸入售價" v-model="tempProduct.price">
                        </div>
                        </div>
                        <hr>

                        <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea type="text" class="form-control" id="content"
                            placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                            id="is_enabled" v-model="tempProduct.is_enabled" 
                            :true-value="1" :false-value="0"> 
                            <label class="form-check-label" for="is_enabled">
                            是否啟用
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updataProduct">確認</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>刪除產品</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="deletProduct"
                    >確認刪除</button>
                </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import $ from 'jquery';    //要額外定義$為jquery模組內的變數
// window.$ = $;  //將$變數變為全域使用，其他的元件就都可以用$，但需放在main.js檔案內
import pagination from '../pagination';

export default {
    data() {
        return {
            products: [],  //要將串接到的API內的資料都丟進來
            tempProduct: {},  //上面HTML都以綁定tempProduct內部的資料,這邊為"產品資料"
            isNew: false,
            isLoading: false, //true就啟用套件Vue Loading Overlay
            status: {  //動畫icon
                fileUploading: false,
            },
            pagination: {},
        };
    },
    components: {
        pagination,
    },
    methods: {
        getproducts(page = 1) { //這裡是將底下新增的產品資料傳到頁面上，預設page=1，如沒用預設值他會自動帶入1
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;//'https://vue-course-api.hexschool.io/api/tedcode/products'//;  //:api_path = 先前申請的api id
            const vm = this;  //要將資料在存回到vm.products
            vm.isLoading = true;
            //要加上API伺服器路徑 and 申請的api path ，${這裡面可以打上javascript程式碼(函式，單行自動return)}，‵這裡面直接讀取‵
            // console.log(process.env.API_PATH, process.env.CUSTOMPATH); //測試看看抓得到抓不到dev.env內另外宣告的變數API and custompath
            this.$http.get(api).then((response) => {
            vm.products = response.data.products;  //將資料存入vm.products
            // console.log(response.data);
            vm.isLoading = false;
             vm.pagination = response.data.pagination;
            //  console.log(vm.pagination);
            });
        },
        openModals(isNew, item) {  //是否為要新增或者編輯，因為摩板用同一個，就用這個去分類要用哪個API
            if(isNew) {
                this.tempProduct = {};  
                this.isNew = true;
            }else {
                this.tempProduct = Object.assign({}, item);  //將item寫到空物件裡，並讓tempProduct與item無傳參考性
                this.isNew = false;
            }
            $('#productModal').modal('show');  //新增產品的模板顯示
        },
        updataProduct() {  //新增產品資料
            let api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/product`;
            let httpMethod = 'post';
            const vm = this;  
            if(!vm.isNew) {  //編輯產品資料
                api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                httpMethod = 'put';  //將方法改為put
            }
            this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {  //this.$http[httpMethod] = this.$http.get(api) 方法改變方式用[方法]
            console.log(response.data);
                if(response.data.success) {  //串接成功的話，新增產品的模板消失
                    $('#productModal').modal('hide');
                    vm.getproducts();  //在將產品傳到頁面，指重新傳一次產品內容
                }else {
                    $('#productModal').modal('hide');
                    vm.getproducts();
                    console.log('新增產品失敗');
                };
            });
        },
        deletModals(item) {
            this.tempProduct = item;  //即將刪除的那個產品
            // console.log(item);
        $('#delProductModal').modal('show');
        },
        deletProduct() {
            const vm = this; 
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;  //api指到要刪除的產品id
            this.$http.delete(api).then((response) => {
                console.log(response);
                if(response.data.success) {
                    $('#delProductModal').modal('hide');
                    vm.getproducts();
                    this.$bus.$emit('message:push', response.data.message);
                    console.log('刪除成功');
                }else {
                    $('#delProductModal').modal('hide');
                    vm.getproducts();
                    console.log('刪除失敗');
                }
            });
        },
        uploadFile() {
            // console.log(this);
            const uploadedFile = this.$refs.files.files[0]; //取出的資料
            const vm = this;
            vm.status.fileUploading = true;  //動態讀取開啟
            const formdata = new FormData(); //表單送出型式，建立formdata物件，模擬傳統的表單型式
            formdata.append('file-to-upload', uploadedFile); //將取出的資料加入formdata     append('要傳入的表單名稱', 傳入的資料)
            const url = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
            this.$http.post(url, formdata, {   //將他送出
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((response) => {
                // console.log(response.data);
                vm.status.fileUploading = false;  //動態讀取停止
                if(response.data.success) {
                    // vm.tempProduct.imageUrl = response.data.imageUrl;
                    // console.log(vm.tempProduct);
                    vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl); //強制寫入
                }else {
                    this.$bus.$emit('message:push', response.data.message, 'danger');   //內層傳外層觸發$on
                    //1. Products.vue 內，如果 response.data.success 不等於成功，使用 $emit 觸發 messsage:push 事件，
                    //並且帶入參數 response.data.message(alert 上顯示的訊息) 以及 danger(alert 樣式)
                    //2. messsage:push 事件內包著 updateMessage(message, status) 事件，所以接著會觸發 updateMessage(message, status) 事件
                }
            });
        },  
    },
    created() {
        this.getproducts();
    },
}
</script>