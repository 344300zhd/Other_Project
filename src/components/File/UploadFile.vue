<template>
  <div class="relate-image">
    <!-- 上传的图片列表 -->
    <div class="image-list">
      <div class="list-item" v-for="(item, index) in imgList" :key="item.uid">
        <!-- 编辑 -->
        <img v-if="item.type === 'origin'" src="" alt="编辑相关图片" />
        <!-- 新增 -->
        <img v-else :src="item.url" alt="新增相关图片" />
        <!-- 预览 -->
        <div class="item-hover">
          <a-icon type="eye" @click="openPreview(index)" style="margin-right: 10px"></a-icon>
          <a-popconfirm
           title="确定删除该图片？"
           ok-text="确定"
           cancel-text="取消"
           @confirm="deleteImg(index)">
             <a-icon type="delete"></a-icon>
          </a-popconfirm>  
        </div>
      </div>
      <!-- 上传组件，最多上传5张图片 -->
      <a-upload
      v-if="imgList.length < 5"
      list-type="picture-card"
      class="avatar-uploader"
      accept=".jpg,.png"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      :customRequest="customUpload"
      @change="changeFile">
        <div>
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">上传</div>
        </div>
      </a-upload>
    </div>
    <!-- 预览图片 -->
    <a-modal
     :visible="previewVisible"
     :footer="null"
     @cancel="closePreview">
       <img :src="previewImg" style="width:95%" alt="">
     </a-modal>
  </div>
</template>

<script>
export default {
  props:{},
  name: "uploadFile",
  data() {
    return {
      loading: false,
      /** 上传图片列表 **/
      imgList: [],
      /** 预览 **/
      previewVisible:false,
      /** 预览图片 **/
      previewImg:"",
    };
  },
  watch:{
    imgList(nval){
      if(nval){
        /** 传回父组件 **/
        this.$emit("fileList",{fileList:this.imgList})
      }
    }
  },
  methods: {
    /** 图片预览 **/
    openPreview(index){
      /** 新增图片预览 **/
      if(this.imgList[index].type === "upload"){
        this.previewImg = this.imgList[index].url
      }else{
        /** 编辑图片预览 **/  
        this.previewImg = ""
      }
      this.previewVisible = true
    },
    /** 删除图片 **/
    deleteImg(index){
      this.imgList.splice(index,1)
    },
    /** 关闭图片预览 **/
    closePreview(){
      this.previewVisible = false
    },
    /** 图片上传前限制 **/
    beforeUpload(file) {
      const { type, size } = file;
      const limitType = type === "image/jpeg" || type === "image/png";
      if (!limitType) {
        this.$message.error("请上传jpg,png格式图片！");
      }
      const limitSize = size / 1024 / 1024 < 2;
      if (!limitSize) {
        this.$message.error("图片不可大于2MB！");
      }
      return limitType && limitSize;
    },
    /** 自定义上传获取文件内容 **/
    async customUpload({ file }) {
      try {
        const url = await this.fileToBase64(file);
        const { name, uid } = file;
        let obj = {
          type: "upload",
          uid,
          name,
          url,
          file,
        };
        this.imgList.push(obj);
      } catch (error) {
        this.$message.error(error.message);
      }
    },
    /** 获取base64图片地址 **/
    fileToBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve, reject) => {
        reader.onload = function () {
          if (this.result) {
            resolve(this.result);
          } else {
            reject("图片转换错误！");
          }
        };
      });
    },
    /** 选择文件 **/
    changeFile({ file }) {
      if (file.status === "loading") {
        this.loading = true;
        return;
      }
      if (file.status === "done") {
        this.loading = false;
        return;
      }
      if (file.status === "error") {
        this.$message.error(file.error);
        return;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
/deep/.ant-upload-picture-card-wrapper{
  width: 104px;
}
.relate-image {
    display: flex;
    width: 100%;
    .image-list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .list-item {
            position: relative;
            width: 104px;
            height: 104px;
            margin: 0 8px 8px 0;
            padding: 8px;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
            }
            .item-hover {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 9;
                display: none;
                justify-content: center;
                align-items: center;
                width: calc(100% - 16px);
                height: 88px;
                color: #fff;
                background: rgba(0, 0, 0, .2);
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
            &:hover .item-hover {
                display: flex;
            }
        }
    }
}
</style>
