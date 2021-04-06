<template>
 <div class="editor-view">
     <div class="editor-head">
       <span @click="addPictureClic"><i class="fa fa-image" title="添加图片"></i></span>
       <span @click="saveArticleClic"><i class="fa fa-save" title="保存"></i></span>
       <span @click="previewClic" class="preview"><i class="fa fa-eye" title="预览"></i></span>
       <span>标题：<input type="text" v-model="essayTitle" /></span>
       <span @click="fileUpload"><i class="fa fa-cloud-upload" title="文章上传"></i></span>
       <div class="labels">
          <span class="tag">标签:</span>
          <div class="labels-item">
            <span v-for="(label,index) in labels" :key="index">{{label}}<i class="fa fa-times-circle" @click="labelItemClic(label,index)"></i></span>
            <span v-show="addLabelShow"><i contenteditable="true"  
                                            class="label-input"
                                            @blur="addLabelBlur" 
                                            ref="addlabel"></i></span>
            <span>添加标签<i class="fa fa-plus-square" title="添加标签" @click="addLabelClic"></i></span>
          </div>
        </div>
     </div>
     <div class="editor-body" >
         <div class="editor-left" :class="{'editor_all':editorExhibite,'editor-hidden':!editorExhibite}">
            <textarea class='editor-text' ref="editorbox" v-model="content"/>
         </div>
        <div class="editor-right"  :class="{'editor_all':!editorExhibite,'editor-hidden':editorExhibite}">
          <div v-html="renderContent" class="html-marked">
        </div>
     </div>
     </div>
     <!-- 工具部分 -->
       <!-- 图片上传盒子 -->
     <div class="tools">
       <div class="upload-box" v-show="isShow" @click="isShow=false">
          <div class="upload-img" @click.stop>    
            <label for="aaa">
               <input type="file" ref="imgfiles" class="editor-input" id="aaa" @input="imgSelectTure"/>
               <div class="content-box">
                 <img src="~assets/imgs/selectfile.png" alt="" ref="imgSelectRef">
                 <p>{{uploadImgName}}</p>
               </div>
            </label>
            <span @click="submitClic"
                  class="Confirm-span">确定</span>
          </div> 
       </div>
       <div class="coverImg-box"  v-show="coverImgBoxShow" @click="coverImgBoxShow=false">
         <div class="upload-coverimg" @click.stop>
            <label for="bbb">
              <input type="file" name="" ref="coverImg" class="editor-input" id="bbb"
              @input="coverSelectTure"/>
              <div class="content-box">
                <img src="~assets/imgs/selectfile.png" alt="" 
                   ref="coverSelectRef">
                 <p>{{uploadCoverName}}</p>
              </div>
            </label>
            <span @click="submitCoverClic"
                  class="Confirm-span">确定</span>
         </div>
       </div>
       <div class="file-box" v-show="fileBoxShow" @click="fileBoxShow=false">
         <div class="upload-file" @click.stop>    
            <label for="ccc">
               <input type="file"  class="editor-input" 
               ref="editorFileRef" id="ccc" @input="editorFileInput"/>
               <div class="content-box">
                 <img src="~assets/imgs/filepic.jpg" alt="" >
                 <p>{{uploadFileName}}</p>
               </div>
            </label>
            <span @click="submitFileClic" class="Confirm-span">确定</span>
          </div> 
       </div>
     </div>
     <!-- 工具部分 -->
 </div>
</template>

<script>
import {getEssayDetail,
        postEssayAttachImg,
        postEssayContent,
        postCoverImg,
        postLabels} from 'network/essay.js'
import marked from 'marked'
/**
 * 混入
 */
