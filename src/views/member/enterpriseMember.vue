<template>
    <div>
        <el-card class="box-card affilateWrap memberWrap">
            <div slot="header" class="clearfix cardTitle">
                <span>企业会员</span>
            </div>

            <div class="cardBody">
                <!--<el-row type="flex" class="row-bg" style="flex-wrap: wrap" :gutter="50">
                    <el-col :span="7">
                        <div class="flex-r global-childItem">
                            <span class="smallSpan bigSpan" style="width: 80px!important;">订单日期  </span>
                            <el-date-picker

                                    style="height: 32px;width: 100%"
                                    v-model="tableForm.time"
                                    class="dateChoose"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="flex-r global-childItem">
                            <span class="smallSpan" style="width: 80px!important;">会员来源</span>
                            <el-select  v-model="tableForm.channelId"  class="aplus-sel" placeholder="请选择会员来源" style="width: 100%">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="(item,index) in vipChannelList"
                                        :key="index"
                                        :label="item.userName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="flex-r global-childItem">
                            <span class="smallSpan" style="width: 80px!important;"  >会员身份</span>
                            <el-select  v-model="tableForm.label"   class="aplus-sel" placeholder="请选择会员身份" style="width: 100%">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="(item,index) in bodyStatus"
                                        :key="index"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg marT20" style="flex-wrap: wrap" :gutter="50">
                    <el-col :span="7" style="padding-right: 35px">
                        <div class="flex-r global-childItem">
                            <span  class="smallSpan bigSpan" style="width: 80px!important;">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名  </span>
                            <el-input placeholder="请输入姓名" v-model="tableForm.userName"  class="aplus-norInp" style="width: 100%">
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :span="7" style="padding-right: 35px">
                        <div class="flex-r global-childItem">
                            <span  class="smallSpan bigSpan" style="width: 80px!important;">手 机 号  </span>
                            <el-input placeholder="请输入手机号" v-model="tableForm.phone"  class="aplus-norInp" style="width: 100%">
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="flex-r">
                            <el-button type="primary" icon="el-icon-search" class="reloadBtn marL10" @click="readyAjax">查询</el-button>
                            <el-button type="default" icon="el-icon-refresh" class="reloadBtn resetBtns" @click="reset">重置</el-button>
                        </div>
                    </el-col>
                </el-row>-->

                <div class="cardBodyHeader">
                    <div class="topTableForm">
                        <!--<div class="topTableForm-item topTableForm-timeSel">-->
                            <!--<span>订单日期  : </span>-->
                             <!--<el-date-picker-->
                                    <!--style="height: 32px"-->
                                    <!--v-model="tableForm.time"-->
                                    <!--class="dateChoose"-->
                                    <!--type="daterange"-->
                                    <!--range-separator="至"-->
                                    <!--start-placeholder="开始日期"-->
                                    <!--end-placeholder="结束日期">-->
                            <!--</el-date-picker>-->
                        <!--</div>-->
                        <div class="topTableForm-item" style="padding-right: 10px!important;">
                            <span>会员来源 : </span>
                             <el-select  v-model="tableForm.channelId"  class="aplus-sel" placeholder="请选择会员来源" style="width: 100%">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="(item,index) in vipChannelList"
                                        :key="index"
                                        :label="item.userName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="topTableForm-item">
                            <span>会员身份 : </span>
                             <el-select  v-model="tableForm.label"   class="aplus-sel" placeholder="请选择会员身份" style="width: 100%">
                                <!--<el-option label="全部" value=""></el-option>-->
                                <el-option
                                        v-for="(item,index) in bodyStatus"
                                        :key="index"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="topTableForm-item">
                            <span>姓 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 :</span>
                            <el-input placeholder="请输入姓名" v-model="tableForm.userName"  class="aplus-norInp">
                            </el-input>
                        </div>
                        <div class="topTableForm-item">
                            <span>手&nbsp;&nbsp;机&nbsp;&nbsp;号 :</span>
                            <el-input placeholder="请输入姓名" v-model="tableForm.phone"  class="aplus-norInp">
                            </el-input>
                        </div>
                        <div class="topTableForm-item-actions">
                            <el-button type="primary" icon="el-icon-search" class="reloadBtn" @click="readyAjax">查询</el-button>
                            <el-button type="default" icon="el-icon-refresh" class="reloadBtn resetBtns" @click="reset">重置</el-button>
                        </div>
                    </div>
                </div>



                <div class="tabCardInner">
                    <div class="listContent marT60">
                        <el-table
                                border
                                class="cardTable marT20"
                                :data="dataList"
                                tooltip-effect="dark"
                                style="width: 100%" >
                            <el-table-column
                                    prop="lianPayNum"
                                    label="会员信息	" width="250">
                                <template slot-scope="scope">
                                    {{(scope.row.userName?scope.row.userName:'未知') +' / '+ scope.row.phone }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="channelName"
                                    label="会员来源" :formatter="$toolkit.transForNo">

                            </el-table-column>
                            <el-table-column
                                    prop="label"
                                    label="会员身份"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <span style="display: inline-block;width: 80px;border-radius: 5px;color:white" :style="{'backgroundColor':['rgba(0,0,0,0.2)','green','red'][Number(scope.row.label-1)]}">{{scope.row.label==1?'普通用户':scope.row.label==2?'优质用户':'逾期用户'}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="会员状态"
                                    show-overflow-tooltip :formatter="formats">
                            </el-table-column>
                            <el-table-column
                                    prop="authStatus"
                                    label="认证状态"
                                    show-overflow-tooltip :formatter="formats">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作" width="460">
                                <template slot-scope="scope">
                                    <!--<el-button size="mini" plain class="aplus-pribtn">查看认证信息</el-button>-->
                                    <el-button size="mini" plain class="aplus-pribtn"  @click="$router.push(`/userInfoDetail/${scope.row.id}/${null}/${scope.row.userName}/${scope.row.phone}`)"   v-if="btnStr.indexOf('查看认证信息')>-1">查看认证信息</el-button>
                                    <el-button size="mini" plain class="aplus-pribtn" @click="showMemberDetail(scope.row)">会员详情</el-button>
                                    <el-dropdown split-button type="primary"  split-button="true" :divided="true" class="moreActionSel" >
                                        <span>更多操作</span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item @click.native="resetPas(scope.row)"  v-if="btnStr.indexOf('重置密码')>-1">重置密码</el-dropdown-item>
                                            <el-dropdown-item  @click.native="showMemberSetBlack(scope.row)"   v-if="btnStr.indexOf('拉黑')>-1&&scope.row.status==1||scope.row.status==4">拉黑</el-dropdown-item>
                                            <el-dropdown-item  @click.native="memberRemoveBlack(scope.row)"   v-if="btnStr.indexOf('拉黑')>-1&&scope.row.status==2">移除黑名单</el-dropdown-item>
                                            <el-dropdown-item  @click.native="resetBankCard(scope.row)"   v-if="btnStr.indexOf('重置银行卡')>-1">重置银行卡</el-dropdown-item>
                                            <!--<el-dropdown-item  @click.native="showChangeBankCard(scope.row)"   v-if="btnStr.indexOf('修改银行卡')>-1">修改银行卡</el-dropdown-item>-->
                                        </el-dropdown-menu>
                                    </el-dropdown>

                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="block pagiWrap" style="margin-top: 20px">
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
            </div>


            <!--拉黑-->
            <el-dialog
                    title="拉黑"
                    :visible.sync="refuseVisible"
                    width="700px">
                <div>
                    <div class="form-body">
                        <el-form ref="refuseForm" :model="refuseForm"  :rules="refuseRules" label-width="0px" class="demo-ruleForm marT30">
                            <el-form-item  prop="refuse">
                                <el-input v-model.trim="refuseForm.refuse" placeholder="请输入拉黑理由" type="textarea" :rows="8"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="refuseVisible = false">取 消</el-button>
                <el-button type="primary" @click="memberSetBlack('refuseForm')">确 定</el-button>
              </span>
            </el-dialog>


            <!--结清密码设置弹窗-->
            <el-dialog
                    title="修改银行卡"
                    :visible.sync="changeVisible"
                    width="600px"
                    center>
                <div>
                    <div class="form-body">
                        <el-form :model="changeForm" :rules="changeRules" ref="changeForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="银行卡名称" prop="bankName">
                                <el-input v-model.trim="changeForm.bankName" placeholder="请输入银行卡名称"></el-input>
                            </el-form-item>
                            <el-form-item label="银行卡号码" prop="bankNo">
                                <el-input v-model.trim="changeForm.bankNo" placeholder="请输入银行卡号码"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="changeVisible = false" class="cancelBtn">关 闭</el-button>
                <el-button type="primary"  class="setBtn" @click="changeBankCard('changeForm')">确 定</el-button>
              </span>
            </el-dialog>


            <!--会员详情弹窗-->
            <el-dialog
                    title="会员详情"
                    :visible.sync="memberDetailVisible"
                    width="70%"
                    ref="memberDialog"
                    style="height: 100%;"
                    class="memberDialog">
                <div>
                        <div class="memberDialog-body">
                            <div class="head-body-info">
                                <div class="title">
                                    主要信息
                                </div>
                                <el-row>
                                    <el-col :span="6">
                                        会员名称 : {{detailInfo.userName}}
                                    </el-col>
                                    <el-col :span="6">
                                        电话号码 : {{detailInfo.phone}}
                                    </el-col>
                                    <el-col :span="6">
                                        会员来源 : {{detailInfo.channelName?detailInfo.channelName:'无'}}
                                    </el-col>
                                    <el-col :span="6">
                                        会员身份 : {{detailInfo.label==1?'普通用户':detailInfo.label==2?'优质用户':'逾期用户'}}
                                    </el-col>
                                </el-row>
                            </div>
                    </div>

                    <div class="marT30 tabHeaderWrap" >
                        <div class="whiteSide">

                        </div>
                        <el-tabs v-model="activeName" class="memberDialog-tab" type="card" @tab-click="handleClick">
                            <el-tab-pane label="待还款订单" name="name1">
                                <memberBaseTab :data="waitPayData"></memberBaseTab>
                            </el-tab-pane>
                            <el-tab-pane label="已还款订单" name="name2">
                                <memberBaseTab :data="payedData"></memberBaseTab>
                            </el-tab-pane>
                            <el-tab-pane label="逾期订单" name="name3">
                                <memberBaseTab :data="overdueData"></memberBaseTab>
                            </el-tab-pane>
                            <el-tab-pane label="其他订单" name="name4">
                                <memberBaseTab :data="otherData"></memberBaseTab>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-dialog>


        </el-card>

    </div>
</template>

<script>
    import memberBaseTab from "@/components/memberBaseTab";
    import { mapState } from 'vuex'
  export default {
    name: "channelList",
    data() {
      return {
        tableForm:{
          time:"",
          channelId:"",
          phone:"",
          userName:"",
          label:""
        },

        currentPage:1,
        pageSize:10,
        dataList:[],
        vipChannelList:[],
        bodyStatus:[{
          name:"全部",
          id:""
        },{
          name:"普通用户",
          id:1
        },{
          name:"优质用户",
          id:2
        },{
          name:"逾期用户",
          id:3
        }],
        refuseForm:{
          refuse:""
        },
        refuseVisible:false,
        refuseRules: {
          refuse: [
            { required: true, message: '请输入拉黑理由', trigger: 'blur' }
          ],
        },
        changeForm:{
          bankName:"",
          bankNo:""
        },
        changeVisible:false,
        changeRules: {
          bankName: [
            { required: true, message: '请输入银行卡名称', trigger: 'blur' }
          ],
          bankNo: [
            { required: true, message: '请输入银行卡号', trigger: 'blur' }
          ],
        },
        memberDetailVisible:false,
        activeName:'name1',
        detailInfo:{},


        otherData:[],
        overdueData:[],
        waitPayData:[],
        payedData:[]
        // quickFenpei:
      };
    },
    mounted() {
      this.getVipChannelList()
      this.readyAjax()
    },
    components:{
      memberBaseTab
    },
    computed: mapState([
      // map this.count to store.state.count
      'btnStr'
    ]),
    watch:{
      "tableForm.phone":function(n){
        if(!n){
          this.readyAjax()
        }
      },
      "tableForm.userName":function(n){
        if(!n){
          this.readyAjax()
        }
      }
    },
    methods: {

      readyAjax(){
        this.currentPage=1;
        this.pageSize=10;
        // if(this.tableForm.time){
        //   this.tableForm.gmtDatetime=this.$toolkit.formatTime(this.tableForm.time[0],false)+'~'+this.$toolkit.formatTime(this.tableForm.time[1],false)
        // }
        this.getList()
      },
      reset(){
        for(let i in this.tableForm){
          if(i!="status"){
            this.tableForm[i]=""
          }
        }
        this.readyAjax()
      },
      handleCurrentChange(val){
        this.currentPage=val;
        this.getList()
      },
      handleSizeChange(val){
        this.pageSize=val;
        this.getList()
      },
      getList(){
        this.$api.member.getEnderPriseList({
          ...this.tableForm,
          current:this.currentPage,
          size:this.pageSize
        }).then((res)=>{
          this.dataList=res.data.list;
          this.total=res.data.total;
        })
      },
      getVipChannelList(){
        this.$api.member.getVipChannelList().then((res)=>{
          for(let i in res.data){
            this.vipChannelList.push({
              userName:res.data[i].loginName,
              id:res.data[i].id
            })
          }
        })
      },
      formats(row,col){
		if(col.property=='status'){
			switch(row.status){
	          case 1:return "正常";break;
	          case 2:return "黑名单";break;
	          case 3:return "禁用";break;
	          case 4:return "被拒绝";break;
	        }
			return
		}
		
		if(col.property=='authStatus'){
			switch(row.authStatus){
	          case 1:return "已认证";break;
	          case 0:return "未认证";break;
	        }	
	        return 
		}
		
		
        
      },
      resetPas(row){
        this.$toolkit.showConfrim('确定要重置此用户的密码吗？','提示').then(()=>{
          this.$api.member.resetPas({
            userId:row.id
          }).then(()=>{
            this.$message.success("重置密码成功！");
            this.readyAjax()
          })
        })
      },
      showMemberSetBlack(row){
        this.actionRow={...row};
        this.refuseVisible=true;
      },
      memberRemoveBlack(row){
        this.$toolkit.showConfrim('确定要将此用户移出黑名单吗？','提示').then(()=>{
          this.$api.member.memberRemoveBlack({
            id:row.id
          }).then(()=>{
            this.$message.success("移除黑名单成功！");
            this.readyAjax()
          }).catch((e)=>{
            this.$message.success(e.msg);
          })
        })
      },
      memberSetBlack(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.member.memberSetBlack({
              ...this.refuseForm,
              id:this.actionRow.id
            }).then(()=>{
              this.$message.success("拉黑成功！");
              this.refuseVisible=false;
              this.readyAjax()
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetBankCard(row){
        this.$toolkit.showConfrim('确定要重置此用户银行卡吗？','提示').then(()=>{
          this.$api.member.resetBankCard({
            userId:row.id
          }).then(()=>{
            this.$message.success("重置银行卡成功！");
            this.readyAjax()
          })
        })
      },
      showChangeBankCard(row){
        this.actionRow={...row};
        this.changeVisible=true;
      },
      changeBankCard(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.member.memberChangeBankCard({
              ...this.changeForm,
              userId:this.actionRow.id
            }).then(()=>{
              this.$message.success("修改银行卡成功！");
              this.changeVisible=false;
              this.readyAjax()
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      showMemberDetail(row){
        this.memberDetailVisible=true;
        this.actionRow={...row};
        this.getMemberDetail(row.id);
        this.getMemberHistoryOrders(row.phone)
      },
      getMemberDetail(userId){
        this.$api.member.getMemberDetail({userId}).then((res)=>{
            this.detailInfo=res.data
        }).catch((res)=>{
        })
      },
      getMemberHistoryOrders(phone){
        this.$api.member.getMemberHistoryOrders({
          phone,
          pageNo:1,
          pageSize:1000
        }).then((res)=>{
           res.data.list.map((item)=>{
             switch (item.orderStatus) {
               case 3:this.waitPayData.push(item);break;
               case 6:this.payedData.push(item);break;
               case 4:this.overdueData.push(item);break;
               case 5:this.overdueData.push(item);break;
               default:this.otherData.push(item)
             }
           })
        })
      }



    },
    created() {},
    destoryed() {}
  };
</script>

<style  lang="less">
    @import url('../../assets/css/commonTable.less');
    @import url('../../assets/css/memberDialog.less');
        .tabHeaderWrap{
            position: relative;
            .whiteSide{
                position: absolute;
                background: white;
                top:22px;
                left: 0;
                z-index: 1;
                width: 380px;
                height: 20px;
            }
        }

</style>
