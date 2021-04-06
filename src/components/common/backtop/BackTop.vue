<template>
    <div class="scroll-top">
        <img src="~assets/imgs/backTop.jpg" alt="">
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }

}
</script>

<style  scoped>
.scroll-top {
    width: 40px;
    height: 40px;
    position: fixed;
    background-color: #fff;
    border-radius: 100%;
    overflow: hidden;
    text-align: center;
    right: 30px;
    bottom: 50px;
    z-index: 20;
}
.scroll-top img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 60%;
    height: 80%;
}
</style>
