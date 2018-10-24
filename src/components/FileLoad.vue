<template>
  <div>
      <el-upload
        class="upload-demo"
        action="/access/multiUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :data="data"
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
  </div>
</template>

<script>
export default {
  name:'fileLoad',
  props:['currentId'],
  data() {
      return {
        data:{currentId:this.currentId},
        fileList: [],
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      clearFiles(){
        console.info("clear");
        this.fileList = [];
        return true;
      }
    },
  }
</script>

<style scoped>

</style>
