<template>
<div class="profile">
    <div class="main">
        <div class=" col-lg-9 col-md-12 col-sm-12">
            <user-articles-list :articles="userArticlesList"/>
        </div>
        <div class="profile-info col-lg-3 col-md-12 col-sm-12">
            <user-info :user-info='showInfo'></user-info>
        </div>
    </div>
</div>
</template>

<script>


import {getUserArticles,getUserInfo} from 'network/user'

import UserInfo from './childComps/UserInfo'
import UserArticlesList from './childComps/UserArticlesList'
export default {
  data () {
    return {
        userArticlesList:[],
        showInfo:{}
    }
  },
  components:{
    UserInfo,
    UserArticlesList
  },
  created(){
      this.getUserArticlesList();
      this.showUserInfo();
  },
  methods:{
      getUserArticlesList(limlt=10,offset=0){
         getUserArticles(limlt,offset).then(res => {
             this.userArticlesList.push(...res);
         })
      },
      showUserInfo(){
        getUserInfo().then(res=>{
            this.showInfo=res;
            console.log( this.showInfo);
        })
      }
  }
}
</script>

<style  scoped>
.profile {
    width: 100%;
    height: 100%;
    margin-top: 55px;
    
}
.main {
    width: 90%;
    height: 1000px;
    display: grid;
    align-content: start;
    grid-template-columns: repeat(12,1fr);
    margin: 0 auto;
}
.profile-info {
   display: inline-block; 
}
@media screen and (max-width:768px){
   .main  {
    width: 95%;
    }
    .profile-info {
       grid-row-start: 1;   
   }

}

</style>
