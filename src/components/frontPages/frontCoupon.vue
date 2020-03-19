<template>
    <div>
        <section class="product">
            <div class="product-bg">
            </div>
            <div class="coupon-title">
                <h2 class="text-center font-weight-bold mt-5 text-primary">Latest Offers</h2>
                <div class="coupon-code mt-5">
                    <div class="container">
                        <div class="coupon-img d-block text-white">
                            <h2 class="Coupon p-4 font-weight-bold">因應Covid-19流行</h2>
                            <h4 class="couponcode-title font-weight-bold">折扣碼</h4>
                            <h1 class="couponcode coupon-shadow text-primary">health</h1>
                            <h2 class="text-center font-weight-bold">商品全面8折</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
</template>

<style scoped>
  .product-bg {
        width: 100%;
        height: 250px;
        background-image: url("../../assets/frontbgimg/News.jpg");
        background-position: 50% 35%;
        background-size: cover;
        z-index: -10;
  }
  .product-bg:after {
       content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 250px;
        background: linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -moz-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -webkit-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        background: -o-linear-gradient(360deg, #70B594 69%, #1C1C1C 100%);
        opacity: 0.3;
  }
  .coupon-img {
      width: 100%;
      height: 350px;
      background-image: url('../../assets/frontimg/discountImage.jpg');
      box-shadow: 0 3px 3px rgba(0,0,0,0.5);
      background-position: center;
      background-size: cover;
  }
  .couponcode-title {
      font-size: 32px;
      padding-left: 240px;
  }
  .couponcode {
      font-size: 120px;
      text-align: center;
  }
  .coupon-shadow {
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
        3px 3px 3px #000;
  }
  @media (max-width: 576px){
	.couponcode {
       font-size: 60px;
    }
    .couponcode-title {
        padding-left: 0;
        text-align: center;
    }
    .Coupon {
        font-size: 24px;
    }
  }
  </style>
