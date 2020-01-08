<template>
  <div class="login">
    <div class="thirdPage">

      <div class="sale_num bounceInDown">百万销量</div>

      <div class="third-box bounceInDown">
        <p class="name">{{name}}</p>
        <p class="mubiao">2020年销售目标</p>
        <p class="txt">预计<span class="number_txt">{{sale}}</span><sub class="upper">台</sub></p>

      </div>


      <!--<div class="third-box bounceInDown">-->
           <!--<img src="../../assets/mubioa.png" alt="" style="width:100%;">-->
      <!--</div>-->
      <!--<div class="mask-box bounceInDown">-->
        <!--<div class="mask-box-half">-->
          <!--<div class="name">{{name}}</div>-->
          <!--<div class="txt n1"><span class="number_txt">{{sale}}</span></div>-->
          <!--<div class="txt n2"><span class="number_txt">{{income}}</span></div>-->
        <!--</div>-->

      <!--</div>-->
      <div class="hudong bounceInDown" @click="goGame">互动一下</div>

    </div>

  </div>
</template>

<script>
  import {fhInfoSumit} from '../../api/api'
  export default {
    name: "login",
    data(){
      return{
          code:this.$route.query.code,
        name:'',
        sale:0,
        income:0
      }

    },
    mounted(){

        this.$toast.loading({
          duration:0,
          title:'loading'
        })
      fhInfoSumit(this.code).then(res=>{
          this.$toast.clear();
          if(res.data){
             this.name=res.data.data.name;
            this.sale=res.data.data.sale.toLocaleString();
            this.income=res.data.data.income.toLocaleString();
          }
        }).catch()
    },
    methods: {
      goGame(){
        this.$router.push('/game');
      }
    }
  }
</script>

<style scoped>
  .login{
    background: url("../../assets/bg.jpeg") no-repeat center center;
    /*background-size: 100%;*/
    background-attachment: fixed;
    background-size: 100% 100%;
    height:100%;
  }
  .thirdPage{
    height: 100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    overflow: hidden;
  }
  .third-box{

    width:640px;
    background:rgba(0,0,0,0.6);
    border-radius:30px;
    text-align: center;
    padding:30px 30px 40px;
    /*width:100%;*/
    /*position: relative;*/
  }
  .hudong{
    font-size:40px;
    color:#FFFF99;
    margin-top:50px;
    font-style: italic;
    display: flex;
    border:1px solid #FFFF99;
    padding:10px 20px;
    border-radius: 5px;
  }

  .mask-box{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .mask-box-half{
    width:690px;
    height:800px;
  }
  .n1{
    margin-top:45px;
  }
  .n2{
    margin-top:120px;
  }
  .name{
    font-size:50px;
    color:#FFFF99;
    margin-bottom:35px;
    /*margin-top: 290px;*/
    /*font-weight: 600;*/
  }
  .mubiao{
    font-size:60px;
    /* color:rgba(234, 101, 10, 1); */
    color:#FFFF99;
    margin-top:50px;
    margin-bottom:45px;
  }
  .number_txt{
      font-weight:600;
      font-size:90px;
      font-style:italic;
  }
  .txt{
    font-size:50px;
    font-weight:400;
    /* color:#333; */
    color:#FFFF99;
    margin-bottom:20px;
  }
  .sale_num{
    font-size:80px;
    font-weight:400;
    color:#FFFF99;
    margin-bottom:50px;
  }

  @-webkit-keyframes bounceInDown {
    /*0%,100%,60%,75%,90% {*/
      /*-webkit-transition-timing-function: cubic-bezier(0.215,.61,.355,1);*/
      /*transition-timing-function: cubic-bezier(0.215,.61,.355,1)*/
    /*}*/

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,-3000px,0);
      transform: translate3d(0,-3000px,0)
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0,25px,0);
      transform: translate3d(0,25px,0)
    }

    75% {
      -webkit-transform: translate3d(0,-10px,0);
      transform: translate3d(0,-10px,0)
    }

    90% {
      -webkit-transform: translate3d(0,5px,0);
      transform: translate3d(0,5px,0)
    }

    100% {
      -webkit-transform: none;
      transform: none
    }
  }

  @keyframes bounceInDown {
    /*0%,100%,60%,75%,90% {*/
      /*-webkit-transition-timing-function: cubic-bezier(0.215,.61,.355,1);*/
      /*transition-timing-function: cubic-bezier(0.215,.61,.355,1)*/
    /*}*/

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0,-3000px,0);
      -ms-transform: translate3d(0,-3000px,0);
      transform: translate3d(0,-3000px,0)
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0,25px,0);
      -ms-transform: translate3d(0,25px,0);
      transform: translate3d(0,25px,0)
    }

    75% {
      -webkit-transform: translate3d(0,-10px,0);
      -ms-transform: translate3d(0,-10px,0);
      transform: translate3d(0,-10px,0)
    }

    90% {
      -webkit-transform: translate3d(0,5px,0);
      -ms-transform: translate3d(0,5px,0);
      transform: translate3d(0,5px,0)
    }

    100% {
      -webkit-transform: none;
      -ms-transform: none;
      transform: none
    }
  }

  .bounceInDown {
    /*-webkit-animation-name: bounceInDown;*/
    /*animation-name: bounceInDown*/
    animation: bounceInDown 1s linear;
  }

  .upper{
    margin-left:10px;
  }
</style>
