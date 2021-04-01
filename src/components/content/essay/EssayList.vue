<template>
<div class="essay-list" >
    <div class="col-lg-3 col-md-6 col-sm-12" v-for="item in essayList" :key="item.title">
      <essay-item :essay-info='item'/>
    </div>
</div>
</template>

<script>
import EssayItem from './EssayItem'
export default {
  props:{
    essayList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components:{
    EssayItem
  }
}
</script>

<style  scoped>
.essay-list {
  margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(12,1fr);
}
</style>
