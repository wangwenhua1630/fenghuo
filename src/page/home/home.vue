<template>
  <div class="secondPage">

    <div>
      <input type="text" value="" v-model="code" placeholder="请输入经销店代码" class="login_input input2">
    </div>
    <div>
      <input type="text" value="" v-model="name" placeholder="请输入经销店简称" class="login_input input2">
    </div>
    <div>
      <input type="text" value="" v-model="user_name" placeholder="请输入聚力人姓名" class="login_input input2">
    </div>
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
        } else if(this.name==""){
          this.$toast('请输入经销店简称')
        }else if(this.user_name==""){
          this.$toast('请输入聚力人姓名')
        }else{
          this.$toast.clear();
          fhInfoSumit(this.code,this.name,this.user_name).then(res=>{
              console.log(res);
              if(res.data.code){
                this.$router.push({
                  path:'/thirdPage',
                  query:{
                    code:this.code
                  }
                });
              }else{
                this.$toast('请输入正确的经销店代码')
              }
          }).catch()
        }

      }
    }
  }
</script>

<style scoped>
  .secondPage{
    background: url("../../assets/bg.jpg") no-repeat center center;
    /*background-size: 100%;*/
    background-attachment: fixed;
    background-size: 100% 100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    background:rgba(236,238,254,1);
    border-radius:10px;
    padding-left:37px;
    margin:60px auto 40px;
    font-size:32px;
    font-weight:400;
    /*color:rgba(43,8,94,1);*/
    border:none;
    color:#333;
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
    color:#666;
  }
  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#666;
  }
  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#666;
  }
  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#666;
  }

  .btn {
    width: 383px;
    height: 70px;line-height: 0;
    border: 2px solid #fff;
    background: #8E6735;
    margin: 22px 0 0 17px;
    border-radius: 37px;
    -webkit-border-radius: 37px;
    -o-border-radius: 37px;
    -moz-border-radius: 37px;
    text-shadow: 3px 2px #8E6735;
    -webkit-text-shadow: 3px 2px #8E6735;
    -o-text-shadow: 3px 2px #8E6735;
    -moz-text-shadow: 3px 2px #8E6735;
    font-family: 微软雅黑;
    color:#fff;
    font-size:30px;
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
