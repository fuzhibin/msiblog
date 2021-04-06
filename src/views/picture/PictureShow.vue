<template>
   <div class="picture-page">
      <better-scroll ref="btscroll" 
       :pull-up-load='true' 
       @pullingUp='loadMore'
       @scroll='scrollPosition'
       :probe-type='3'>
           <div class="picture-show" ref="containter">
                <div class="img-box" ref="imgbox" v-for="item in pictureList" :key="item">
                    <img :src="item.picurl" alt=""  @load="imgLoad">
                </div>
            </div>
       </better-scroll>
       <back-top @click="scrollTo" v-show="backTopShow"/>
   </div>    
</template>

<script>
import {getPictureList} from 'network/pictures'

import BetterScroll from 'components/common/betterscroll/BetterScroll'

import BackTop from 'components/common/backtop/BackTop'
/**
 * 防抖
 */
import {debounce} from 'common/debounce'
import {backTOP} from 'common/mixin/backtop'
export default {
  components: { BetterScroll ,BackTop},
  data () {
    return {
       pictureList:[],
       limit:50,
       offset:0,
    }
  },
  mixins:[backTOP],
  created(){
      this.getPicture(this.limit,this.offset);
  },
  methods:{
      getPicture(limit,offset){
         getPictureList(limit,offset).then(res => {
            this.pictureList.push(...res);
           this.offset++;
         });
      },
      imgLoad(){
        debounce(this.$refs.btscroll.refresh,100)()
      },
      loadMore(){
          this.getPicture(this.limit,this.offset*this.limit);
          this.$refs.btscroll.finishPullUp();
      }
  }
}
</script>

<style  scoped>
.picture-page {
    margin-top: 55px;
    width: 100%;
    height:100vh;
    overflow: hidden;
    margin-bottom: auto;
}

.picture-show {
    width: 90%;
    margin: auto;
    column-count: 4;
    column-gap: 5px;
}

.img-box {
   padding: 2px;
   transition: all 1s ease;
}
.img-box img {
    display: block;
    width: 100%;
    height: auto;
    z-index: 1;
}
.img-box:hover{
    transform: scale(1.2);
    z-index: 2;
}

@media screen and (min-width:450px) and (max-width:768px){
    .picture-show {
       column-count:2;
   } 
}
@media screen and (max-width:450px) {
   .picture-show {
       column-count:1;
   } 
}
</style>
