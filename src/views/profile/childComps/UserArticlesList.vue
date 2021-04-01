<template>
<div class="user-article-list">
    <div class="article-item" v-for="article in articles" :key='article.id' @click="articleItemClic(article.id)">
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
        </div>
        <div class="article-icon">
            <div class="article-editor">
                <i class="fa fa-file-text" title='编辑' aria-hidden="true" @click.stop="editorClic(article.id)"></i>
                </div>
            <div class="article-delete">
                <i class="fa fa-trash-o" title='删除' aria-hidden="true" @click.stop="deleteClic(article.id)"></i>
            </div>
        </div>   
    </div>
</div>
</template>

<script>
export default {
    props:{
        articles:{
            type:Array,
            default(){return[]}
        }
    },
  data () {
    return {
    }
  },
  methods:{
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
      deleteClic(id){
          
      }
  }
}
</script>

<style  scoped>
.user-article-list {
    width: 100%;
    
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
    color: #FD7831;
    background-color: #FCCAF2;
}
.article-time{
    position: absolute;
    top: 5px;
    right: 15px;
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
