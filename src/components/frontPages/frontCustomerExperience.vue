<template>
  <div>
                <h2 class="text-center mb-5 font-weight-bold">Customer Experience</h2>
                    <div class="row no-gutters">
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://i.pinimg.com/originals/87/ba/ef/87baef67d4ec8b4a4c552d7bbd3246e9.jpg');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer0.rating }}</p>
                                            <p class="customer_comment_text">{{ customer0.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://images.unsplash.com/photo-1537467696134-5ad98b5c12af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer1.rating }}</p>
                                            <p class="customer_comment_text">{{ customer1.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://cdn.shopify.com/s/files/1/0307/8601/articles/bagus-renaldy-472858-unsplash.jpg?v=1549021347');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer2.rating }}</p>
                                            <p class="customer_comment_text">{{ customer2.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c144.0.1066.1066a/s640x640/83984370_186474759081453_6399856911404758233_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=dQ2CpTOPlV8AX_sCBcl&oh=21a6c204f13d2ad3356b094b1175f332&oe=5EC9043B');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer3.rating }}</p>
                                            <p class="customer_comment_text">{{ customer3.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://accuria.be/wp-content/uploads/2019/09/Staelens-nieuwsbrief.jpg');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer4.rating }}</p>
                                            <p class="customer_comment_text">{{ customer4.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://kreatives-unternehmertum.com/media/pages/gemeinsam-foerdern/impuls-stipendium/4052560342-1580198220/ku-macherstipendium-02-600x400.jpg');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer3.rating }}</p>
                                            <p class="customer_comment_text">{{ customer3.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://www.publishersweekly.com/images/cached/ARTICLE_PHOTO/photo/000/000/068/68771-v1-600x.JPG');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer2.rating }}</p>
                                            <p class="customer_comment_text">{{ customer2.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <div class="customerimg omouse" style="background-image:url('https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.106.853.853a/s640x640/37617302_2139513476264923_6148583384617582592_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=DVFPim1X9tUAX82H_ej&oh=b8cb810ce3f52bc4e3d13b7383f5d80c&oe=5EA73B6C');">
                                        <div class="customer_comment text-white">
                                            <p><i class="far fa-star"></i>&nbsp;{{ customer4.rating }}</p>
                                            <p class="customer_comment_text">{{ customer4.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            customer0: {},
            customer1: {},
            customer2: {},
            customer3: {},
            customer4: {},
        };
    },
    methods: {
        getid() {
            let vm = this;   
            const api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJH38xRaIEbjQRDWJcNbVlHi8&language=zh-TW&fields=name,url,rating,reviews&key=AIzaSyAy9wlaxPGkp3yJJGKzWDjwCAEIj56I-gw';
            vm.axios.get(api).then((response) => {
                vm.customer0 = response.data.result.reviews[0];
                vm.customer1 = response.data.result.reviews[1];
                vm.customer2 = response.data.result.reviews[2];
                vm.customer3 = response.data.result.reviews[3];
                vm.customer4 = response.data.result.reviews[4];
            });
        },
    },
    created() {
        this.getid();
    }
};
</script>

<style>
    .customer {
        margin-right: 5%;
        margin-left: 5%;
    }
    .customerimg {
        width: 100%;
    }
    .customerimgbox {
        width: 100%;
        overflow: hidden;
    }
    .customerimgbox-inner {
        width: 100%;
        padding-top: 90%;
        position: relative;
    }
    .customerimgbox-inner .customerimg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: all 0.4s;
    }
    .customerimgbox-inner .customerimg:hover{
        width: 120%;
        height: 120%;
        z-index: 300;
    }
    .customerimgbox-inner .customerimg:hover .customer_comment {
        height: 100%;
        opacity: 1;
        transition: all 0.4s;
        background-color: rgba(0,0,0,0.6);
    }
    .customer_comment {
        height: 100%;
        padding:35% 20% 0;
        opacity: 0;
        transition: all 0.4s;
        background-color: rgba(0,0,0,0);
    }
    .customer_comment_text {
        display: block;
        height: 50px;
        overflow: hidden;
        text-overflow : ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    @media (max-width: 320px){
        .customer_comment {
            font-size: 0.8rem;
        }
    }
</style>