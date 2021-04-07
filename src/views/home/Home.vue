<template>
  <div class="home"> 
    <div class="home-page">
      <div class="background-img">
        <img :src="backgroundurl" alt="">
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
        <div class="wellcome-myblog">
          <span @click="enterMyBlog">进入我的博客</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import SoftWare from 'components/common/software/SoftWare'

import {backgroundUrl} from 'network/background'
export default {
name:'Home',
data(){
  return {
    backgroundurl:''
  }
},
components:{
  SoftWare
  },
  methods:{
    qqClick(){
      console.log('1111111111111111111');
    },
    enterMyBlog(){
      this.$router.replace('/article')
    }
  },
  created(){
    backgroundUrl().then(res => {
      console.log(res);
      this.backgroundurl = res.picurl;
    })
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
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.background-img {
  width: 100%;
  height: 100%;
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
.wellcome-myblog {
  display: none;
  margin-top: 30px;
  color: transparent;
  line-height: 30px;
  text-align: center;
}
.wellcome-myblog span {
  display: inline-block;
  width: 120px;
  height: 30px;
  color: #f3f3f3;
  border-radius: 50px;
  background-color: #1A73E8;
}
@media screen  and (min-width:768px){
.background-img img {
  width: 100%;
}
}
@media screen  and (max-width:768px){
  .myhead {
    top: 15%;
  }
 .myname {
  font-size: .3rem ;
  }
.quotes {
  font-size: 0.4rem;
}
.myhead img {
  width: 3.25rem;
  height: 3.25rem;
  }
  .wellcome-myblog{
    display: block;
    font-size: .4rem;
  }
}
@media screen and (max-width:450px) {
   .myname {
     padding-top: 1.8rem  ;
     font-size: .5rem ;
   }
   .quotes {
    padding-bottom: 1rem ;
  }
}
</style>