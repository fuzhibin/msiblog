<template>
<div class="essay-item">
 <div class="img-box" @click="essayClic">
    <img :src="essayInfo.coverimgUrl" alt="" />
    <div class="backdrop">
      文章
    </div>
 </div>
 <div class="essay-title">{{essayInfo.title}}</div>
</div>
</template>
<script>
export default {
  props:{
   essayInfo:{
     type:Object,
     default(){
       return {}
     }
   }
  },
  data () {
    return {
    }
  },
  methods:{
    essayClic(){
      console.log(this.essayInfo.id);
      this.$router.replace({
        path:'/blogview',
        query:{
          articleId:this.essayInfo.id
        }
      });
    }
  }
}
</script>

<style scoped>
.essay-item {
    width: 100%;
    height: 1.5rem;
    margin-bottom: .5rem;
}
.img-box {
  position: relative;
  width: 92%;
  height: 1.2rem;
  margin: auto;
  text-align: center;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.img-box:hover .backdrop{
 transform: translateY(0);
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0; 
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: .1rem;
  justify-content: center;
  transform: translateY(-100%);
  background-color:rgba(0, 0, 0, .5);
  transition: all .5s ease-in-out;
}
.essay-title {
  text-align: center;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: .10rem;
  color: #000;
}
@media screen and (min-width:450px) and (max-width:768px) {
  .essay-item{
    height: 4rem;
  }
  .img-box{
    height: 3rem;
  }
   .essay-title {
    font-size: .25rem ;
  }
}
@media screen and (max-width:450px){
  .essay-item{
    height: 5rem;
  }
  .img-box{
    height: 4.5rem;
    
  }
  
  .essay-title {
    font-size: .4rem ;
  }
}
</style>
