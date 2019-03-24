<template>
    <!--<div>-->
        <el-card class="box-card">
            <div slot="header" class="clearfix cardTitle">
                <span>渠道商</span>
            </div>
            <div class="cardBody">

                <div class="aplus-staticWrap flex-r" style="flex-wrap: wrap">
                    <div class="aplus-staticWrap-item flex-c">
                        <div>
                        总PV
                        </div>
                        <span>{{tableData[0]?tableData[0].registerNum:0}}</span>
                    </div>
                    <div class="aplus-staticWrap-item flex-c" >
                        <div>
                            总UV
                        </div>
                        <span>{{tableData[0]?tableData[0].authNum:0}}</span>
                    </div>
                    <div class="aplus-staticWrap-item flex-c" >
                        <div>
                            总h5注册
                        </div>
                        <span>{{tableData[0]?tableData[0].authNum:0}}</span>
                    </div>
                </div>

                <div class="cardBodyHeader flex-r" style="justify-content: space-between;margin-top: 60px">
                    <!--<div class="flex-r">-->
                        <!--<div class="cardHeader-searchInp">-->
                            <!--<el-input placeholder="请输入账号名称" v-model="tableForm.loginName" class="searchInpBody">-->
                                <!--<el-button slot="append" icon="el-icon-search" @click="readyAjax"></el-button>-->
                            <!--</el-input>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="peopleCount">
                        <el-form label-width="80px" >
                            <el-form-item label="时间筛选"  style="float: left;">
                                <el-date-picker
                                        v-model="dateTime"
                                        style="height: 32px;line-height: 26px;!important;"
                                        :picker-options="pickerOptions2"
                                        type="daterange"
                                        range-separator="至"
                                        @change="getList"
                                        start-placeholder="开始日期"
                                       end-placeholder="结束日期"
                                        align="right">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="查询方式" style="float: left;margin-left: 50px" >
                                <el-select v-model="type" placeholder="请选择查询方式" class="aplus-sel" @change="getList">
                                    <el-option label="年" value="1111"></el-option>
                                    <el-option label="月" value="22"></el-option>
                                    <el-option label="日" value="33"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-button type="primary" icon="el-icon-refresh" @click="resetAction" class="reloadBtn">重置</el-button>
                        </el-form>
                    </div>
                </div>

                <div class="cardTableWrap" style="margin-top: 10px">
                    <el-table
                            :data="tableData"
                            border
                            v-loading="loading"
                            element-loading-text="拼命加载中"
                            element-loading-spinner="el-icon-loading"
                            class="cardTable"
                            show-summary
                            style="width: 100%">
                        <!--<el-table-column-->

                                <!--prop="id"-->
                                <!--label="ID"-->
                                <!--width="60">-->
                        <!--</el-table-column>-->
                        <el-table-column
                                prop="cd"           
                                label="日期" :show-overflow-tooltip="true"> 
                        </el-table-column>
                        <!--<el-table-column-->
                                <!--prop="loginName"-->
                                <!--label="账号"-->
                                <!--width="120">-->
                        <!--</el-table-column>-->
                        <!--<el-table-column-->
                                <!--prop="linkUrl"-->
                                <!--label="推广链接"-->
                                <!--:show-overflow-tooltip="true">-->
                        <!--</el-table-column>-->
                        <!--<el-table-column-->
                                <!--prop="visitorCount"-->
                                <!--label="访问量">-->
                        <!--</el-table-column>-->
                        <el-table-column
                                prop="pv"
                                label="PV">
                        </el-table-column>
                        <el-table-column
                                prop="uv"
                                label="UV">
                        </el-table-column>
                        <el-table-column
                                prop="h5register"
                                label="h5注册数">
                        </el-table-column>
                    </el-table>

                    <div class="block pagiWrap" style="margin-top: 30px">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[10, 20, 30, 50]"
                                :page-size="pageSize"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                        </el-pagination>
                    </div>
                </div>
            </div>

            <!--<el-dialog-->
                    <!--:title="isAdd?'添加':'编辑'"-->
                    <!--:visible.sync="addDialogVisible"-->
                    <!--width="600px"-->
                    <!--:before-close="handleClose">-->
                <!--<div>-->
                    <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
                        <!--<el-form-item label="账号" prop="loginName">-->
                            <!--<el-input v-model="ruleForm.loginName"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="密码" prop="password">-->
                            <!--<el-input v-model="ruleForm.password"></el-input>-->
                        <!--</el-form-item>-->
                    <!--</el-form>-->
                <!--</div>-->
                <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="addDialogVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>-->
              <!--</span>-->
            <!--</el-dialog>-->


                <!--<el-date-picker-->
                        <!--v-model="value5"-->
                        <!--style="height: 32px;position: absolute;top: 0;right: 0;z-index: 100000"-->
                        <!--type="datetimerange"-->
                        <!--:picker-options="pickerOptions2"-->
                        <!--range-separator="至"-->
                        <!--start-placeholder="开始日期"-->
                        <!--end-placeholder="结束日期"-->
                        <!--align="right"-->
                <!--&gt;-->
                <!--</el-date-picker>-->
            </div>
        </el-card>
        <!--</el-card>-->
    </div>
</template>

