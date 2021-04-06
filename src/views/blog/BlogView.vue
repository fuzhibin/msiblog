<template>
  <div>
    <div class="blog-view" >
      <h3>{{title}}</h3>
      <div class="article-img-view">
        <img :src="coverImg" alt="" >
      </div>
      <div class="share-box">
        <span>分享到:</span>
        <soft-ware class="share" @qqClic="qqClick"/>
        <div class="labels">标签:<span v-for="label in labels" :key="label.id">{{label.label}}</span></div>
      </div>
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import {getEssayDetail} from 'network/essay.js'
import SoftWare from 'components/common/software/SoftWare'
export default {
  data () {
    return {
        content:'',
        title:'',
        coverImg:'',
        labels:[]
    }
  },
  components:{
    SoftWare
  },
  created(){
    getEssayDetail(this.$route.query.articleId,false).then(res =>{
      this.title = res.title;
      this.coverImg = res. coverimgUrl;
      this.content = res.message;
      this.labels.push(...res.labels);
    })
  },
  methods:{
    qqClick(){

    }
  }
}
</script>

<style scoped>
.share-box{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.share-box span {

}
.labels{
  margin-left: auto;
}
.labels span {
  color: #FD7831;
    background-color: #FCCAF2;
    padding: 5px;
    margin-left: 5px;
    border-radius: 5px;
}
.share {
  justify-content: flex-start;
  font-size: .14rem !important;
  margin-bottom: 0;
}
.blog-view {
    margin: 55px auto;
    width: 80%;
    height: 100vh;
    font-size: .1rem;
}
 h3{
   text-align: center;
   margin-bottom: 5px;
 }
 .article-img-view {
   display: none;
margin-bottom: 5px;
 }
@media screen and (max-width:450px){
  .blog-view{
    width: 95%;
     font-size: .15rem;
  }
  .article-img-view {
    display: block;
    text-align: center;
    height: 120px;
  }
  .article-img-view img{
    border-radius: 15px;
   width: 95%;
   
   height: 120px;
 } 
}
</style>
