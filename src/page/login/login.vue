<template>
    <div class="login">
      <div class="first"  @click="goNext">
          <div class="rubberBand">
              <img src="../../assets/topic.png" alt="" class="topic-img">
          </div>
          
      </div>

    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return{

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
        goNext(){
          this.$router.push('/home');
        }
      }
    }
</script>

<style scoped>
.login{
  background: url("../../assets/bg.jpg") no-repeat center center;
  /*background-size: 100%;*/
  background-attachment: fixed;
  background-size: 100% 100%;
  height:100%;
}
.first{
  height:100%;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.topic-img{
    width:690px;
    /* margin:100px auto 0; */
}

@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(.95, 1.05, 1);
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, .95, 1);
    transform: scale3d(1.05, .95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.rubberBand {
  /* -webkit-animation-name: rubberBand;
  animation-name: rubberBand; */
  animation: zoomIn 0.5s linear;
}
</style>
