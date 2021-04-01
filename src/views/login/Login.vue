<template>
 <div class="login">
     <div class="login-box">
         <h4>{{isflag?"登陆":"注册"}}</h4>
         <div class="login-body" v-show='isflag'>
            <div>
                用户名：<input type="text" v-model="username" placeholder="请输入用户名">
            </div>
            <div>
                密&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password" 
                @keyup.enter="submitClic"
                placeholder="请输入密码">
            </div> 
            <div>
                <button @click="submitClic">提交</button>
                <button @click="resetInpt">重置</button>
            </div>
         </div>
         <div class="login-body" v-show='!isflag'>
            <div>
                用户名：<input type="text" v-model="username" placeholder="请输入用户名">
            </div>
            <div>
                密&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password" placeholder="请输入密码">
            </div>
            <div>
                确认密码：<input type="password" v-model="passwordAgain" placeholder="请输入确认密码">
            </div>
            <div>
                <button @click="submitClic">提交</button>
                <button @click="resetInpt">重置</button>
            </div>
         </div>
         <div class="login-tips">
             如果{{isflag?"还没":"已"}}有账号点击这里<a href="javascript:;" @click="aClic">{{isflag?"注册":"登陆"}}</a>
         </div>
     </div>
 </div>
</template>

<script>

import {postInfoLogin} from "network/user"

export default {
  data () {
    return {
        username:"",
        password:"",
        passwordAgain:"",
        // 判断是否点击的注册按钮
        isflag:true
    }
  },
  methods:{
      resetInpt(){
          this.username='',
          this.password='',
         this.passwordAgain=''
      },
      aClic(){
          this.isflag=!this.isflag;
      },
      submitClic(){
          if(this.isflag){
              postInfoLogin(this.username,this.password).then(res => {
                  localStorage.setItem("token",res.token);
                  this.$router.replace('/profile');
              })
          }
      }
  },
  beforeRouteEnter(to, from, next) {
   const token = localStorage.getItem("token");
   if(token){
     next({ path: '/profile' });
   }else{
       next();
   }
  },
}
</script>

<style  scoped>
.login {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.login-box {
    width: 4rem;
    height: 2.5rem;
    border-radius: 10px;
    position: relative;
    background-color: rgba(0, 0, 0, .05);
}
.login-box h4 {
    text-align: center;
    font-size: .18rem;
}
.login-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .3rem;
}
.login-body div {
    width: 100%;
    text-align: center;
}
.login-body input {
    width:40%;
    height: .28rem;
    padding-left: 10px;
    line-height: 30px;
    border-radius: 15px;
    margin-bottom: .2rem;
}
.login-body button {
    width: .36rem;
    height: .20rem;
    margin-right: .2rem;
    font-size: .10rem;
}
.login-tips {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: .1rem;
}
@media screen and (min-width: 450px)and (max-width:768px) {
.login-box {
    width: 70% !important;
    height: 35% !important;
}

.login-body input {
    width: 40%  !important;
    height: .6rem !important;
}
.login-body button{
    width: .62rem !important;
    height: .45rem !important;
}
}
@media screen and (max-width:450px){
   .login-box {
    width: 90% !important;
    height: 35% !important;
   }
   .login-box h4 {
       font-size: .6rem;
   }
  .login-body {
    font-size: .4rem !important;
  }
   .login-body input {
    width: 50%;
    height: .8rem;
    }
.login-body button{
    width: 1.5rem !important;
    height: .8rem !important;
    }
}
</style>
