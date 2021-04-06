<template>
<div class="myselfinfo">
    <div class="title">我的信息<span>(点击文本框修改信息)</span></div>
    <div class="info">
        <div class="avatar">
           <div class="head">头像：</div>
           <div class="head-box">
               <label for="avatarIpt"><img :src="avatar" alt="" ref="avatarShow">
               <span @click="userAvatarClic" v-if="isShow"><button>确认头像</button></span>
               <input type="file" style="opacity: 0;" id="avatarIpt" ref="editorAvatar" @input="avatarInput"></label>
           </div>
        </div>
        <div class="nickname">
           <div class="head">昵称：</div>
           <div class="text-box">
               <span  @click="editorClic">
                   <input  type="text" v-model="nickname" disabled>
               </span>
           </div>
        </div>
        <div class="age" >
           <div class="head">年龄：</div>
           <div class="text-box">
               <span  @click="editorClic">
                   <input type="text" v-model="age" disabled>
               </span>
           </div>
        </div>
        <div class="email">
           <div class="head">邮箱：</div>
           <div class="text-box">
               <span  @click="editorClic">
                   <input type="text" v-model="email" disabled>
               </span>
           </div>
        </div>
        <div class="confirm"><button @click="updataInfoClic">确认修改</button ><button @click='logoutClic'>注销账号</button></div>
    </div>

</div>
</template>

<script>
import {getUserDetailInfo,
        postUpdataInfo,
        uploadUserAvatar,
        logoutUser} from 'network/user'
import { render } from 'vue'
export default {
  data () {
    return {
        nickname:'aaaa',
        age:'',
        email:'',
        avatar:'',
        element:null,
        isShow:false
    }
  },
  created(){
        getUserDetailInfo().then(res =>{
            console.log(res);
            this.age = res.age;
            this.email = res.email;
            this.nickname = res.name;
            this.avatar  =res.avatar;    
        })
  },
  methods:{
       editorClic(event){
          this.element = event.target;
          event.target.removeAttribute('disabled');
       },
       updataInfoClic(){
           postUpdataInfo(this.age,this.email,this.name).then(res => {
               console.log('保存成功~');
           })
       },
       userAvatarClic(){
            let formData = new FormData();
            formData.append('avatar',this.$refs.editorAvatar.files[0]);
            uploadUserAvatar(formData).then(res => {
                console.log('头像上传成功~');
                console.log(res.avatarUrl);
               
            })
       },
       avatarInput(){
           this.isShow = true;
           const resultFile =  this.$refs.editorAvatar.files[0];
           const avatarFile = this.$refs.avatarShow;
           if(resultFile&&avatarFile){
               let reader = new FileReader();              
                reader.readAsDataURL(resultFile);
                reader.onload = function (e) {
                    console.log(reader.result);
                    avatarFile.src = reader.result;
                }
           }
       },
       logoutClic(){
           logoutUser().then(res=> {
               localStorage.removeItem('token')
               this.$router.push('/home');
           });
           
       }
   }
}
</script>

<style  scoped>
.title {
    position: relative;
    text-align: center;
    
}
.title span {
    position: absolute;
    color: #3e3e3e;
    right: 10px;
}
.myselfinfo {
    margin-top: 10px;
    width: 100%;
}
.avatar,
.nickname,
.age,
.email {
    display: flex;
    margin-top: 10px;
}
.nickname,
.age,
.email{
    margin-top: 30px;
}
.head{
    text-align: center;
    width: 20%;
}
.head-box {
    width: 60%;
    height: 100px;
    text-align: center;
}
.head-box img {
    width: 100px;
    height: 100px;
    vertical-align: baseline;
}
.text-box {
    width: 60%;
    text-align: left;
}
.text-box i {
    font-style: normal;
    display: inline-block;
    width: 80%;
}
.confirm {
    width: 80%;
    margin-top: 20px;
    text-align: center;
}
.confirm button {
    padding: 5px;
    margin-right: 50px;
}
</style>
