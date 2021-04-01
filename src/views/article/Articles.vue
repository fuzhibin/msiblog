<template>
  <div class="article">
    <better-scroll>
      <essay-list :essay-list='essayList'/>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "components/common/betterscroll/BetterScroll"
import EssayList from 'components/content/essay/EssayList'

import {getEssayList} from 'network/essay'

export default {
  data () {
    return {
      essayList:[]
    }
  },
  components:{
    BetterScroll,
    EssayList
  },
  created(){
    getEssayList(6,0).then(res =>{
      console.log(res);
      this.essayList.push(...res)
    })
  }
}
</script>

<style  scoped>
.article {
  height: 100vh;
}
</style>
