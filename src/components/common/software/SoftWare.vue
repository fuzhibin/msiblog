<template>
    <ul class="smallicon">
    <li>
      <i class="fa fa-github" aria-hidden="true"></i>
      </li>
    <li>
      <i class="fa fa-qq" aria-hidden="true" @click="qqClick"></i>
    </li>
    <li>
     <i class="fa fa-weixin" aria-hidden="true"></i>
    </li>
    <li>
      <i class="fa fa-weibo" aria-hidden="true"></i>
    </li>
  </ul>
</template>

<script>
import Toast from 'components/content/toast/Toast.vue'

export default {
  data(){
    return {
    }
  },
  components: { Toast },
    name:'SoftName',
    methods:{
      qqClick(){ 
       this.$emit('qqClic');     
      }
    }
}
</script>

<style scoped>
ul {
  margin-left: 0;
  font-size: .2rem;
  margin-bottom: 10px;
}
.smallicon {
  display: flex;
  transition: top 1s;
}

.smallicon li {
  list-style: none;
  box-sizing: border-box;
  padding: 0 .15rem .05rem;
  margin: 0 .1rem;
}
.smallicon li:hover {
  border-bottom: 1px solid #ccc;
}

@media screen  and (max-width:768px) {  
  .smallicon li {
   font-size: .5rem  !important;
  }
 
}
</style>