<template>
    <div>
        这是产品列表页面
        <!-- <file-load></file-load> -->
        <template>
            <!-- 表格组件 -->
            <el-table :data="list" height="250" border style="width: 100%">
                <el-table-column prop="productName" label="作品名称" width="180">
                </el-table-column>
                <el-table-column prop="productAuthor" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="productDesc" label="作品描述" width="200">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
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
            list: []
        };
    },
    methods: {
        fetchData() {
            util.request({
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
            console.info(currentPage);
            util.request({
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
        }
    },
    created() {
        this.fetchData();
    }
};
</script>

<style>
</style>