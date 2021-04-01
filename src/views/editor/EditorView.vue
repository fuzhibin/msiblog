<template>
 <div class="editor-view">
     <div class="editor-head">
     </div>
     <div class="editor-body" >
         <div class="editor-left" >
            <!-- <pre  class='editor-text' contenteditable="true"  @input="editorChange">{{content}}</pre> -->
         <textarea class='editor-text' ref="editorbox" v-model="content"/>
     </div>
     <div class="editor-right"  >
         <div v-html="renderContent">
         </div>
     </div>
     </div>
 </div>
</template>

<script>
import {getEssayDetail} from 'network/essay.js'
import marked from 'marked'


export default {
  data () {
    return {
        content:''
    }
  },
  created(){
    getEssayDetail(this.$route.query.articleId,true).then(res =>{
        this.content = res.message;
    })
  },
  mounted(){
      marked.setOptions({
          renderer: new marked.Renderer(),
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
      });
    setTimeout(()=>{
        this.autoTextarea(this.$refs.editorbox);
    },200)
   
  },
  computed:{
      renderContent(){
         return marked(this.content)
      }
  },
  methods:{
    autoTextarea(elem, extra, maxHeight) {
      extra = extra || 0;
      var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
      isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
        addEvent = function (type, callback) {
          elem.addEventListener ?
          elem.addEventListener(type, callback, false) :
          elem.attachEvent('on' + type, callback);
        },
        getStyle = elem.currentStyle ? function (name) {
          var val = elem.currentStyle[name];
          if (name === 'height' && val.search(/px/i) !== 1) {
            var rect = elem.getBoundingClientRect();
            return rect.bottom - rect.top -
            parseFloat(getStyle('paddingTop')) -
            parseFloat(getStyle('paddingBottom')) + 'px';        
          };
 
          return val;
          } : function (name) {
            return getComputedStyle(elem, null)[name];
            },
          minHeight = parseFloat(getStyle('height'));
        elem.style.resize = 'none';
        var change = function () {
          var scrollTop, height, padding = 0,style = elem.style;
            if (elem._length === elem.value.length) return;
            elem._length = elem.value.length;
              if (!isFirefox && !isOpera) {
                padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
                };
              scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
              elem.style.height = minHeight + 'px';
                if (elem.scrollHeight > minHeight) {
                  if (maxHeight && elem.scrollHeight > maxHeight) {
                    height = maxHeight - padding;
                    style.overflowY = 'auto';
                    } else {
                    height = elem.scrollHeight - padding;
                    style.overflowY = 'hidden';
                     };
                    style.height = height + extra + 'px';
                    scrollTop += parseInt(style.height) - elem.currHeight;
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;
                    elem.currHeight = parseInt(style.height);
                };
        };
        addEvent('propertychange', change);
        addEvent('input', change);
        addEvent('focus', change);
        change();
    }
  }
}
</script>

<style scoped>
.editor-view {
    padding-top: 55px;
    width: 100vw;
    height: 100vh;
    
}
.editor-head {
    height: 50px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    background-color: pink;
}
.editor-body {
  width: 100%;
  display: flex;
}
.editor-left {
    width: 50%;;
    height: 100%;
    margin-top: 5px;  
}
.editor-text {
    width: 100%;
    background-color: #F5F5F5;
    padding-top: 15px;
    padding-left: 15px;
    box-shadow: none;
    border: none;
    outline: none;
    box-sizing: border-box;
}
.editor-right {
    width: 50%;
    padding-left: 15px;
    padding-top: 15px;
}
</style>
