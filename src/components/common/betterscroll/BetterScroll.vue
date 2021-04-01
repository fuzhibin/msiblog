<template>
  <div class="wrap" ref="warp">
    <div class="containts" ref="containts">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import mouseWheel from "@better-scroll/mouse-wheel"
BScroll.use(Pullup);
BScroll.use(mouseWheel)
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
 
  },
  data () {
    return {
      scroll:null,
    }
  },
  mounted(){  
    this.scroll=new BScroll(this.$refs.warp,{
         mouseWheel: true,
         disableMouse: false,
         disableTouch: false,
         click:true,
         pullUpLoad: this.pullUpLoad,
         probeType:this.probeType,   
    });
    // 2.监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }

      // 3.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
  },
  methods:{
     refresh(){
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    }
  }
}
</script>

<style  scoped>
.wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

