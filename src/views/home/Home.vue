<template>
  <div class="home"> 
    <div class="home-page">
      <div class="background-img">
        <img src="~assets/imgs/background.jpg" alt="">
      </div> 
      <div class="myhead">
        <img src="~assets/imgs/myhead.jpg" alt=""> 
         <div class="myname">
          该吃饭了
        </div>
        <div class="quotes">
          海日生残夜，江春入旧年。
        </div>
        <soft-ware @qqClic="qqClick" class="soft-ware"/>
      </div>
      
    </div>
  </div>
</template>
<script>
import SoftWare from 'components/common/software/SoftWare'
import  Velocity from 'velocity-animate'
export default {
name:'Home',
components:{
  SoftWare
  },
  methods:{
    qqClick(){
      console.log('1111111111111111111');

    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  overflow: hidden;
}
.home-page {
  position: relative;
  
  width: 100%;
  overflow: hidden;
}
.background-img {
  width: 100%;
  overflow: hidden;
}
.background-img img {
  height: 100%;
}
.myhead {
  position: absolute;
  top: 8%;
  width: 100%;
  text-align: center;
   color: #fff;
}

.myhead img:hover{
  transform: rotate(360deg);
}
.myhead img {
  border-radius: 50%;
   width: 2rem;
   height: 2rem;
  border: 5px solid #f3f3f3;
  transition: all 1s ease-in-out;
  box-shadow: 0,0,5px,5px,rgba(0, 0, 0, .05);
}

 .myname {
  font-size: .13rem;
  margin: .45rem 0 .3rem;
  font-weight: 600;
}
.quotes {
  margin-bottom: .3rem;
}
 .quotes {
  font-size: 0.2rem;
  font-weight: 600;
}
.soft-ware {
  padding-top: 10px;
  justify-content: center;
}
@media screen  and (max-width:768px){
  .myhead {
    top: 15%;
  }
  
 .myname {
  font-size: .3rem !important;
  }
.quotes {
  font-size: 0.4rem !important;
}
.myhead img {
  width: 3.25rem;
  height: 3.25rem;
  }
}
@media screen and (max-width:450px) {

   .myname {
     padding-top: 1.8rem  !important;
     font-size: .5rem !important;
   }
   .quotes {
    padding-bottom: 1rem !important;
  }
}
</style>