<template>
    <div>
        <section class="Paymentsuccess">
            <div class="payment-bg">
            </div>
            <div class="container">
                <div class="row pt-5 justify-content-around">
                    <div class="order-process process-undone-color col-12 col-md-3">Information</div>
                    <div class="order-process process-undone-color col-12 col-md-3">Payment</div>
                    <div class="order-process process-now-color col-12 col-md-3">Consummation</div>
                </div>
                <h1 class="text-center mt-5">
                    －&nbsp;Payment Completed&nbsp;－
                </h1>
                <div class="mt-5 text-center">
                    <router-link to="/frontProduct">
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-left"></i>
                        <h5 class="d-inline-block">Continue Shopping</h5>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>


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