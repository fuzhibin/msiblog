<template>
  <div>
    <div class="blog-view" >
      <h3>{{title}}</h3>
      <div class="article-img-view">
        <img :src="coverImg" alt="" >
      </div>
      <soft-ware class="share" 
                  @qqClic="qqClick"/>
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
        coverImg:''
    }
  },
  components:{
    SoftWare
  },
  created(){
    getEssayDetail(this.$route.query.articleId,false).then(res =>{
      this.title = res.title;
      this.coverImg = res. coverimgUrl;
      this.content = res.message
    })
  },
  methods:{
    qqClick(){

    }
  }
}
</script>

<style scoped>
.share {
  justify-content: flex-start;
  font-size: .14rem !important;
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
