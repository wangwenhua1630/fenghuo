<template>
  <div class="game">
    <div class="time">
      <div class="progress"></div>
      <div class="timer">{{num}}</div>
    </div>
    <div class="dram"></div>
    <div class="hammer1" :class="`${startFlag?'':'hammer3'} ${startFlag?'':dongFlag?'hammer5':'hammer6'}`"> </div>
    <div class="hammer2" :class="`${startFlag?'':'hammer4'} ${startFlag?'':dongFlag?'hammer7':'hammer8'}`"> </div>
    <div class="start" v-if="startFlag" @click="start"></div>
    <div class="tip" v-if="startFlag" ></div>
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
        num:0
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
            clearInterval(timer);
          }
          $('.progress').css('width', (1 - max / 250) * parseFloat(oW));

        }, 20)

        document.addEventListener('touchstart', function () {
          if (max > 250) {
            event.preventDefault()
          }else{
            self.num++;
            self.dongFlag=false;
          }

        })

        document.addEventListener('touchend', function () {
          self.dongFlag=true;
        })

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
</style>
