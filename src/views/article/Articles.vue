<template>
  <div class="article">
    <better-scroll  ref="btscroll" 
       :pull-up-load='true' 
       @pullingUp='loadMore'
       @scroll='scrollPosition'
       :probe-type='3'>
      <essay-list :essay-list='essayList'/>
    </better-scroll>
    <back-top @click="scrollTo" v-show="backTopShow"/> 
  </div>
</template>

<script>
import BetterScroll from "components/common/betterscroll/BetterScroll"
import EssayList from 'components/content/essay/EssayList'

import BackTop from 'components/common/backtop/BackTop'
import {getEssayList} from 'network/essay'
import {backTOP} from 'common/mixin/backtop'
export default {
  data () {
    return {
      essayList:[],
      offset:0,
      limit:12
    }
  },
    mixins:[backTOP],
  components:{
    BetterScroll,
    EssayList,BackTop
  },
  created(){
    this.getEssays(this.limit,this.offset*this.limit);
  },
  methods:{
    loadMore(){
    this.getEssays(this.limit,this.offset*this.limit);
  },
  getEssays(limit=12,offset=0){
    getEssayList(limit,offset).then(res =>{
          this.offset++;
          this.essayList.push(...res)
        })
  },
  }
}
</script>

<style  scoped>
.article {
  height: 100vh;
}
</style>
