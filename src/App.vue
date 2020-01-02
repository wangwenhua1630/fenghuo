<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./common/font/font.css";
  html,body{
    height: 100%;
    user-select: none;
  }
  body{
    /*background: url("assets/bg.png") no-repeat top center;*/
    /*background-size: 100%;*/
    /*background-attachment: fixed;*/
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /*font-family: Merck;*/
  /*background: #2b085e;*/
  /*background: url("assets/bg.png") repeat-y center center;*/
  /*background: url("assets/bg.png") no-repeat top center;*/
  /*background-size: 100%;*/
  /*background-attachment: fixed;*/
}
  .img_header{
    width:665px;
    height:378px;
    margin:48px auto 0;
  }
  .img_header2{
    width:665px;
    height:40px;
    margin:48px auto 0;
  }
  .img_header3{
    width:600px;
    height:400px;
    margin:40px auto 0;
  }
  .no_contents{
    width:640px;
    height:800px;
    margin:40px auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:rgba(238,240,255,1);
    border-radius:30px;
  }
  .no_c_img{
    width:300px;
    height:300px;
  }
  .no_c_txt{
    font-size:28px;
    font-weight:400;
    color:rgba(183,183,183,1);
    margin-top:20px;
  }
  .van-picker-column{
    width:100%;
    font-size:36px;
  }
  .van-picker-column__item{
    font-size:36px;
  }
  .van-picker__frame{

  }
  .van-picker__toolbar{
    height:80px;
    line-height:80px;

  }
  .van-picker__cancel,.van-picker__confirm{
    font-size:36px;
  }
  #app .van-notice-bar{
    width:670px;
    height:60px;
    margin:50px auto 0;
    font-size:24px;
    border-radius: 30px;
    background: rgba(255,255,255,.8);
  }
  #app .van-icon{
    font-size:36px;
    color: #2c3e50;
  }
 #app .van-notice-bar__wrap{
    height:60px;
    line-height: 60px;
    margin-left:15px;
    color: #666;
   background: rgba(255,255,255,0);
  }
  .back{
    width:100%;
    height:80px;
    line-height: 80px;
    text-align: center;
    background: #fff;
    /*border-radius: 30px;*/
    /*margin:20px auto;*/
    color:rgba(43,8,94,1);
    font-size:36px;
    font-weight:600;
    border:none;
    position: fixed;
    bottom:0;
    left:0;
  }
</style>
