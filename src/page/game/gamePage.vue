<template>
  <div class="game">
    <div class="time">
      <div class="progress"></div>
      <div class="timer">{{num}}</div>
    </div>
    <div v-show="shineShow" class="shine" :class="shineFlag?'shine1':''"></div>
    <div class="dram"></div>
    <div class="hammer1" :class="`${startFlag?'':'hammer3'} ${startFlag?'':dongFlag?'hammer5':'hammer6'}`"> </div>
    <div class="hammer2" :class="`${startFlag?'':'hammer4'} ${startFlag?'':dongFlag?'hammer7':'hammer8'}`"> </div>
    <div class="start" v-if="startFlag" @click="start"></div>
    <div class="tip" v-if="startFlag" ></div>

    <div class="mask" v-if="flag">
      <div class="zan zan1"></div>
      <p class="fenghuo_txt">我为丰火助力<span class="fenghuo_num">{{num}}</span>台</p>
      <img src="../../assets/back.png" class="game_back" @click="goHome"/>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "login",
    data(){
      return{
        startFlag:true,
        dongFlag:true,
        shineFlag:false,
        shineShow:false,
        num:0,
        flag:false
      }

    },
    mounted(){

    },
    methods: {
        start(){
          this.startFlag=false;
          this.beat();
        },
      beat() {
        var self=this;
        var timer = null;
        var max = 0;
        var oW=$('.progress').css('width');

        timer = setInterval(function () {
          max++;
          if (max > 250) {
            self.shineShow=false;
            self.flag=true;
            clearInterval(timer);
          }else{
            self.shineShow=true;
            $('.progress').css('width', (1 - max / 250) * parseFloat(oW));
          }


        }, 20)

        document.addEventListener('touchstart', function () {
          if (max > 250) {
//            event.preventDefault()
          }else{
            self.num++;
            self.dongFlag=false;
            self.shineFlag=true;
          }

        })

        document.addEventListener('touchend', function () {
          self.dongFlag=true;

          self.shineFlag=false;
        })

      },
      goHome(){
          this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .game{
    background: url("../../assets/game_bg.jpg") no-repeat center center;
    background-attachment: fixed;
    background-size: 100% 100%;
    height:100%;
    position: relative;
    overflow: hidden;
  }

  .game>div{
    position: absolute;
  }
  .dram{
    background: url(../../assets/game_icon3.png);
    width: 750px;
    height:820px;
    background-size: 100% 100%;
    bottom: -50px;
    left: 0;
  }
  .time{
    width: 750px;
    background: url(../../assets/game_icon1.png);
    height: 328px;
    top: 0;
    left: 0;
    background-size: 100% 100%;
  }
  .progress{
    background: url(../../assets/game_icon2.png);
    width: 584px;
    height: 32px;
    top: 42px;
    left: 98px;
    position: absolute;
    background-size: cover;
    z-index: 10;
  }
  .timer{
    color: #fff;
    text-align: center;
    position: absolute;
    top: 75px;
    width: 100%;
    font-size: 90px;
    padding-left:25px;
  }
  .hammer1{
    background: url(../../assets/game_icon5.png);
    width: 451px;
    height: 526px;
    background-size: 100% 100%;
    left: -250px;
    bottom: -180px;
  }
  .hammer2{
    background: url(../../assets/game_icon5.png);
    width: 451px;
    height: 526px;
    background-size: 100% 100%;
    right: -250px;
    bottom: -180px;
    transform: scaleX(-1);
  }
  .hammer3{left: -130px;bottom: -70px;}
  .hammer4{right: -130px;bottom: -70px;}

  .hammer5{
    transform:scaleX(0.8) scaleY(0.8);
  }
  .hammer6{
    transform:scaleX(1) scaleY(1);
  }
  .hammer7{
    transform: scaleX(-0.8) scaleY(0.8);
  }
  .hammer8{
    transform: scaleX(-1) scaleY(1);
  }
  .start{
    background: url(../../assets/game_icon6.png);
    width: 263px;
    height: 82px;
    background-size: 100% 100%;
    left: 243px;
    bottom: 180px;
  }
  .tip{
    background: url(../../assets/game_icon7.png);
    width: 261px;
    height: 119px;
    bottom: 350px;
    background-size: 100% 100%;
    left: 245px;
  }
  .shine{
    width: 750px;
    background: url(../../assets/game_icon8.png);
    height: 675px;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    top:120px;
  }
  .shine1{animation: 1s op linear infinite;-webkit-animation: 1s op linear infinite;}

  .mask{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,.6);
    display:flex;
    /*justify-content: center;*/
    align-items: center;
    flex-direction: column;
  }
  .fenghuo_txt{
    font-size: 50px;
    line-height: 130px;
    text-align: center;
    color: #fc6;
  }
  .fenghuo_num{
    color: #fe6533;
    padding: 20px;
    font-size: 75px;
    font-style: italic;
  }
  .zan{
    background: url(../../assets/game_icon9.png);
    width: 326px;
    height: 271px;
    background-size: cover;
    margin-top: 230px;
    margin-bottom: 10px;
  }
  .zan1{animation: 1.2s big_s linear infinite;-webkit-animation: 1.5s big_s linear infinite;}

  .game_back{
    width:80px;
    height:80px;
    margin-top:50px;
    color: #fc6;
  }
  @keyframes op {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes op {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes big_s {
    0%{
      transform: scale(1.2);
    }
    50%{
      transform: scale(.6);
    }
    100% {
      transform: scale(1.2);
    }
  }
  @-webkit-keyframes big_s {
    0%{
      -webkit-transform: scale(1.2);
    }
    50%{
      -webkit-transform: scale(.6);
    }
    100% {
      -webkit-transform: scale(1.2);
    }
  }
</style>
