<template>
    <div>
        <section class="home">
            <div class="bg mb-3">
                <div class="header-text text-center">
                    <div class="text-center text-lg font-weight-bold">MASK</div>
                    <router-link to="/frontHome/frontProduct">
                        <button class="btn btn-lg btn-dark mt-5">Show now</button>
                    </router-link>
                    <div class="scrolldown omouse" @click.stop="scrolldown"><i class="fas fa-chevron-circle-down"></i></div>
                </div>
            </div>
            <div class="productionitem">
                <!-- Slide -->
                <Slide></Slide> 
            </div>
            <!-- Pollution Solution -->
            <div id="item1" class="Pollutionsolution">
                <div class="container">
                    <h2 class="text-center mb-5 font-weight-bold">Pollution Solution</h2>
                    <div class="container-fluid">
                        <div class="row pb-4 underline">
                            <div class="col-md-7">
                                <div class="imgbox">
                                    <div class="imgbox__inner imgbox__inner-4-3">
                                        <img class="image1" src="../../assets/frontimg/mask2.jpg">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="text-dark pt-5 pl-md-5">
                                    <h4 class="pb-3 font-weight-bold text-center text-md-left">
                                        可提供近100％的微粒過濾保護
                                    </h4>
                                        <p class="text-p d-block pl-md-4">由專業人員用於某些塗料噴塗，溶劑和農藥，
                                            除用於幫助防止某些有機蒸氣外，還提供至少95％的
                                            過濾效率，可對固體和液體氣溶膠（包括油）進行過
                                            濾，旨在提供性能和舒適性
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row pt-4 pb-4 underline">
                            <div class="col-md-6 order-2 order-md-1">
                                <div class="text-dark pt-5 pr-md-5">
                                    <h4 class="pb-3 text-center font-weight-bold text-md-right">三層過濾系統</h4>
                                    <p class="text-p d-block text-md-right pr-md-4">
                                        過濾系統過濾PM10，PM2.5和PM0.3等污染顆粒以及細菌和病毒，符合國家標準CNS14774規範
                                        ，有3層防護。最外層是防水層，防止飛沫傳染；中間層是細菌過濾系統；皮膚接觸的內層則是親膚性纖維
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 order-1 order-md-2">
                                <div class="imgbox">
                                    <div class="imgbox__inner imgbox__inner-4-3">
                                        <img class="image1" src="../../assets/frontimg/testvirus.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row pt-4 pb-4">
                            <div class="col-md-6">
                                <div class="imgbox">
                                    <div class="imgbox__inner imgbox__inner-4-3">
                                        <img class="image1" src="../../assets/frontimg/mask3.jpg">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-dark pl-md-5 pt-5">
                                    <h4 class="pb-3 font-weight-bold text-center text-md-left">均衡的設計帶來更多舒適感</h4>
                                    <p class="text-p d-block pl-md-4">
                                        適用於長時間穿戴工作場所之職業，軍用規格將防禦等級提升至最高;使用有柔軟特性的聚丙烯材質
                                        ，以棉料搭配聚乙烯，增強肌膚舒適感以及提高過濾性能;防霧設計可避免眼鏡因穿戴口罩時
                                        產生霧氣而影響視線。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- discount -->
            <div class="discountCode">
                <div class="couponImg">
                    <h1 class="discount-title-text text-white font-weight-bold text-lg">80% OFF</h1>
                    <h3 class="discount-sale-text text-white text-sm">HOT SALE</h3>
                    <router-link to="/frontHome/frontCoupon">
                        <button class="discount-btn btn btn-success btn-lg">Coupon Code</button>
                    </router-link>
                </div>
            </div>
            <!-- Customer experience -->
            <div class="customer">
                <Customer></Customer>
            </div>
        </section>
    </div>
</template>

<script>
import Slide from './frontSlide.vue';
import Customer from './frontCustomerExperience';
import $ from 'jquery';

export default {
    components: {
      Slide,
      Customer,
    },
    methods: {
        scrolldown() {
            $('html,body').animate({
                scrollTop: $('#item1').offset().top - 100
            }, 600);
        },
    },
};
</script>

<style>
    .bg {
        width: 100%;
        padding-top: 60vh;
        background-image: url("../../assets/frontbgimg/homebg.jpg");
        background-position: center;
	    background-size: cover;
        z-index: -10;
    }
    .bg:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 60vh;
        background: linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -moz-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -webkit-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -o-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        opacity: 0.5;
    }
    .Pollutionsolution {
        margin-top: 5%;
        padding-top: 5%;
        padding: 10px 0;
        background-color: #fff;
    }
    .header-text {
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
    }
    .underline {
        border-bottom: 1px solid #E6E4DC;
    }
    /* Font-size */
    .text-lg {
        font-size: 72px;
    }
    .text-md {
        font-size: 56px;
    }
    .text-sm {
        font-size: 40px;
    }
    /* Mouse */
    .omouse {
        cursor: pointer;
    }
    .scrolldown {
        width: 36px;
        margin: 100px auto 0;
        font-size: 32px;
        color: #fff;
        opacity: 0.6;
        transition: all 0.3s;
        animation-name: scroll;
        animation-iteration-count: infinite;
        animation-duration: 4s;
    }
    .scrolldown:hover {
        margin-top: 90px;
        opacity: 1;
        transition: all 0.3s;
        animation-name: stopcolor;
    }
    @keyframes stopcolor {
        0% {opacity: 1;}
    }
    @keyframes scroll {
    0% {opacity: 1;}
    25% {opacity: 0.2;}
    50% {opacity: 0.6;}
    75% {opacity: 0.8;}
    100% {opacity: 1;}
    }
    /* Image */
    .image1{
        width: 100%;
        display: block;
    }
    .imgbox{
        width: 100%;
        overflow: hidden;
    }
    .imgbox__inner{
        width: 100%;
        padding-top: 100%;
        position: relative;
    }
    .imgbox__inner.imgbox__inner-4-3{
        padding-top: 75%;
    }
    .imgbox__inner.imgbox__inner-1-2{
        padding-top: 50%;
    }
    .imgbox__inner .image1{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
    .image-shadow {
        box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.4);
    }
    .text-p {
        font-family: "Noto Sans TC", "Roboto", "Arial", sans-serif;
        line-height: 30px;
    }
    .discountCode {
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .couponImg {
        width: 100%;
        padding: 30px 50px;
        background-image: url('../../assets/frontimg/discountImage.jpg');
        background-position: center;
        background-size: cover;
        display: block;
    }
    .discount-title-text {
        margin: 20px 0 0 10px;
    }
    .discount-sale-text {
        margin-left: 100px;
    }
    @media (max-width: 576px){
        .discount-title-text {
            font-size: 48px;
        }
    }
    .discount-btn {
        margin-left: 50%;
        transform: translateX(-50%);
        width: 200px;
        border-radius: 30px;
        margin-bottom: 20px;
    }
</style>