<script>
    import axios from "axios";
    import baseDelBtn from "@/components/baseDelBtn";
    // import animate from "animate.css";

    export default {
        name: "channel/channelPage",
        data() {
        return {
          name: "",
          tableForm:{
              loginName:""
          },
          loading:false,
          tableData: [],
          addDialogVisible: false,
          isAdd: false,
          ruleForm: {},
          rules: {
            loginName: [
              { required: true, message: "请输入账号", trigger: "blur" }
            ],
            password: [
              { required: true, message: "请输入密码", trigger: "blur" }
            ],
          },

            // 渠道商列表分页
            currentPage:1,
            pageSize:10,
            peopleCountNum:0,
            total:0,

            //时间筛选
            dateTime:[],

            // dialog控制
            dialogVisible:false,


            // 当前使用行数据
            actionRow:{},

            rankList:[],

            //渠道商会员分页
            pageSizeMember:10,
            currentPageMember:1,
            totalMember:0,

            tableDataMember:[],
            activeName:"registerCount",

            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            type:"33"
        };
      },
      mounted() {
//        this.getList();
      },
        components:{
            baseDelBtn
        },
        watch:{
          "tableForm.loginName":function (n) {
              if(!n){
                  this.readyAjax()
              }
          }
        },
      methods: {
          getList(){
              let params = {
                  startTime:"",
                  endTime:""
              };
                if(this.dateTime.length){
                    params.startTime = this.$toolkit.formatTime(this.dateTime[0],false);
                    params.endTime=this.$toolkit.formatTime(this.dateTime[1],false);
                }
            this.$api.channel.channelList_getList({
                pageNum:this.currentPage,
                pageSize:this.pageSize,
                ...params,
                type:this.type
            }
            ).then((res)=>{
                this.tableData=res.data.list
                this.total=res.data.total;
//              this.drawLine();
            })
            // axios.get(this.$global.HOST_API+"channel/list", {
            //   params: {
            //     type:this.type,
            //     ...params,
            //     pageSize:this.pageSize,
            //     pageNum:this.currentPage
            //   },
            //   headers:{
            //     token:111
            //   }
            // }).then((res)=>{
            //
            // })
          },
          readyAjax(){
            this.currentPage=1;
            this.pageSize=10;
            this.getList()
          },
          handleCurrentChange(val){
            this.currentPage=val;
            this.getList();
          },
          handleSizeChange(val){
            this.pageSize=val;
            this.getList();
          }
      },
      created() {},
      destoryed() {}
};
</script>

<style  lang="less">
    @lineH23:23px;
    .peopleCount{
        line-height: 32px;
        font-size: 14px;
        .peopleCountNum{
            color:red
        }
    }
    .el-dialog__title{
        font-weight: bold;
        font-size: 14px;
    }
    @keyframes dialog-fade-in {
        0% {
            transform: translate3d(100%, 0, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
    }

    @keyframes dialog-fade-out {
        0% {
            transform: translate3d(0%, 0, 0);
            opacity: 1;
        }
        100% {
            transform: translate3d(100%,0, 0);
            opacity: 0;
        }
    }
    .memberDialog{
        /*margin:0 25%;*/
        /*overflow: hidden;*/
        .el-dialog{
            float: right;
            height: calc( 100% - 71px);
            margin: 0!important;
            z-index:1000000;
            /*left: 50%;*/
            /*margin: 0 50%!important;*/
            /*transition: all 10s;*/
            margin-top: 71px!important;
            position: relative;
        }
        .el-dialog__title{
            display: block;
            width: 100%;
            text-align: center;
        }
        .closeIcon{
            position: absolute;
            top: 20px;
            font-size: 25px;
            left: 20px;
            color:#409EFF;
            cursor: pointer;
        }
    }
    .el-date-editor{
        .el-icon-date{
            line-height: @lineH23;
        }
        .el-range-separator{
            line-height: @lineH23;
        }
        /*.el-range-separator,.el-icon-time{*/
            /*line-height: 23px!important;*/
        /*}*/
    }
    .tabCard{
        margin-top: 80px;
        position: relative;
        .el-tabs__nav{
            div{
                font-size: 12px;
                font-weight: bold;
            }
        }
        .el-tabs__content{
            /*width: 70%;*/
            .el-tab-pane{
                /*float: left!important;*/
                /*width: %;*/
            }
            #myChart{
                &>div:first-child{
                    width: 100%!important;
                }
                canvas{
                    width: 100%!important;
                }
            }
        }
    }
    .rankBox{
        float: right;
        width: 30%;
        label{
            font-size: 17px;
            font-weight: bold;
        }
        .rankListItem{
            /*line-height: 50px;*/
            height: 50px;
            align-items: center;
            flex-direction: row;
            display: flex;
            justify-content: space-between;
            .rankIndex{
                border-radius: 50%;
                background: gray;
                width: 20px;
                color:white;
                font-size: 12px;
                text-align: center;
                line-height: 20px;
            }
            .rankLabel{
                width: 100px;
                margin-left:20px
            }
            .rankCount{
                font-size: 14px;
            }
        }
    }
    .el-table__footer-wrapper{
        td{
            .cell{
                text-align: center;
            }
        }
    }
    .aplus-staticWrap{
        height: 120px;
        align-items: center;
        /*margin-top: -20px;*/
        .aplus-staticWrap-item{
            box-sizing: border-box;
            height: 60px;
            justify-content: center;
            flex:1;
            color:black;
            text-align: center;
            &:not(:first-child){
                border-left:1px solid gray;
            }
            &>div{
                font-size: 16px;
                font-weight: bold;
            }
            &>span{
                font-size: 15px;
                display: inline-block;
                margin-top: 10px;
            }
        }
    }
    .aplus-sel{
        .el-input__inner{
            height: 32px;
        }
    }
    .el-form-item__label{
        line-height: 32px   ;
    }
    .el-form-item{
        .el-form-item__label{
            margin-top: 3px;
        }
    }
    .reloadBtn{
        padding: 0 10px;
        margin-left: 30px;
        margin-top: 4px;
        height: 32px;
        line-height: 32px;
    }
</style>
