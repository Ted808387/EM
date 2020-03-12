<template>
    <div>
        <loading :active.sync="isLoading"></loading> 
        <div class="text-right mt-4">
        <button class="btn btn-outline-primary" @click="openModals">建立新的優惠卷</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th width="220">折扣百分比</th>
                    <th width="140">到期日</th>
                    <th width="140">是否啟用</th>
                    <th width="130">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in couponcode" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.percent }}%</td>
                    <td>{{ item.due_date }}</td>
                    <td>
                        <span class="text-success" v-if="item.is_enabled">啟用</span>
                        <span class="text-danger" v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openModals(false,item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteCoupon(item.id)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- pagination -->
        <pagination :getpagination="pagination" @userpage="getCoupon"></pagination>
        <!-- Modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增優惠碼</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm">
                                <div class="form-group">
                                <label for="title">標題</label>
                                <input type="text" class="form-control" id="title"
                                    placeholder="請輸入標題" v-model="addCouponcode.title">
                                </div>

                                    <div class="form-group">
                                        <label for="category">優惠碼</label>
                                        <input type="text" class="form-control" id="code"
                                        placeholder="請輸入優惠碼" v-model="addCouponcode.code">
                                    </div>
                                    <div class="form-group">
                                        <label for="price">到期日</label>
                                        <input type="date" class="form-control" id="date"
                                        placeholder="請輸入到期日" v-model="addCouponcode.due_date">
                                    </div>
                                    <div class="form-group">
                                        <label for="price">折扣百分比</label>
                                        <input type="text" class="form-control" id="percent"
                                        placeholder="請輸入百分比" v-model="addCouponcode.percent">
                                    </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"
                                        id="is_enabled" v-model="addCouponcode.is_enabled" 
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
                        <button type="button" class="btn btn-primary" @click="createdCoupon">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal end -->
    </div>
</template>

<script>
import $ from 'jquery';
import pagination from '../pagination';

export default {
    data() {
        return {
            couponcode: [],
            addCouponcode: {},
            isNew: false,
            isLoading: false,
            pagination: {}, //頁數
        };
    },
    components: {
        pagination,
    },
    methods: {
        getCoupon(page=1) {
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                vm.couponcode = response.data.coupons;
                // console.log(response.data);
                vm.pagination = response.data.pagination;
                vm.isLoading = false;
                console.log(vm.couponcode);
            });
        },
        openModals(isNew, item) {
            if(isNew) {
                this.addCouponcode = {};  
                this.isNew = true;
            }else {
                this.addCouponcode = Object.assign({}, item);
                this.isNew = false;
            }
            $('#couponModal').modal('show');
        },
        createdCoupon() {
            let api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
            let httpMethod = 'post';
            const vm = this;
            vm.isLoading = true;
            if(!vm.isNew) {
                api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.addCouponcode.id}`;
                httpMethod = 'put';
            }
            this.$http[httpMethod](api, { data: vm.addCouponcode }).then((response) => {
                vm.isLoading = false;
                console.log(vm.addCouponcode);
                if(response.data.success) {
                    $('#couponModal').modal('hide');
                    vm.getCoupon();
                }else {
                    $('#couponModal').modal('hide');
                    vm.getCoupon();
                }
            });
        },
        deleteCoupon(id) {
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${id}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.delete(api).then((response) => {
                vm.isLoading = false;
                // console.log(response.data);
                this.getCoupon();
            });
        },
    },
    created() {
       this.getCoupon();
    },
};
</script>
