<template>
  <div class="user-info">
    <img :src="userInfo.avatar" alt="" class="user-head">
    <div class="author-info">
      <div class="author-name">{{userInfo.name}}</div>
      <div class="author-production">
        <span>文章数:<i>{{userInfo.article_num}}</i></span>
        <span >访问量:<i></i></span>
        <span>评论数:<i></i></span>
      </div>
      <div class="user-more">
        <span @click="essayManageClic" class="essay-manage">文章管理</span>
        <span @click="essayCreateClic" class="essay-create">文章创作</span>
        <span @click="mySelfInfoClic(userInfo.id)" class="mydelf-info">我de信息</span>
        
      </div>
      <div class="leave-span"><span @click="logOffClic">退出登陆</span></div>
    </div>
    
  </div>
</template>

<script>
export default {
    props:{
      userInfo:{
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
    logOffClic(){
      localStorage.removeItem("token");
      this.$router.replace('/home');
    },
    essayManageClic(){
      this.$router.replace('/profile/userArticleList');
    },
    /**
     * 文章创作
     */
    essayCreateClic(){
      this.$router.push('/editor')
    },
    mySelfInfoClic(id){
      this.$router.replace({
        path:'/profile/myselfinfo'
      })
    }
  }
}
</script>

<style  scoped>
.user-info {
     padding: 1px;
     width: 100%;
     height: 100%;
     text-align: center;
}
.user-head {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 3px 3px rgba(0,0,0,.2);
  transition: all 1s ease-in-out;
}
.user-head:hover{
  transform: rotate(360deg);
}
.author-info {
  margin-top: 10px;
}
.author-name {
  font-weight: 600;
  font-size: 0.15rem;
}
.author-production {
  margin-top: 5px;
}
.author-production span {
  font-size: .10rem;
  font-style: normal;
  padding: 0 5px;
}
.user-more {
  margin-top: 10px;
  font-size: .10rem;
}
.user-more span {
  cursor: pointer;
  margin-right: 5px;
}
.essay-manage,
.essay-create,
.mydelf-info{
  padding: 4px 6px;
  font-size: .10rem;
  border-radius: 8px;
  color: #fff;
}
.essay-manage {
background-color:#8DC149;
}
.essay-create {
background-color:skyblue;
}
.mydelf-info{
background-color:#E2B462;
}
.leave-span {
  margin-top: 15px;
}
.leave-span span {
  padding: 4px 6px;
  font-size: .10rem;
  background-color: #AD373D;
  border-radius: 8px;
  color: #fff;
}
@media screen and (max-width:768px){
.user-head {
  width: 2rem ;
  height: 2rem ;
} 
.author-name{
  font-size: .25rem;
} 
.author-production span,
.user-more{
  font-size: .2rem;
  margin-bottom: 10px;
}
}
</style>
