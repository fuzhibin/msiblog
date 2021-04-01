<template>
  <div class="user-info">
    <img :src="userInfo.avatar" alt="" class="user-head">
    <div class="author-info">
      <div class="author-name">{{userInfo.name}}</div>
      <div class="author-production">
        <span>文章数:<i>{{userInfo.article_num}}</i></span>
        <span>访问量:<i>2</i></span>
        <span>评论数:<i>3</i></span>
      </div>
      <div class="user-more">
        <span>我de信息</span>
        <span @click="logOffClic">退出登陆</span>
      </div>
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
  width: 100px;
  height: 100px;
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
  font-size: 20px;
}
.author-production {
  margin-top: 5px;
}
.author-production span {
  font-size: 18px;
  font-style: normal;
  padding: 0 5px;
}
.user-more {
  margin-top: 5px;
  font-size: 16px;
}
.user-more span {
  cursor: pointer;
  margin-right: 5px;
}
</style>
