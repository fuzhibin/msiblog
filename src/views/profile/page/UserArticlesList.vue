<template>
<div class="user-article-list">
    <h5 style="text-align: center;">文章列表</h5>
    <div  v-if="userArticlesList.length !=0">
        <div class="article-item"
    v-for="(article,index) in userArticlesList" 
    :key='article.id' 
    @click="articleItemClic(article.id)">
        <div class="article-cover">
            <img :src="article.coverimgUrl" alt="">
        </div>
        <div class="article-text">
            <div class="article-title">
               <span>{{article.title}}</span>
            </div>
            <div class="article-label">
            <span v-for="label in article.labels" :key="label.id">{{label.label}}</span> 
            </div>
            <div class="article-time"> 2021年3月31号</div>
            <div class="article-star">
                <span><i class="fa fa-star" title="点赞数"></i>55</span>
                <span><i class="fa fa-eye" title="浏览量"></i>123</span>
                <span><i class="fa fa-share" title="分享量"></i>85</span>
            </div>
        </div>
        <div class="article-icon">
            <div class="article-editor">
                <i class="fa fa-file-text" title='编辑' aria-hidden="true" @click.stop="editorClic(article.id)"></i>
                </div>
            <div class="article-delete">
                <i class="fa fa-trash-o" title='删除' aria-hidden="true" @click.stop="deleteClic(article.id,index)"></i>
            </div>
        </div>   
    </div>
    </div>
    <div v-else>
        您还未写过文章
    </div>
</div>
</template>

<script>
import {deleteArticle} from 'network/essay'
import {getUserArticles} from 'network/user'
export default {
  data () {
    return {
         userArticlesList:[],
    }
  },
  created(){
   this.getUserArticlesList();
  },
  methods:{
       getUserArticlesList(limlt=10,offset=0){
         getUserArticles(limlt,offset).then(res => {
            this.userArticlesList.push(...res);
         })
      },
      articleItemClic(id){
        this.$router.push({
        path:'/blogview',
        query:{
          articleId:id
         }
       });
      },
      editorClic(id){
        //   console.log(id);
          this.$router.push({
              path:'/editor',
              query:{
                articleId:id
              }
          })
      },
      deleteClic(id,index){
          deleteArticle(id).then(res => {
              this.articles.splice(index,1);
              if(res.flag){ 
                  console.log(res.message);
              }
          });

      }
  }
}
</script>

<style  scoped>
.user-article-list {
    width: 100%;
    margin-top: 10px;
}
.article-item {
    display: flex;
    padding: 5px 5px;
    height: 120px;
    border: 1px dashed #3e3e3e;
    overflow: hidden;
    background-color: #5A8026;
    border-radius:  10px;
    margin-bottom: 20px;
}
.article-item:hover {
    border:1px solid skyblue;
}
.article-cover {
    width: 180px;
    height: 100%;
}
.article-cover img {
    width: 100%;
    height: 100%;
    
    border-radius:  10px;
}

.article-text {
    position: relative;
    flex: 1;
    margin:0 10px;
    flex-wrap: wrap;
}
.article-label{
    height: 50%;
    display: flex;
    padding-left: 15px;
    align-items: center;
}
.article-label span{
    padding: 5px;
    margin-right: 5px;
    border-radius: 5px;
    color: #FD7831;
    background-color: #FCCAF2;
}
.article-time{
    position: absolute;
    top: 5px;
    right: 15px;
}
.article-star {
    position: absolute;
    bottom: 10px;
    right: 5px;
}
.article-star span {
    margin: 0 .1rem;
}
.article-title {
    height: 50%;
    display: flex;
    padding-left: 15px;
    font-size: 20px;
    align-items: center;
}
.article-icon {
    width: 20px;
    font-size: 20px;
}
.article-icon div {
    height: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
}

@media screen and (max-width:450px){
    .article-item {
        height: 70px;
    }
 .article-cover{
     display: none;
 }    
}
</style>
