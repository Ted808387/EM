<template>
<div>
    <footer class="footer">
        <div class="footer_content">
            <div class="row">
                <div class="col-sm-3 footer-card">
                    <h4 class="text-white font-weight-bold footer-title">About Us</h4>
                    <p class="footer-head text-white">
                        將來世界各地的人們都更容易受到細菌和病毒的侵害，我們必須運用科技來改善人們的生活。
                    </p>
                </div>
                <div class="col-sm-2 footer-card offset-sm-1">
                    <h4 class="text-white font-weight-bold footer-title">Quick Links</h4>
                    <div class="footer-middle text-white">
                        <p>
                            <router-link class="omouse footer-text-color" to="/frontHome/frontHome">Home</router-link>
                        </p>
                        <p class="omouse footer-text-color">
                            <router-link class="omouse footer-text-color" to="/frontHome/frontCoupon">News</router-link>
                        </p>
                        <p class="omouse footer-text-color">
                            <router-link class="omouse footer-text-color" to="/frontHome/frontProduct">Products</router-link>
                        </p>
                    </div>
                </div>
                <div class="col-sm-5 footer-card offset-sm-1 text-white">
                    <h4 class="font-weight-bold footer-title">Contact Us</h4>
                    <div class="row">
                        <div class="col-md-7">
                         <i class="fas fa-phone-alt">&nbsp;&nbsp;Phone</i>
                        <p>
                            +886 7 933 1234 </br>
                            +886 7 223 1234
                        </p>
                        <i class="fas fa-envelope">&nbsp;&nbsp;Email</i>
                        <p>
                            virus@casebycase.com
                        </p>
                        <i class="fas fa-map-marker-alt">&nbsp;&nbsp;address</i>
                        <p>
                            Sanmin Dist., Kaohsiung City 807, Taiwan (R.O.C.)
                        </p>
                        </div>
                        <div class="col-md-5 footer-icon">
                            <a href="#" class="footer-text-color">
                                <i class="fab fa-facebook fa-3x"></i></br></br>
                            </a>
                            <a href="#" class="footer-text-color">
                                <i class="fab fa-github fa-3x"></i></br></br>
                            </a>
                            <a href="#" class="footer-text-color">
                                <i class="fab fa-linkedin fa-3x"></i></br></br>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom mx-auto text-white text-center">
                    <p>僅做為個人學習使用，非商業用途。</p>
                    <p>Copyright&nbsp;&copy;&nbsp; 2020 Ted design</p>
                </div>
            </div>
        </div>    
    </footer>
</div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
}
</script>


<style>
    .footer {
        width: 100%;
        margin-top: 60px;
        background-color: #8BCC8C;
        padding: 15px 15px 0 15px;
    }
    .footer-card {
        height: 100%;
    }
    .footer-text-color {
        color: #e7e7e7;
    }
    .footer-head {
        display: block;
        line-height: 30px;
        width: 80%;
    }
    .footer-title {
        height: 40px;
    }
    .footer-text-color {
        color: #fff !important;
        transition: color 0.4s;
    }
    .footer-text-color:hover {
        color: #3C804B !important;
        text-decoration: none;
        transition: color 0.4s;
    }
    .footer-bottom {
        font-size: 12px;
    }
    @media (max-width: 768px){
        .footer-text-color {
            display: inline-block;

        }
    }
</style>