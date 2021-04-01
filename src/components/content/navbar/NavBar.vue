<template>
<div class="navbar">
   <div class="more">
      <label for="toggle-nav">
      <i class="bi bi-justify "></i>
       </label>
    </div>
    <input type="checkbox" id="toggle-nav">
    <div class="nav-middle">
        <ul class="navbar-ul">
        <li v-for="item in titles" :key="item" @click="titleClic(item)"><i :class="item.iconClass"></i>{{item.title}}</li>
        
        </ul>
   </div>
   <div class="logo">
       <img src="~assets/imgs/logo.png" alt="">
   </div>
</div>
  
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return {
            titles:[{
                title:'首页',
                path:'/home',
                iconClass:'bi bi-house-fill'
            },{
                title:'文章',
                path:'/article',
                iconClass:'bi bi-file-richtext'
            },{
                title:'图片',
                path:'/picturelist',
                iconClass:'bi bi-images'
            },{
                title:'我',
                path:'/login',
                iconClass:'bi bi-person-fill'
            }]
        }
    },
    methods:{
        titleClic(item){     
          this.$router.replace(item.path);
        }
    }
}
</script>

<style>
.navbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 55px;
    line-height: 55px;
    width: 100%;  
}
.more {
    position: relative;
    z-index: 3;
    display: none;
    width: 55px;
    font-size: 30px;
    text-align: center;
}
.nav-middle {
   flex: 1;
}

.navbar-ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    font-size: 16px;
}
.navbar-ul li {
    margin: 0 10px;
    list-style: none;
}
.navbar-ul li i {
    font-size: 18px;
    margin-right: 5px;
}
.logo {
    height: 60%;
    width: 85px;
    align-self: center;
    margin-right: 15px;
}
.logo img {
    width: 100%;
    height: 100%;
    vertical-align: top;
}
#toggle-nav {
    display: none;
}

@media screen and (max-width:768px)  {
.more {
    display: block !important;
}
    /* NavBar部分 */
.nav-middle {
    display: none !important;
    position: absolute;
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    z-index: 2;
    right: 0;
}

#toggle-nav:checked+.nav-middle {
    display: block !important;
    }
#toggle-nav:checked+.nav-middle .navbar-ul {
    flex-direction: column;
    }
}

</style>