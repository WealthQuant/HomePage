<template>
  <div class="HOME">
    <div class="img1 img">
      <img src="../assets/25.png" class="bg1" alt="" align="middle" srcset="">
      <div class="text text_top">
        {{$t('common.There are a lot of people and companies that claim to do the right thing when it comes to your finances')}}
      </div>
      <div class="text_min text_bottom">
        {{$t('common.Unfortunately, that’s not what most of us are feeling')}}
      </div>
    </div>
    <div class="img2 img">
      <img src="../assets/image/people.png" class="people" alt="" align="middle" srcset="">
      <img src="../assets/26.png" class="people_2" alt="" align="middle" srcset="">
      <!-- <div class="bg2 img_6"></div> -->
    </div>
    <div class="img3 img">
      <img src="../assets/27.png" class="bg2" alt="" align="middle" srcset="">
      <div class="text text_top">
        {{$t('common.What Matters to You, Matters to Us')}}
      </div>
      <div class="text_min text_bottom">
        {{$t("common.We’re on a mission to make investing fair for eveyone")}}
      </div>
    </div>
    <div class="img4 img">
      <img src="../assets/image/target.png" class="target" alt="" align="middle" srcset="">
      <!-- <img src="../assets/28.png" class="bg2" alt="" align="middle" srcset=""> -->
      <div class="bg2 img_7 "></div>
      
    </div>
    <div class="img5 img">
      <div class="bg2 img_8 "></div>
      <!-- <img src="../assets/29.png" class="bg2" alt="" align="middle" srcset=""> -->
      <div class="text text_top">
        {{$t("common.By automating good advice,we’re able to help more people,wealthy")}}
      </div>
      <div class="text_min text_bottom">
        {{$t("common.Our AI helps your advisor identify ways for you to get a higher return while taking lower risk")}}
      </div>
    </div>
    <div class="info">
      <div class="item">
        <div>
          <div class="img_box HouseQuant" />
          <div class="title">
            {{$t("common.HouseQuant")}}
          </div>
          <div class="content">
          {{$t("common.We’re bringing the quantitative revolution to real estate investing Property investing today is often based on incomplete and inadequate information Analysis, forecasts, and decisions are not rigorously produced, and are sometimes driven by emotion, untested assumptions, and rules of thumb Portfolio considerations in real estate are often ignored")}}
          <br />
          {{$t("common.We work to improve real estate decision making It can and should be evidence-based, data-driven, and systematic instead We are leading the way forward by applying quantitative finance and data science methods to global real estate, helping investors beat the market")}}
          </div>
        </div>
          <!-- <div class="right_img wow  slideInUp" data-wow-offset="200"></div> -->
           <img src="../assets/code/002.png" class="right_img wow  slideInUp" data-wow-offset="150"  alt="">
          <div class="bg_img">
          <!-- <div class="left_box"> -->
             <img src="../assets/code/001.png" class="left_img wow fadeInLeft" data-wow-offset="100" data-wow-delay=".2s" data-wow-duration="1.5s" alt="">
            <!-- <div class="left_img wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1.5s"></div> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="item">
        <div>
          <div class="img_box StockQuant" />
          <div class="title">{{$t("common.StockQuant")}}</div>
          <div class="content">
            {{$t("common.Committed to providing a full range of growth stock analysis and interpretation, with performance exceeds expectations and technical analysis in one accurate stock selection, market trend tracking and position dynamic management in one to control risk, quantitative automatic trading and instruction-based trigger in one to avoid psychological impact, to obtain excessive returns!")}}
            <br />
            <br />
            1. {{$t('common.Maximize Your Returns With Power of AI')}} 
            <br />
            2. {{$t('common.Automate Your Trading To Make Best Use of Time And Capital')}} 
            <br />
            3. {{$t("common.Disciplined and Emotion Free Trading")}}
          </div>
        </div>
        <!-- <div class="StockQuant_left  wow  slideInUp" data-wow-delay="0.1s" ></div> -->
         <img src="../assets/code/003.png" class="StockQuant_left  wow  slideInUp"  data-wow-offset="150" alt="">
        <div class="bg_img">
          <img src="../assets/code/004.png" class="StockQuant_right wow fadeInRight"  data-wow-delay=".2s" data-wow-offset="100" data-wow-duration="1.5s" alt="">
          <!-- <div class="StockQuant_right  wow fadeInRight " data-wow-delay=".2s" data-wow-duration="1.5s"></div> -->
        </div>
      </div>
      <div class="item">
        <div>

          <div class="img_box CollectibleQuant" />
          <div class="title">{{$t('common.CollectibleQuant')}}</div>
          <div class="content">
            {{$t('common.Folk ancient artworks are the most representative markers and carriers of Chinese culture and dissemination With the help of artificial intelligence, blockchain, IoTs and other technologies, CollectibleQuant is committed to providing comprehensive scientific digital twin, collection tracing, collection identification and valuation quantification')}}.
          </div>
        </div>
        <!-- <img src="../assets/code/005.png" class="CollectibleQuant_left  wow  slideInUp" data-wow-delay="0.1s" alt=""> -->
        <!-- <div class="CollectibleQuant_left  wow  slideInUp" data-wow-delay="0.1s" ></div> -->
        <img src="../assets/code/005.png" class="CollectibleQuant_left  wow  slideInUp"  data-wow-offset="150"   alt="">
        <div class="bg_img">
          <img src="../assets/code/006.png" class="CollectibleQuant_right wow"  data-wow-offset="100"   alt="">
          <!-- <div class="CollectibleQuant_right  wow  "></div> -->
        </div>
      </div>
    </div>
    <div class="AQ">
      <div class="AQ_title">{{$t("common.Why US?")}}</div>
      <div class="AQ_item">
        <div class="img lock"></div>
        <div class="AQ_content">
          <div class="title">
            {{$t("common.Research-Driven")}}
          </div>
          <div class="content">
            {{$t('common.Our method is grounded in fundamental finance principles, rigorous quantitative research with tested models and strategies, and domain knowledge in FinTech, compliance and operations Our team is comprised of seasoned investment professionals, university professors and researchers in applied math and quantitative finance')}}
          </div>
        </div>
      </div>
       <div class="AQ_item">
        <div class="img pie_chart"></div>
        <div class="AQ_content">
          <div class="title">
            {{$t("common.Track Record in AI & Big Data")}}
          </div>
          <div class="content">
            {{$t('common.Close to 10 years of experience developing big data, natural language processing (NLP) and machine learning at a large scale at Google, Microsoft and Baidu Developing Wealth Quant’s suite of machine learning and deep learning products and services since 2020')}}
          </div>
        </div>
      </div>
       <div class="AQ_item">
        <div class="img server"></div>
        <div class="AQ_content">
          <div class="title">
            {{$t('common.World-class Engineering')}}
          </div>
          <div class="content">
            {{$t('common.Decades of combined engineering know-how, developing information and commerce platforms at the scale of billions of search queries per day, and more than 10,000 purchase transactions per second Experienced in the development of large-scale cloud computing architecture, data storage and processing, and algorithms and decision engines processing at 40,000 QPS per second')}}
          </div>
        </div>
      </div>
      <div class="AQ_title">{{$t('common.who We are')}}?</div>
      <div class="AQ_item">
        <div class="AQ_content whoQ">
          <div class="title">
            {{$t("common.About WealthQuant")}}
          </div>
          <div class="content">
            {{$t('common.WealthQuant was founded in the middle of 2021 and the founding team used to work at Baidu, Alibaba and financial firms with a proven track record of building many mission-critical machine learning systems where billions of data points were processed in real-time to predict the best outcome for core search ranking, ads monetization, recommendations, and trading platforms Our mission is to build machine investing solutions to find alpha with adaptive learning algorithms and to create an edge by assimilating vast quantities of complex data through the latest AI methods to generate signals to uncover hidden, dynamic, and nonlinear patterns in the financial markets, especially in real estate, stock market and collectible investment')}}
          </div>
        </div>
      </div>
      <div class="title Q_title">{{$t('common.Our Backgrounds')}}</div>
      <div class="Q_img">
        <div class="item baidu"></div>
        <div class="item ali"></div>
        <div class="item ten"></div>
        <div class="item honeywell"></div>
      </div>
       <div class="Q_img">
        <div class="item zhong"></div>
        <div class="item kin"></div>
        <div class="item qing"></div>
        <div class="item hua"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="item_box">
        <div class='bottom_item'><i class="el-icon-s-promotion"></i></div>
        <div class='bottom_item'>f</div>
        <div class='bottom_item'><i class="el-icon-s-grid"></i></div>
      </div>
      <div class="bottom_text">
        <div style="margin:0 auto; padding:0 0;">
          <p align="center" style="line-height:0.20rem; color:#fff;"> Copyright © 2021-2022 WealthQuant. All Rights Reserved. 财富量化 版权所有</p>
        </div>
        <div style="margin:0 auto; padding:0 0;">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010502001403" style="display:inline-block;text-decoration:none;height:0.20rem;line-height:0.20rem;">
            <img src="../assets/beian.png" style="float:left;height:100%"/>
            <p style="float:left;height:0.20rem;line-height:0.20rem;margin: 0px 0px 0px 0.05rem; color:#fff;">鄂公网安备 42010502001403号</p>
          </a>
          <a href="https://beian.miit.gov.cn/" target="_blank" style="display:inline-block;text-decoration:none;height:0.20rem;line-height:0.20rem;">
            <p style="float:left;height:0.20rem;line-height:0.20rem;margin: 0px 0px 0px 0.05rem; color:#fff;">鄂ICP备2021016703号</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        const wow = new WOW({
          mobile: true,
          live: false
        })
        wow.init()
      })
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>
  .HOME {
    .img {
      position: relative;
    }
    .text_top {
      font-size: .40rem;
      line-height: .50rem;
      font-family: ArialRoundedMTBold, "微软雅黑";
      color: #333333;
      font-weight: 600;
    }
    .text_bottom {
      font-family: ArialRoundedMTBold, "微软雅黑";
      color: #333333;
      font-weight: 600;
      line-height: .32rem;
      font-size: .28rem;
    }
    .img1 {
      .text {
        position: absolute;
        top: .88rem;
        left: 25%;
        text-align: left;
        width: 63%;
        height: 2.56rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: .88rem;
        left: 25%;
        text-align: left;
        
      }
    }
    .img2 {
      position: relative;
      width: 100%;
      height: 43.75vw;
      // .img_6 {
      //   width: 100%;
      //   height: 100%;
      //   background: #FFFFFF url(../assets/6.png) no-repeat center center;
      //   background-size: 75%;
      // }
      .people_2 {
        width: 100%;
        height: 43.75vw;
      }
      .people {
        position: absolute;
        top: -7.8vw;
        left: 10%;
        width: 58.3%;
        height: 60.1vw;
        z-index: 22;
      }
    }
    .img3 {
      .text {
        position: absolute;
        top: 1.52rem;
        right: 25%;
        text-align: right;
        width: 63%;
        height: 1.28rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: 1.52rem;
        right: 25%;
        text-align: right;
        
      }
    }
    .img4 {
      position: relative;
      height: 43.75vw;
      background: #000000;
       .img_7 {
        width: 75.15%;
        height: 43.75vw;
        margin-left: 12.5%;
        background: #000000 url(../assets/7.png) no-repeat;
        background-size: 100%;
      }
      .target {
        position: absolute;
        top: -13.75vw;
        left: 26.6%;
        width: 62.5%;
        height: 62.5vw;
        z-index: 22;
      }
    }
    .img5 {
      .img_8 {
        width: 10%;
        margin-left: 12.5%;
        background: #FFFFFF url(../assets/8.png) ;
        background-size: 100%;
      }
      .text {
        position: absolute;
        top: 1.2rem;
        left: 25%;
        text-align: left;
        width: 63%;
        height: 2.56rem;
      }
      .text_min {
        width: 63%;
        height: .64rem;
        position: absolute;
        bottom: 1.2rem;
        left: 25%;
        text-align: left;
        
      }
    }
    .bg1 {
      // padding-top: 5.36%;
      background: #F2F2F2;
      height: 5.6rem;
      width: 100%;
    }
    .bg2 {
      vertical-align: bottom;
      font-size:0;
      line-height: 0;
      width: 100%;
      height: 5.6rem;
    }
    .info {
      background: #FF501E;
      overflow: hidden;
      padding: .32rem 0;
      .item {
        width: 90%;
        max-width: 9.6rem;
        min-height: 9.6rem;
        margin: 1.28rem auto 0 auto;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0rem .16rem .32rem 0rem rgba(0, 0, 0, 0.1);
        border-radius: 12vw;
        overflow: hidden;
        position: relative;
        // display: grid;
        // grid-template-rows: 1fr auto;
        display: flex;
        flex-flow: row wrap;
        .img_box {
          // width: 17%;
          width: 1.6rem;
          height: 1.6rem;
          // height: 17%;
          // line-height: 50%;
          margin: 5%;
          padding: 1%;
         
          box-shadow: 0px 0px .16rem 0px rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          box-sizing: border-box;
        }
        .bg_img {
          // height: 3.2rem;
          width: 100%;
          // border-radius: 0 0 13vw 13vw;
          align-items: flex-end;
          display: flex;
          // flex-flow: row wrap;
          // position: absolute;
          // bottom: 0;
        }
        .right_img {
          // height: 55vw;
          width: 60%;
          // background: url(../assets/code/002.png) no-repeat center bottom;
          // background-size: 100%;
          position: absolute;
          vertical-align:bottom;
          right: 0;
          bottom: 0;
          border-radius: 0 0 12vw 0;
          // z-index: 1;
        }
        .left_box {
          height: 30vw;
        }
        .left_img {
          overflow: hidden;
          // height: 3.2rem;
          width: 100%;
          // background: url(../assets/code/001.png) no-repeat left bottom ;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;

          bottom: 0;
          z-index: 2;
          margin-top: .2rem;
        }
        .StockQuant_left {
          // height: 55vw;
          width: 80%;
          // background: url(../assets/code/003.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 80%;
          position: absolute;
          left: 10%;
          // transform: translate(-50%, 0%);
          bottom: -1vw;
          // left: 5%;
          z-index: 2;

        }
        .StockQuant_right {
          // min-height: 2.6rem;
          // height: 2.6rem;
          width: 100%;
          // background: url(../assets/code/004.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;
          bottom: 0vw;
          z-index: 3;
          margin-top: .2rem;
        }
        .CollectibleQuant_left {
          // height: 55vw;
          width: 60%;
          // background: url(../assets/code/005.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 60%;
          position: absolute;
          // margin: 0 auto;
          left: 20%;
          // transform: translate(-50%, 0%); 
          bottom: -1vw;
          // left: 5%;
          z-index: 2;
        }
        .CollectibleQuant_right {
          // height: 4rem;
          width: 100%;
          // background: url(../assets/code/006.png) no-repeat center bottom;
          vertical-align:bottom;
          // background-size: 100%;
          position: relative;
          align-self: flex-end;
          z-index: 3;
          margin-top: .5rem;
        }
        .HouseQuant {
          background: #FFFFFF url(../assets/HouseQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .StockQuant {
          background: #FFFFFF url(../assets/StockQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .CollectibleQuant {
          background: #FFFFFF url(../assets/CollectibleQuant.png) no-repeat center center;
          background-size: 50%;
        }
        .title {
          font-size: .40rem;
          font-family: ArialRoundedMTBold, "微软雅黑";
          color: #FFFFFF;
          line-height: .50rem;
          font-weight: 600;
          text-align: left;
          padding-left: 8%;
        }
        .content {
          width: 83%;
          font-size: 17px;
          font-family: ArialRoundedMTBold, "微软雅黑";
          color: rgba(255, 255, 255, 0.8);
          line-height: .28rem;
          color: #FFFFFF;
          margin-left: 8%;
          text-align: left;
          position: relative;
          z-index: 22;
        }
      }
    }
    .AQ {
      background: #FFFFFF;
      width: 100%;
      padding-bottom: 5.7vw;
      box-sizing: border-box;
      .title {
        font-size: .24rem;
        width: 60%;
        font-family: ArialRoundedMTBold, "微软雅黑";
        color: #333333;
        line-height: .28rem;
        margin-top: 5vw;
        margin-left: 2.5vw;
        text-align: left;
        float: left;
      }
      .Q_title {
        margin-left: 15%;
        float: none;
      }
      .AQ_title {
        margin-left: 12.5%;
        margin-top: 12.5vw;
        font-size: .40rem;
        line-height: .50rem;
        font-family: ArialRoundedMTBold, "微软雅黑";
        color: #333333;
        text-align: left;
        font-weight: 600;
      }
      .AQ_item {
        overflow: hidden;
        .img {
          width: 12.5%;
          height: 12.5vw;
          margin-left: 12.5%;
          margin-top: 3vw;
          float: left;
         
        }
        .lock {
          background: #FFFFFF url(../assets/image/lock.png) no-repeat center center;
         
          background-size: 50%;
        }
        .pie_chart {
          background: #FFFFFF url(../assets/image/pie_chart.png) no-repeat center center;
          background-size: 50%;
        }
        .server {
          background: #FFFFFF url(../assets/image/server.png) no-repeat center center;
          background-size: 50%;
        }
        .AQ_content {
          // float: left;
          
          .content {
            margin-top: 1.4vw;
            margin-left: 2.5vw;
            width: 60%;
            font-size: .14rem;
            font-family: ArialRoundedMTBold, "微软雅黑";
            text-align: left;
            color: #666666;
            line-height: .18rem;
            float: left;
          }
        }
        .whoQ {
          margin-left: 12.5%;
          .content {
            width: 75%!important;
          }
        }
      }
      .Q_img {
        width: 100%;
        height: 8.8vw;
        padding: 1.9vw 13.6%;
        overflow: hidden;
        box-sizing: border-box;
        .item {
          width: 24.4%;
          height: 100%;
          
          float: left;
          margin: 0 0.17%;
        }
        .baidu {
          background: url(../assets/image/baidu.png) no-repeat center center;
          background-size: 85%;
        }
        .ali {
          background: url(../assets/image/ali.png) no-repeat center center;
          background-size: 85%;
        }
        .ten {
          background: url(../assets/image/ten.png) no-repeat center center;
          background-size: 85%;
        }
        .honeywell {
          background: url(../assets/image/honeywell.png) no-repeat center center;
          background-size: 85%;
        }
        .zhong {
          background: url(../assets/image/zhong.png) no-repeat center center;
          background-size: 65%;
        }
        .kin {
          background: url(../assets/image/kin.png) no-repeat center center;
          background-size: 85%;
        }
        .qing {
          background: url(../assets/image/qing.png) no-repeat center center;
          background-size: 60%;
        }
        .hua {
          background: url(../assets/image/hua.png) no-repeat center center;
          background-size: 65%;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 3rem;
      background: #003ABCFF;
      position: relative;
      .item_box {
        position: absolute;
        width: 100%;
        bottom: 50%;
        overflow: hidden;
        padding-right: 12.5%;
        box-sizing: border-box;
        .bottom_item {
          width: 8%;
          height: 7vw;
          line-height: 7vw;
          margin-left: 3.75%;
          background: #000000FF;
          border-radius: 50%;
          float: right;
          font-size: .48rem;
          font-weight: 600;
          color: #fff;
        }
      }
      .bottom_text {
        width: 100%;
        background: #003ABCFF;
        padding-right: 0%;
        box-sizing: border-box;
        position: absolute;
        bottom: 2.3vw;
        text-align: center;
        font-size: 0.75vw;
        font-family: ArialMT, "微软雅黑";
        color: #fff;
        line-height: 1.1vw;
        span {
          margin-left: 2.5%;
        }
      }
    }
  }
</style>