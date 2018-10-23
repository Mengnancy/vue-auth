<template>
    <div>
        <el-button type="primary" class="new" plain>新建作品</el-button>
        <template>
            <!-- 表格组件 -->
            <el-table :data="list" height="250" border style="width: 100%">
                <el-table-column prop="productName" label="作品名称" width="180">
                </el-table-column>
                <el-table-column prop="productAuthor" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="productDesc" label="作品描述">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="400">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" @click="handleUpload(scope.$index, scope.row)">上传</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <el-pagination layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="fetchDataWithPage">
            </el-pagination>
            <!-- 提交作品简介编辑表单 -->
            <el-dialog title="作品编辑" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="作品名称" :label-width="formLabelWidth">
                        <el-input v-model="form.productName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" :label-width="formLabelWidth">
                        <el-input v-model="form.productAuthor" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="作品描述" :label-width="formLabelWidth">
                        <el-input v-model="form.productDesc" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="updateProdution">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog title="上传文件" :visible.sync="uploadVisible">
                <file-load></file-load>
            </el-dialog>
        </template>
    </div>
</template>

<script>
import fileLoad from "@/components/FileLoad";
import * as util from "../assets/util.js";
export default {
    name: "product",
    components: {
        fileLoad
    },
    data() {
        return {
            pageSize: 2,
            total: 0,
            list: [],
            dialogFormVisible: false,
            form: {
                productName: "",
                idProduction: "",
                productAuthor: "",
                productDesc: "",
                directory: ""
            },
            formLabelWidth: "120px",
            uploadVisible: false
        };
    },
    methods: {
        fetchData() {
            util
                .request({
                    url: "/pageProducts",
                    method: "GET",
                    params: { pageNo: 1, pageSize: 2 }
                })
                .then(res => {
                    if (res.code == 1) {
                        this.total = res.data.total;
                        this.pageSize = res.data.pageSize;
                        this.list = res.data.list;
                    } else {
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        fetchDataWithPage(currentPage) {
            util
                .request({
                    url: "/pageProducts",
                    method: "GET",
                    params: { pageNo: currentPage, pageSize: 2 }
                })
                .then(res => {
                    if (res.code == 1) {
                        this.total = res.data.total;
                        this.pageSize = res.data.pageSize;
                        this.list = res.data.list;
                    } else {
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleEdit(index, row) {
            this.dialogFormVisible = true;
            this.form = row;
        },
        cancel() {
            this.dialogFormVisible = false;
            this.$message.info("已经取消修改！");
        },
        updateProdution() {
            util
                .request({
                    url: "/products",
                    method: "patch",
                    data: this.form
                })
                .then(res => {
                    if (res.code == 1) {
                        this.dialogFormVisible = false;
                        this.$message.info("作品修改成功！");
                    } else {
                        this.$message.info("已经取消修改！");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // 上传文件
        handleUpload(index, row) {
            this.uploadVisible = true;
        }
    },
    created() {
        this.fetchData();
    }
};
</script>

<style>
.new {
    float: left;
}
</style>