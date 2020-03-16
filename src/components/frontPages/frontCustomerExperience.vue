<template>
  <div>
                <h2 class="text-center mb-5 font-weight-bold">Customer Experience</h2>
                    <div class="row no-gutters">
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://i.pinimg.com/originals/87/ba/ef/87baef67d4ec8b4a4c552d7bbd3246e9.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://images.unsplash.com/photo-1537467696134-5ad98b5c12af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://cdn.shopify.com/s/files/1/0307/8601/articles/bagus-renaldy-472858-unsplash.jpg?v=1549021347">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c144.0.1066.1066a/s640x640/83984370_186474759081453_6399856911404758233_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=dQ2CpTOPlV8AX_sCBcl&oh=21a6c204f13d2ad3356b094b1175f332&oe=5EC9043B">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://accuria.be/wp-content/uploads/2019/09/Staelens-nieuwsbrief.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://kreatives-unternehmertum.com/media/pages/gemeinsam-foerdern/impuls-stipendium/4052560342-1580198220/ku-macherstipendium-02-600x400.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://www.publishersweekly.com/images/cached/ARTICLE_PHOTO/photo/000/000/068/68771-v1-600x.JPG">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.106.853.853a/s640x640/37617302_2139513476264923_6148583384617582592_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=DVFPim1X9tUAX82H_ej&oh=b8cb810ce3f52bc4e3d13b7383f5d80c&oe=5EA73B6C">
                                </div>
                            </div>
                        </div>
                    </div>
  </div>
</template>

<style>
    .customer {
        margin-right: 5%;
        margin-left: 5%;
    }
    .customerimg {
        width: 100%;
        display: block;
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
    .customerimgbox-inner .customerimg:hover {
        width: 120%;
        height: 120%;
        z-index: 300;
    }
</style>