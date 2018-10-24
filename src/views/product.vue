<template>
    <div>
        <el-button type="primary" class="new" plain @click="newProduction">新建作品</el-button>
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
            <el-dialog :title="title" :visible.sync="dialogFormVisible">
                <el-form :model="form" v-show="formVisible">
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
                <file-load v-show="newUpload"></file-load>
                <div slot="footer" class="dialog-footer" v-if="update">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="updateProdution">确 定</el-button>
                </div>
                <div slot="footer" class="dialog-footer" v-else>
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="nextStep" v-show="!complete">下一步</el-button>
                    <el-button type="primary" @click="completeProduction" v-show="complete">完 成</el-button>
                </div>
            </el-dialog>
            <el-dialog title="上传文件" :visible.sync="uploadVisible" :before-close="clearFiles">
                <file-load :currentId="currentId" ref="load"></file-load>
            </el-dialog>
        </template>
    </div>
</template>

<script>
import fileLoad from "@/components/FileLoad";
import * as util from "../assets/util.js";
export default {
    name: "product",
    props: ['data'],
    components: {
        fileLoad
    },
    data() {
        return {
            pageSize: 2,
            total: 0,
            list: [],
            dialogFormVisible: false,
            formVisible: false,
            form: {
                productName: "",
                idProduction: "",
                productAuthor: "",
                productDesc: "",
                directory: ""
            },
            formLabelWidth: "120px",
            uploadVisible: false,
            title: "编辑作品",
            update: true,
            newUpload: false,
            complete: false,
            currentId: ""
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
            this.formVisible = true;
            this.form = row;
        },
        cancel() {
            this.revert();

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
                        this.formVisible = false;
                        this.$message.info("作品修改成功！");
                    } else {
                        this.$message.info("已经取消修改！");
                    }
                    this.form = [];
                })
                .catch(error => {
                    this.dialogFormVisible = false;
                    this.formVisible = false;
                    console.log(error);
                });
        },
        // 上传文件
        handleUpload(index, row) {
            this.currentId = row.idProduction;
            this.uploadVisible = true;
        },
        handleDelete(index, row) {
            this.$confirm("确认删除该作品?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    util
                        .request({
                            url: "/products/" + row.idProduction,
                            method: "delete"
                        })
                        .then(res => {
                            if (res.code == 1) {
                                this.$message({
                                    type: "success",
                                    message: "删除成功!"
                                });
                            } else {
                                this.$message({
                                    type: "error",
                                    message: "删除失败!"
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        newProduction() {
            this.title = "新建作品";
            this.dialogFormVisible = true;
            this.formVisible = true;
            this.update = false;
        },
        nextStep() {
            if (this.form.productName == "" || this.form.productAuthor == "") {
                this.$message.warning("作品名称及作者不能为空，请输入！");
            } else {
                this.formVisible = false;
                this.complete = true;
                this.newUpload = true;
            }
        },
        completeProduction() {
            util
                .request({
                    url: "/products/create",
                    method: "post",
                    data: this.form
                })
                .then(res => {
                    if (res.code == 1) {
                        this.dialogFormVisible = false;
                        this.$message.success("新建作品成功！");
                    } else {
                        this.$message.info("已经取消新建！");
                    }
                    this.revert();
                })
                .catch(error => {
                    this.revert();
                    console.log(error);
                });
        },
        revert() {
            this.form = [];
            this.dialogFormVisible = false;
            this.formVisible = false;
            this.uploadVisible = false;
            this.update = true;
            this.newUpload = false;
            this.complete = false;
        },
        clearFiles(done){
            this.$refs.load.clearFiles();
            return true;
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