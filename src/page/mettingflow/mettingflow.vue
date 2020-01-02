<template>
    <div class="mettingflow">
      <img src="../../assets/header2.png" alt="" class="img_header2">
      <div class="timeChange">
        <div class="timeChange_item" :class="flag==index?'active':''" @click="change(index)" v-for="(item,index) in lists">{{item.time}}</div>
        <!--<div class="timeChange_item" :class="flag==2?'active':''" @click="change(2)">2019-01-17</div>-->
        <!--<div class="timeChange_item" :class="flag==3?'active':''" @click="change(3)">2109-01-18</div>-->
      </div>
      <div class="flow_list"  v-if="mettingData.length!=0">
        <div class="flow_item" v-for="item in mettingData" @click="godetail(item.department,item.id,item.beginAt,item.status)">
          <div class="flow_item_time">
            <div class="flow_item_date">
              <div class="d_dian"></div>
              <div class="d2">{{item.beginAt.slice(0,10)}}</div>
              <div class="d3">{{item.beginAt.slice(10,-3)}} - {{item.endAt.slice(11,-3)}}</div>
            </div>
          </div>
          <div class="flow_item_topic" v-html="item.name"></div>
          <div class="flow_item_name" v-if="item.presenter">{{item.presenter}} </div>
          <div class="flow_item_info">
            Room: {{item.address}}
            <img src="../../assets/link.png" alt="" class="flow_link" v-if="item.department&&item.status==1">
          </div>
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
  import {dahui} from '../../api/api'
    export default {
        name: "mettingflow",
      data(){
          return{
            flag:0,
            lists:'',
            mettingData:[]
          }
      },
      mounted(){
          if(sessionStorage.flag){
            this.$toast.loading({
              duration:0,
              title:'loading...'
            })
            dahui(0).then(res=>{
              console.log(res);
              this.$toast.clear()
              this.lists=res.data.data
              this.flag=sessionStorage.getItem('flag');
              this.mettingData=res.data.data[this.flag].list
            }).catch()
          }else{
            this.$toast.loading({
              duration:0,
              title:'loading...'
            })
            dahui(0).then(res=>{
              console.log(res);
              this.$toast.clear()
              this.lists=res.data.data
              this.mettingData=res.data.data[0].list
            }).catch()
          }
      },
      methods:{
        back(){
          this.$router.go(-1);
        },
          change(index){
            this.flag=index;
            this.mettingData=this.lists[index].list
          },
        godetail(index,id,times,status){
            console.log(index);
            if(index==1){
              this.$router.push({name:'agendaps',params:{ids:id,time:times}})
              sessionStorage.setItem('flag',this.flag)
            }else if(index==2&&status==1){
              this.$router.push('/huiflow')
              sessionStorage.setItem('flag',this.flag)
            }else if(index==3&&status==1){
              this.$router.push('/teambuilding')
              sessionStorage.setItem('flag',this.flag)
            }else if(index==4&&status==1){
              this.$router.push('/galadinner')
              sessionStorage.setItem('flag',this.flag)
            }
        }
      }
    }
</script>

<style scoped>
  .mettingflow{
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
}
  .timeChange_item{
    width:213px;
    font-size:28px;
    font-weight:500;
    color:rgba(43,8,94,1);
  }
.timeChange_item2{
  width:214px;
  font-size:28px;
  font-weight:500;
  color:rgba(43,8,94,1);
}
  .active{
    background:rgba(33,184,206,1);
    color:#fff;
    height:84px;
    line-height:84px;
  }
  .flow_list{
    width:520px;
    border-radius: 30px;
    background: #EEF0FF;
    padding:60px;
    margin:0 auto 90px;
  }
  .flow_item{
    width:100%;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom:60px;
    padding-bottom:15px;
    border-bottom: 1px solid #645687;/*no*/
    position: relative;
  }
  .flow_item_time{
    font-size:30px;
    font-weight:500;
    color:rgba(43,8,94,1);
    margin-bottom:25px;
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
    font-size:28px;
    font-weight:400;
    color:rgba(100,86,135,1);
    text-align: left;
    padding-left:12px;
    width:90%;
    position: relative;
  }
  .flow_link{
    width:42px;
    height:42px;
    position: absolute;
    right:-60px;
    top:0px;
  }
</style>