import {textareaMixin} from 'common/mixin/textarea'
export default {
  data () {
    return {
        articleId:'',
        content:'',
        isShow:false,
        essayTitle:'',
        filename:'',
        editorExhibite:true,
        coverImgBoxShow:false, //封页图片上传的盒子,
        labels:[],
        addLabelShow:false,
        fileBoxShow:false,
        uploadFileName:'',
        uploadImgName:'',
        uploadCoverName:''
    }
  },
  created(){
    const articleId = this.$route.query.articleId
    if(articleId){
      getEssayDetail(articleId,true).then(res =>{
        this.content = res.message;
        this.essayTitle = res.title;
        this.filename = res.filename;
        if(res.labels){
          res.labels.forEach(value =>{
          this.labels.push(value.label)
          console.log( this.labels);
        })
        }
      })
    }
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
    },200);
  },
  computed:{
      renderContent(){
         return marked(this.content)
      }
  },
  mixins:[textareaMixin],
  methods:{
    submitFileClic(){
      this.$refs.editorFileRef.file[0]

    },
    fileUpload(){
      this.fileBoxShow = true;
    },
    addLabelBlur(){
      const str = this.$refs.addlabel.innerText.trim();
      this.$refs.addlabel.contenteditable=false;
      this.$refs.addlabel.style.backgroundColor = 'transparent' 
      this.$refs.addlabel.innerText="";
      this.addLabelShow = false
      this.labels.push(str);
    },
    addLabelClic(){
      if(this.labels.length>=3){
        alert('一篇文章标签不能超过三个~');
      }else{
        this.$refs.addlabel.style.backgroundColor="#fff"
        this.addLabelShow=true;
      }
    },
    /**
     * 文章图片选择后显示监听按键
     */
    imgSelectTure(){
      const resultFile =  this.$refs.imgfiles.files[0];
      const avatarFile = this.$refs.imgSelectRef;
      this.readFileInfo(resultFile,avatarFile);
      this.uploadImgName = resultFile.name;
    },
    coverSelectTure(){
      const resultFile =  this.$refs.coverImg.files[0];
      const avatarFile = this.$refs.coverSelectRef;
      this.readFileInfo(resultFile,avatarFile);
      this.uploadCoverName = file.name
      
    },
    readFileInfo(inputFile,showInfo){
      if(inputFile&&showInfo){
        let reader = new FileReader();              
        reader.readAsDataURL(inputFile);
        reader.onload = function (e) {
          console.log(reader.result);
          showInfo.src = reader.result;
        }
      }
    },
    /**
     * 本地上传文本
     */
    editorFileInput(){
      const that = this;
      const inputFile = this.$refs.editorFileRef.files[0];
      this.uploadFileName=inputFile.name;
      let reader = new FileReader();
      reader.readAsText(inputFile,'UTF-8');
      reader.onload = function(){
        that.content = reader.result;
        that.fileBoxShow = false;
      }
    },
    /**
     * 标签的提交
     */
    saveLabelsOfArticle(labels,articleId){
      postLabels(labels,articleId).then(res => {
        console.log('插入成功~');
      })
    },
    /***
     * 标签的删除
     */
    labelItemClic(label,index){
      this.labels.splice(index,1);
    },
    /***
     * 电脑手机切换时小眼睛控制
     */
    previewClic(){
      this.editorExhibite=!this.editorExhibite;
    },
    /**
     * 文件上传盒子的显示
     */
    addPictureClic(){
      this.uploadImgName = ''
      this.isShow = true;
    },
    /**
     * textare中光标位置处插入文字
     */
   addStringTOTextarea(str){
    var tc = this.$refs.editorbox;
    var tclen = tc.value.length;
    tc.focus();
    if(typeof document.selection != "undefined")
    {
        document.selection.createRange().text = str;  
    }
    else
    {
        this.content = this.content.substr(0,tc.selectionStart)+str+this.content.substring(tc.selectionStart,tclen);
    }
   },
   async submitCoverClic(){
     let formData = new FormData();
     formData.append('coverImg',this.$refs.coverImg.files[0]);
     console.log(formData);
     await postCoverImg(formData,this.articleId).then(res => {
       this.coverImgBoxShow=false; 
       console.log('图片封面上传成功~');
    })
   },
   submitClic(){
      this.isShow =false;
      const file = this.$refs.imgfiles.files[0];
      let formData = new FormData();
      formData.append('attachImg',file);
      postEssayAttachImg(formData).then(res => {
        this.addStringTOTextarea(`[![](${res.attachUrl} "Shiprock")](${res.attachUrl})`);
      }) 
   },
   /**
    * 文章的保存
    */
   async saveArticleClic(){

     //文章提交给后端
    await postEssayContent(this.essayTitle, this.filename, this.content).then(res => {
      console.log(res);
        this.articleId = res.articleId;
        //封面图片的上传
        this.coverImgBoxShow=true; 
    })
    await this.saveLabelsOfArticle(this.labels,this.articleId);
   }
  
  }
}
</script>

<style scoped>
.editor-view {
    padding-top: 55px;
    width: 100%;
    height: 100vh;
    
}
.content-box {
  position: absolute;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-80%);
  text-align: center;
}
.content-box img {
  width: 90px;
  height: 90px;
}
.Confirm-span {
  position: absolute;
  bottom: 10px;
  padding: 5px 10px;
  color: #fff;
  background-color: #415613;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.html-marked{
  width: 100%;
}
.editor-head {
  position: relative;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    background-color: pink;
}
.editor-head span {
  font-size: .12rem;
  margin-left: 10px;
}
.editor-input {
  position: absolute;
  opacity: 0;
}
.labels{
  display: flex;
  margin-left: auto;
  padding-right: 20px;
}
.tag{
  color: #000 !important;
  background-color: transparent !important;
}
.labels span {
    color: #FD7831;
    background-color: #FCCAF2;
    padding: 5px;
    font-size: 0.06rem;
    margin-left: 5px;
    border-radius: 5px;
}
.label-input {
  display: inline-block;
  outline: none;
  padding: 2px 5px;
  background-color: #fff;
  border-color: olivedrab;
}
.labels span i {
  margin-left: 2px;
}
.preview {
  display: none;
}
.editor-body {
  width: 100%;
  font-size: .10rem;
  display: flex;
}
.editor-left {
    width: 50%;
    height: 100vh;
    margin-top: 5px; 
    background-color: #F5F5F5; 
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
.upload-box,
.coverImg-box,
.file-box {
  position: fixed;
  top: 0;
  z-index: 12;
  width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,.3);
}
.upload-img,
.upload-coverimg,
.upload-file {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 13;
  font-size: .15rem;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 170px;
  background-color: #fff;
}
.upload-img span {
  position: absolute;
}

@media screen  and (max-width:768px){
  .upload-img,
.upload-coverimg,
.upload-file {
  height: 150px;
}
  .editor_all{
     width: 100%;
  }
  .editor-hidden{
    display: none;
  }
  .preview{
    display: block;
  }
  .labels {
    position: relative;
  }
  .labels:hover .labels-item {
    opacity: 1;
  }
  .labels-item {
    opacity: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 0 10x;
    right: 8px;
    top: 100%;
  }
  .labels-item span {
    box-sizing: border-box;
    border-radius:0 ;
    margin-left: 0;
  }
}
</style>
