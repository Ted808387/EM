<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <div class="imgbox">
                    <div class="imgbox__inner imgbox__inner-4-3">
                        <div class="image" :style="{backgroundImage: 
                        'url(https://miro.medium.com/max/5792/0*LEPkq1PSPaFPd4NK)' }">
                            <router-link to="/frontHome/frontProduct" class="product-show">
                                <h2 class="swiper-text">熱門</h2>
                            </router-link>
                        </div>
                    </div>
                 </div>   
            </swiper-slide>
            <swiper-slide>
                <div class="imgbox">
                    <div class="imgbox__inner imgbox__inner-4-3">
                        <div class="image" :style="{backgroundImage: 
                        'url(https://images.unsplash.com/photo-1584020961222-f72484ed4d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }">
                            <router-link to="/frontHome/frontProduct" class="product-show">
                                <h2 class="swiper-text">全商品</h2>
                            </router-link>
                        </div>
                    </div>
                 </div>   
            </swiper-slide>
            <swiper-slide>
                <div class="imgbox">
                    <div class="imgbox__inner imgbox__inner-4-3">
                        <div class="image" :style="{backgroundImage: 
                        'url(https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }">
                            <router-link to="/frontHome/frontProduct" class="product-show">
                                <h2 class="swiper-text">口罩</h2>
                            </router-link>
                        </div>
                    </div>
                 </div>   
            </swiper-slide>
            <swiper-slide>
                <div class="imgbox">
                    <div class="imgbox__inner imgbox__inner-4-3">
                        <div class="image" :style="{backgroundImage: 
                        'url(https://priestsheetmetal.co.nz/wp-content/uploads/2019/05/priest_sheetmetal-welding-sheetmetal-christchurch_new_zealand-3840.jpg)' }">
                            <router-link to="/frontHome/frontProduct" class="product-show">
                                <h2 class="swiper-text">面罩</h2>
                            </router-link>
                        </div>
                    </div>
                 </div>   
            </swiper-slide>
            <swiper-slide>
                <div class="imgbox">
                    <div class="imgbox__inner imgbox__inner-4-3">
                        <div class="image" :style="{backgroundImage: 
                        'url(https://www.manuremanager.com/wp-content/uploads/2019/09/a0ad274371d8c5d818f6646bbedbce84-1024x683.jpg)' }">
                            <router-link to="/frontHome/frontProduct" class="product-show">
                                <h2 class="swiper-text">面具</h2>
                            </router-link>
                        </div>
                    </div>
                 </div>   
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import bg1 from '../../assets/frontSlideimg/slide1.jpg';
import bg2 from '../../assets/frontSlideimg/slide3.jpg';
import bg3 from '../../assets/frontSlideimg/slide2.jpg';
import bg4 from '../../assets/frontSlideimg/slide5.jpg';
import bg5 from '../../assets/frontSlideimg/slide4.jpg';

export default {
    components: {
        swiper,
        swiperSlide,
    },
    name: 'carrousel',
    data() {
        return {
            bg1: bg1,
            bg2: bg2,
            bg3: bg3,
            bg4: bg4,
            bg5: bg5,
            swiperOption: {
                notNextTick: true,
                autoplay: {
                    delay: 3000,
                },
                direction : 'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                initialSlide: -1,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                observeParents: true,
                slidesPerView: 3,
                loop: true,
                debugger: true,
                touchMoveStopPropagation: true,
                spaceBetween: 20,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    360: {
                        slidesPerView: 1,
                    },
                },
            },
        };
    },
};
</script>

<style>
    /* image */
    .image{
	width: 100%;
	display: block;
    }
    .image:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0;
        overflow: hidden;
        background-color: rgba(256, 256, 256, 0);
        transform: translateY(50px);
        transition: all 0.4s;
    }
    .image:hover:after {
        height: 100%;
        top: 0%;
        transform: translateY(0px);
        background-color: rgba(256, 256, 256, 0.6);
    }
    /* Imgbox
    ------------------*/
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
    .imgbox__inner .image{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
    .product-show {
        position: absolute;
        top: 90%;
        width: 65%;
        height: 35%;
        color: #fff;
        padding: 5%;
        background-color: #343a40;
        transition: all 0.4s;
        z-index: 10;
        opacity: 0;
    }
    .image:hover .product-show{
        position: absolute;
        top: 40%;
        opacity: 1;
        text-decoration: none;
        color: #fff;
    }
     @media (max-width: 576px){
        .product-show {
            padding: 1%;
        }
    }
    @media (min-width: 1200px){
        .swiper-text {
            font-size: 60px;
        }
    }
</style>