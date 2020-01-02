<template>
  <div class="agendaps">
    <img src="../../assets/header2.png" alt="" class="img_header2">
    <div class="timeChange">
      {{times}}
      <!--<div class="timeChange_item" :class="flag==index?'active':''" @click="change(index)" v-for="(item,index) in lists">{{item.time}}</div>-->
    </div>
    <div class="flow_list" v-if="lists.length!=0">
      <div class="flow_item" v-for="item in lists">
        <div class="flow_item_time">
          <div class="flow_item_date">
            <div class="d_dian"></div>
            <div class="d2">{{item.beginAt.slice(0,10)}}</div>
            <div class="d3">{{item.beginAt.slice(11,-3)}} - {{item.endAt.slice(11,-3)}}</div>
          </div>
          <!--{{item.beginAt.slice(11,-3)}} - {{item.endAt.slice(11,-3)}}-->
        </div>
        <div class="flow_item_topic">{{item.name}}</div>
        <div class="flow_item_name">{{item.presenter}}</div>
      </div>
    </div>
    <div class="no_contents" v-else>
      <img src="../../assets/nothing.png" alt="" class="no_c_img">
      <span class="no_c_txt">No Contents</span>
    </div>
    <button class="back" @click="back">Back</button>
  </div>
</template>

<script>
  import {pssession} from '../../api/api'
  export default {
    name: "mysession",
    data(){
      return{
        lists:'',
        times:''
      }
    },
    created(){
      // console.log(this.$route.params.time)
      this.times=this.$route.params.time.slice(0,10);
    },
    mounted(){
      this.$toast.loading({
        duration:0,
        title:'loading...'
      })
      pssession(this.$route.params.ids).then(res=>{
        this.$toast.clear();
        if(res.data.flag){
          this.lists=res.data.data
        }else{
          this.$toast(res.data.message)
        }
      }).catch()
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
    }

  }
</script>

<style scoped>
  .agendaps{
    height:100%;
    overflow-y: auto;
  }
  .timeChange{
    width:640px;
    height:84px;
    background: #EEF0FF;
    border-radius: 30px;
    overflow: hidden;
    margin:57px auto 40px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:28px;
  }
  .flow_list{
    width:520px;
    border-radius: 30px;
    background: #EEF0FF;
    padding:60px;
    margin:65px auto 90px;
  }
  .flow_item{
    width:100%;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom:60px;
    padding-bottom:15px;
  }
  .flow_item:last-child{
    margin-bottom: 0;
  }
  .flow_item_time{
    width:100%;
    font-size:34px;
    font-weight:500;
    color:rgba(43,8,94,1);
    margin-bottom:25px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  .flow_item_date{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    font-size:24px;
  }
  .d_dian{
    width:11px;
    height:11px;
    background:rgba(100,86,135,1);
    border-radius:50%;
    margin-right:14px;
  }
  .d2{
    margin-right:30px;
  }
  .flow_item_name{
    width:90%;
    font-size:28px;
    font-weight:400;
    color:rgba(100,86,135,1);
    text-align: left;
    margin-bottom:25px;
    /*text-decoration: underline;*/
    padding-left:12px;
  }
  .flow_item_topic{
    padding:5px 15px;
    background:rgba(245,48,139,1);
    border-radius:20px;
    font-size:28px;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-bottom:23px;
    text-align: left;
    width:90%;
  }
  .flow_item_info{
    font-size:24px;
    font-weight:400;
    color:#2B085E;
    text-align: left;
    padding-left:12px;
    width:100%;
  }

</style>
