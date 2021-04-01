<template>
    <div class="box" v-if="isShow">
       <img src="" alt="">
    </div>
</template>

<script>
export default {
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        imgUrl:{
            type:String,
            default:""
        }
    }
}
</script>

<style  scoped>

.box {
    width: 2.2rem;
    height: 2.2rem;
    background-color: pink;
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
}

</style>
