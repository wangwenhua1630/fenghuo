<template>
  <div class="secondPage">
    <div class="input-box login_fields__user">
        <div class="icon">
            <img src="../../assets/key.png" alt="">
        </div>
      <input type="text" value="" v-model="code" placeholder="请输入经销店代码" class="one_input" @blur="onBlur">
    </div>
    <!--<div>-->
      <!--<input type="text" value="" v-model="code" placeholder="请输入经销店代码" class="login_input input2">-->
    <!--</div>-->
    <!--<div>-->
      <!--<input type="text" value="" v-model="name" placeholder="请输入经销店简称" class="login_input input2">-->
    <!--</div>-->
    <!--<div>-->
      <!--<input type="text" value="" v-model="user_name" placeholder="请输入聚力人姓名" class="login_input input2">-->
    <!--</div>-->
    <button id="search" @click="next"  class="btn search">为百万聚力</button>
  </div>
</template>

<script>
  import {fhInfoSumit} from '../../api/api'
  export default {
    name: "login",
    data(){
      return{
        code:'',
        name:'',
        user_name:'',
      }

    },
    mounted(){

//        this.$toast.loading({
//          duration:0,
//          title:'loading'
//        })
//        relogin().then(res=>{
//          this.$toast.clear();
//          if(res.data.flag){
//            this.$router.push('/home')
//          }
//        }).catch()
    },
    methods: {
      next(){
        this.$toast.loading({
          duration:0,
          title:'loading...'
        })
        if(this.code==''){
          this.$toast('请输入经销店代码')
        }else{
          this.$toast.clear();
          fhInfoSumit(this.code).then(res=>{
              console.log(res);
              if(res.data.code){
                if(res.data.data.is_fenghuo==1){
                  this.$router.push({
                    path:'/game',
                    query:{
                      code:this.code
                    }
                  });
                }else {
                  this.$toast('请仔细核对填写信息')
                }
              }else{
                this.$toast('请仔细核对填写信息')
              }
          }).catch()
        }

      },
      onBlur(){
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped>
  .secondPage{
    background: url("../../assets/bg.jpeg") no-repeat center center;
    /*background-size: 100%;*/
    background-attachment: fixed;
    background-size: 100% 100%;
    height:100%;
    /* display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }
  .input-box{
    width:690px;
    padding:15px 0;
    background: rgba(255,255,255,0.3);
    border-radius: 10px;
    position: absolute;
    top:40%;
    left: 50%;
    margin-left:-345px;

  }
  .login_fields__user{
      position: relative;
  }
  .login_fields__user .icon{
      position: absolute;
    z-index: 1;
    left: 60px;
    top: 50%;
    margin-top:-20px;
    opacity: .5;
  }
  .login_fields__user .icon>img{
      width:40px;
      height:40px;
  }
  .one_input{
    width: 470px;
    height:60px;
    background: rgba(57, 61, 82, 0);
    padding: 10px 65px;
    border-top: 2px solid rgba(57, 61, 82, 0);
    border-bottom: 2px solid rgba(57, 61, 82, 0);
    border-right: none;
    border-left: none;
    outline: none;
    font-family: 'Gudea', sans-serif;
    box-shadow: none;
    color:#fff;
    font-size:30px;
  }
  .img_header{
    width:665px;
    height:378px;
    margin:48px auto 0;
  }
  .imgUp{
    width:507px;
    height:186px;
    /*border:1px solid #d8d8d8; !*no*!*/
    border-radius:30px;
    overflow: hidden;
    margin:75px auto 0;
    background: #ECEEFE;
    display:flex;
    justify-content: flex-start;
    align-items: center;
  }
  .imgBox{
    width:137px;
    height:140px;
    border-radius: 30px;
    background: #2B085E;
    margin-left:30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgTou{
    width:137px;
    height:140px;
    border-radius: 30px;
  }
  .userImg{
    width:99px;
    height:99px;
    border-radius: 50%;
  }
  .imgTxt{
    font-size:30px;
    font-weight:400;
    color:rgba(43,8,94,1);
    text-align: left;
    margin-left:42px;
  }
  .login_input{
    width:470px;
    height:80px;
    /*background:rgba(236,238,254,1);*/
    border-radius:10px;
    padding-left:37px;
    margin:60px auto 40px;
    font-size:32px;
    font-weight:400;
    border:none;
    color:#333;
    border-bottom: 2px solid rgb(255, 224, 128);
  }
  .input2{
    margin:40px auto 69px;
  }
  .submit{
    width:230px;
    height:80px;
    background:rgba(238,240,255,1);
    border-radius:30px;
    text-align: center;
    line-height: 80px;
    border:none;
    font-size:32px;
    font-weight:400;
    color:rgba(43,8,94,1);
    margin-bottom:60px;
  }
  input::-webkit-input-placeholder{
    color:#fff;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#fff;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#fff;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#fff;
  }

  .btn {
    width: 530px;
    height: 70px;
    /*line-height: 0;*/
    /*border: 2px solid #fff;*/
    /*background: rgb(255, 224, 128);*/
    /* background:linear-gradient(315deg,rgba(150,102,20,1) 0%,rgba(246,193,1) 100%); */
    background: rgba(0,0,0,0);
    border:2px solid rgb(252, 215, 152);
    margin: 22px 0 0 17px;
    border-radius: 37px;
    -webkit-border-radius: 37px;
    -o-border-radius: 37px;
    -moz-border-radius: 37px;
    font-family: 微软雅黑;
    color:rgb(252, 215, 152);
    font-size:30px;
    /* border:none; */
    position: absolute;
    bottom:150px;
    left:50%;
    margin-left:-265px;
  }
  #search{
    animation: breathe 1.1s infinite;
  }
  @keyframes breathe{
    0%{ transform: scale(.99); }
    50%{ transform: scale(1.03); }
    100%{ transform: scale(.99); }
  }

</style>
