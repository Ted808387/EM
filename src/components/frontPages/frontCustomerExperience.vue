<template>
  <div>
                <h2 class="text-center mb-5 font-weight-bold">Customer Experience</h2>
                    <div class="row no-gutters">
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg1.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg2.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg3.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg4.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg5.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg6.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg7.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="customerimgbox">
                                <div class="customerimgbox-inner">
                                    <img class="customerimg omouse" src="../../assets/frontimg/CEimg/customerimg8.jpg">
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