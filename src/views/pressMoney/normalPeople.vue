<template>
    <div>
        <el-card class="box-card affilateWrap">
            <div slot="header" class="clearfix cardTitle">
                <span>正常待还款客户</span>
            </div>
            <!--<span class="smallSpan">认证状态</span>-->
            <!--<el-select  v-model="tableForm.authStatus"  @change="readyAjax" class="aplus-sel"    placeholder="请选择沟通状态" style="width: 100%">-->
            <!--<el-option-->
            <!--v-for="item in authList"-->
            <!--:key="item.value"-->
            <!--:label="item.name"-->
            <!--:value="item.id">-->
            <!--</el-option>-->
            <!--</el-select>-->

            <div class="cardBody">
                <!--<el-row type="flex" class="row-bg" style="flex-wrap: wrap" :gutter="50">
                    <el-col :span="7">
                        <div class="flex-r global-childItem">
                            <span class="smallSpan bigSpan" style="width: 80px!important;">应还款时间  </span>
                            <el-date-picker
                                    style="height: 32px;"
                                    v-model="tableForm.time"

                                    class="dateChoose"
                                    type="daterange"
                                    range-separator="至"
                                    @change="readyAjax"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="flex-r global-childItem">
                            <span  class="smallSpan">手&nbsp; 机&nbsp; 号</span>
                            <el-input placeholder="请输入电话号码"  v-model="tableForm.phone" class="aplus-norInp"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="flex-r global-childItem">
                            <span  class="smallSpan">姓 &nbsp;&nbsp;&nbsp;&nbsp;名</span>
                            <el-input placeholder="请输入姓名" v-model="tableForm.name"  class="aplus-norInp">
                                <el-button slot="append" icon="el-icon-search" @click="readyAjax"></el-button>
                            </el-input>
                        </div>
                    </el-col>
                </el-row>
                <div style="text-align: right;margin-top: 20px">
                    <el-button type="primary" icon="el-icon-search" class="reloadBtn" @click="readyAjax">查询</el-button>
                    <el-button type="default" icon="el-icon-refresh" class="reloadBtn" @click="reset">重置</el-button>
                </div>-->


                <div class="cardBodyHeader">
                    <div class="topTableForm">
                        <div class="topTableForm-item topTableForm-timeSel  ">
                            <span>应还款时间: </span>
                            <el-date-picker
                                    style="height: 32px;"
                                    v-model="tableForm.time"
                                    class="dateChoose"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="topTableForm-item">
                            <span>手机号 : </span>
                            <el-input placeholder="请输入电话号码"  v-model="tableForm.phone" class="aplus-norInp"></el-input>
                        </div>
                        <div class="topTableForm-item">
                            <span>姓 名 :</span>
                            <el-input placeholder="请输入姓名" v-model="tableForm.name"  class="aplus-norInp">
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
	                    <div class="flex-r" style="justify-content: space-between;padding: 10px;">
	                        <div>
	                            <el-button size="mini" type="primary"  @click="multiAction"   v-if="btnStr.indexOf('分配')>-1">分配</el-button>
	                            <el-button size="mini" type="primary" @click="multiAction(1)"   v-if="btnStr.indexOf('退回')>-1">退回</el-button>
	                        </div>
	                        <div class="flex-r" style="align-items: center">
	                            <div>
	                                <span class="totalInfo">应还款总金额</span> : <span style="color:red">{{borrowMoney}}</span>
	                            </div>
	                            <div style="margin-left: 30px">
	                                <span class="totalInfo">总人数</span> : <span style="color:red">{{totalPeople}}</span>
	                            </div>
	                        </div>
	                    </div>
	                    <el-table
	                            border
	                            class="cardTable marT20"
	                            ref="multipleTable"
	                            :data="overdueList"
	                            tooltip-effect="dark"
	                            style="width: 100%"
	                            @selection-change="handleSelectionChange">
	                        <el-table-column
	                                type="selection"
	                                width="55">
	                        </el-table-column>
	                        <el-table-column
	                                prop="lianPayNum"
	                                label="贷款单号	">
	                        </el-table-column>
	                        <el-table-column
	                                prop="user.userName"
	                                label="姓名">
	                        </el-table-column>
	                        <el-table-column
	                                prop="user.phone"
	                                label="电话"
	                                show-overflow-tooltip>
	                            <!--<template slot-scope="scope">-->
	                                    <!--{{scope.row.user.phone.substr(0, 3) + '****' + scope.row.user.phone.substr(7)}}-->
	                            <!--</template>-->
	                        </el-table-column>
	                        <el-table-column
	                                prop="limitDays"
	                                label="贷款期限	"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="borrowMoney"
	                                label="	借款金额"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="realMoney"
	                                label="打款金额"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="needPayMoney"
	                                label="	应还金额"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="giveTime"
	                                label="	打款时间"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="limitPayTime"
	                                label="	应还款时间"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                prop="gmtDatetime"
	                                label="	分配状态"
	                                show-overflow-tooltip :formatter="formats">
	                        </el-table-column>
	                        <el-table-column
	                                prop="pressMoneyManName"
	                                label="	分配人员"
	                                show-overflow-tooltip >
	                        </el-table-column>
	                        <el-table-column
	                                fixed="right"
	                                label="操作" width="550">
	                            <template slot-scope="scope">
	                                <el-button size="mini" plain class="aplus-pribtn"   @click="$router.push(`/userInfoDetail/${scope.row.userId}/${scope.row.id}/${scope.row.user.userName}/${scope.row.user.phone}`)" v-if="btnStr.indexOf('查看认证信息')>-1">查看认证信息</el-button>
	                                <el-button size="mini" plain class="aplus-infoBtn"  @click="$router.push(`/auditManage/auditInfoDetail/${scope.row.id}`)"    v-if="btnStr.indexOf('详情')>-1">详情</el-button>
									<el-button size="mini" plain class="aplus-pribtn" @click="showOrderDetail(scope.row)"  v-if="btnStr.indexOf('订单详情')>-1">订单详情</el-button>
	                                <el-button size="mini" plain class="aplus-pribtn" @click="showActionModal(scope.row,1)"  v-if="btnStr.indexOf('结清')>-1">结清</el-button>
	                                <el-button size="mini" plain class="aplus-pribtn" @click="showActionModal(scope.row,2)"  v-if="btnStr.indexOf('续期')>-1">续期</el-button>
									<el-button size="mini" plain class="aplus-pribtn" @click="showActionModal(scope.row,3)"   v-if="btnStr.indexOf('修改还款金额')>-1">修改还款金额</el-button>
									<el-button size="mini" plain class="aplus-pribtn" @click="showActionModal(scope.row,4)"  v-if="btnStr.indexOf('代扣')>-1">代扣</el-button>
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


            <el-dialog
                    title="结清"
                    :visible.sync="dialogVisible"
                    width="30%">
                <div>
                    <div class="form-body">
                        <el-form ref="jieqingForm" :model="jieqingForm"  :rules="rules" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="结清总金额" prop="money">
                                <el-input v-model.trim="jieqingForm.money" auto-complete="new-password" placeholder="请输入结清总金额">
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                            <!--<el-form-item label="其中滞纳金" prop="overMoney">-->
                                <!--<el-input v-model.trim="jieqingForm.overMoney" placeholder="请输入其中滞纳金">-->
                                    <!--<template slot="append">元</template>-->
                                <!--</el-input>-->
                            <!--</el-form-item>-->
                            <el-form-item label="密码" prop="password">
                                <el-input v-model.trim="jieqingForm.password" auto-complete="new-password" type="password" placeholder="请输入结清密码">
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="jieqingAction('jieqingForm')">确 定</el-button>
              </span>
            </el-dialog>
        </el-card>


        <el-dialog
                title="续期"
                :visible.sync="xuqiDialogVisible"
                width="30%">
            <div>
                <div class="form-body">
                    <el-form ref="xuqiForm" :model="xuqiForm"  :rules="xuqiRules" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="续期天数">
                            <el-input  :disabled="true" value="7">
                                <template slot="append">天</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="续期总费用" prop="money">
                            <el-input v-model.trim="xuqiForm.money" auto-complete="new-password" placeholder="请输入续期总费用">
                                <template slot="append">元</template>
                            </el-input>
                        </el-form-item>
                        <!--<el-form-item label="滞纳金" prop="overMoney">-->
                            <!--<el-input v-model.trim="xuqiForm.overMoney" placeholder="请输入滞纳金">-->
                                <!--<template slot="append">元</template>-->
                            <!--</el-input>-->
                        <!--</el-form-item>-->
                        <el-form-item label="密码" prop="password">
                            <el-input v-model.trim="xuqiForm.password" auto-complete="new-password" placeholder="请输入续期密码">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="xuqiDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="xuqiAction('xuqiForm')">确 定</el-button>
              </span>
        </el-dialog>


		<el-dialog
				title="修改逾期金额"
				:visible.sync="changeVisible"
				width="30%">
			<div>
				<div class="form-body">
					<el-form ref="changeForm" :model="changeForm"  :rules="rules" label-width="130px" class="demo-ruleForm">
						<el-form-item label="修改应还款金额" prop="money">
							<el-input v-model.trim="changeForm.money" auto-complete="new-password" placeholder="请输入应还款金额">
								<template slot="append">元</template>
							</el-input>
						</el-form-item>
						<el-form-item label="修改逾期金额" prop="overMoney">
							<el-input v-model.trim="changeForm.overMoney" auto-complete="new-password" placeholder="请输入逾期金额">
								<template slot="append">元</template>
							</el-input>
						</el-form-item>
						<el-form-item label="密码" prop="password">
							<el-input v-model.trim="changeForm.password"  type="password" placeholder="请输入密码">
							</el-input>
						</el-form-item>
					</el-form>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
                <el-button @click="changeVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeMoneyAction('changeForm')">确 定</el-button>
              </span>
		</el-dialog>
		</el-card>



        <!--批量分配-->
        <el-dialog
                title="分配"
                :visible.sync="multiDialogVisible"
                width="30%">
            <div>
                <div class="form-body">
                    <el-form ref="fenpeiForm" :model="fenpeiForm"  :rules="fenpeiRules" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="催收人员" prop="userId">
                            <el-select style="width: 100%" v-model="fenpeiForm.userId" filterable placeholder="请选择催收人员">
                                <el-option-group
                                        v-for="(group,index) in fenpeiPeople"
                                        :key="index"
                                        :label="group.roleName">
                                    <el-option
                                            v-for="(item,cIndex) in group.groupAdminVOS"
                                            :key="cIndex"
                                            :label="item.adminName"
                                            :value="item.adminId">
                                    </el-option>
                                </el-option-group>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="xuqiDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="fenpeiAction('fenpeiForm')">确 定</el-button>
              </span>
        </el-dialog>





		<!--订单详情弹窗-->
		<el-dialog
				title="订单详情"
				:visible.sync="orderDetailVisible"
				width="70%"
				ref="memberDialog"
				style="height: 100%;"
				class="animated memberDialog" :close-on-press-escape="true">
			<div>
				<div class="memberDialog-body">
					<div class="head-body-info">
						<div class="Detailtitle">
							主要信息
						</div>
						<el-row>
							<el-col :span="6">
								会员名称 : {{orderRow.user.userName}}
							</el-col>
							<el-col :span="6">
								电话号码 : {{orderRow.user.phone}}
							</el-col>
							<el-col :span="6">
								会员来源 : {{orderRow.channelName?orderRow.channelName:'无'}}
							</el-col>
							<el-col :span="6">
								会员身份 : {{orderRow.label==1?'普通用户':orderRow.label==2?'优质用户':'逾期用户'}}
							</el-col>
						</el-row>
					</div>
				</div>

				<div class="marT30 detailInfoBody flex-r">
					<div class="detailBody-left">
						<div class="Detailtitle" style="padding-left: 10px">
							订单操作
						</div>
						<!--<div class="detailBody-left-item" @click="detailTab=1" :class="{'detailBody-left-item-active':detailTab==1}">-->
						<!--<div>-->
						<!--呼叫记录-->
						<!--</div>-->

						<!--</div>-->
						<div class="detailBody-left-item" @click="detailTab=2" :class="{'detailBody-left-item-active':detailTab==2}">
							<div>
								审核记录
							</div>
						</div>
						<div class="detailBody-left-item" @click="detailTab=3" :class="{'detailBody-left-item-active':detailTab==3}">
							<div>
								放款记录
							</div>
						</div>
						<div class="detailBody-left-item" @click="detailTab=4" :class="{'detailBody-left-item-active':detailTab==4}">
							<div>
								催记记录
							</div>
						</div>
					</div>
					<div class="detailBody-right">
						<!--<div v-show="detailTab==1" class="detailBody-right-item dailWrap">-->
						<!--<div class="dailWrapHeader">-->
						<!--<div  class="Detailtitle" style="padding-left: 20px">-->
						<!--通话信息-->
						<!--</div>-->
						<!--</div>-->
						<!--<div class="dailWrapBody">-->
						<!--<div class="flex-r dailWrapBody-header">-->
						<!--<div>-->
						<!--会员名称 : <span>张三</span>-->
						<!--</div>-->
						<!--<div>-->
						<!--身份证后四位 : <span>3365</span>-->
						<!--</div>-->
						<!--<div>-->
						<!--借款意愿 : <span>愿意</span>-->
						<!--</div>-->
						<!--<div>-->
						<!--呼叫状态 : <span>呼叫成功</span>-->
						<!--</div>-->
						<!--<div>-->
						<!--呼叫时间 : <span>2018-01-10 13:00</span>-->
						<!--</div>-->
						<!--</div>-->
						<!--<div class="dailWrapBody-playAudio">-->
						<!--<audio src="ddd"></audio>-->
						<!--</div>-->
						<!--<div class="dialogPhoto flex-r marL10">-->
						<!--<div class="flex-r" style="align-items: center">-->
						<!--<div class="photo photoRobot"></div>-->
						<!--<span>AI客服</span>-->
						<!--</div>-->
						<!--<div class="flex-r" style="align-items: center">-->
						<!--<div  class="photo photoUser"> </div>-->
						<!--<span>用户</span>-->
						<!--</div>-->
						<!--</div>-->
						<!--<div class="dialogWord marT10">-->
						<!--<div v-for="(item,index) in words" :key="index"  class="clear">-->
						<!--<div class="marL10 dialogWord-item leftBorder" :class="{'isMine':item.label==2} " :style="{'float':item.label==1?'left':'right'}">-->
						<!--{{item.word}}-->
						<!--</div>-->
						<!--<div class="leftBorder">-->

						<!--</div>-->
						<!--</div>-->
						<!--</div>-->
						<!--</div>-->

						<!--</div>-->
						<div v-show="detailTab==2" class="detailBody-right-item">
							<recordComponent title="审核记录" :data="shenheList" :showAdd="false" :orderId="orderRow.id" @regetdata="regetdata"></recordComponent>
						</div>
						<div v-show="detailTab==3" class="detailBody-right-item">
							<recordComponent title="放款记录"  :data="fangkuanList" :showAdd="false" :orderId="orderRow.id"  @regetdata="regetdata"></recordComponent>
						</div>
						<div v-show="detailTab==4" class="detailBody-right-item">
							<recordComponent title="催记记录"  :data="cuijiList" :showAdd="true"  :orderId="orderRow.id" @regetdata="regetdata"></recordComponent>
						</div>
					</div>

				</div>
			</div>
		</el-dialog>



        </el-card>

    </div>
</template>

<script>
  import animate from "animate.css";
  import { mapState } from 'vuex';
  import recordComponent from "@/components/recordComponent"
  export default {
    name: "channelList",
    data() {
      return {
        tableForm:{
          time:"",
          name:"",
          phone:"",
          // status:3
        },
        rules: {
          money: [
            { required: true, message: '请输入结清总金额', trigger: 'blur' }
          ],
          overMoney: [
            { required: true, message: '请输入其中滞纳金', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入结清密码', trigger: 'blur' }
          ],
        },

        xuqiRules: {
          money: [
            { required: true, message: '请输入续期总费用', trigger: 'blur' }
          ],
          overMoney: [
            { required: true, message: '请输入续期滞纳金', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入续期密码', trigger: 'blur' }
          ],
        },

        changeRules: {
          money: [
            { required: true, message: '请输入应还款金额', trigger: 'blur' }
          ],
          overMoney: [
            { required: true, message: '请输入逾期金额', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },

        changeForm:{},


        fenpeiRules: {
          userId: [
            { required: true, message: '请输入分配人员', trigger: 'blur' }
          ],
        },
        fenpeiForm:{},
        overdueList:[],
        totalPeople:0,
        borrowMoney:0,
        currentPage:1,
        pageSize:10,
        actionRow:{},
        jieqingForm:{},
        dialogVisible:false,
        xuqiDialogVisible:false,
        xuqiForm:{},
        multipleSelection: [],
        multiDialogVisible:false,
        fenpeiPeople:[],
        changeVisible:false,
        orderDetailVisible:false,
        orderRow:{
          user:{

          }
        },
        detailTab:2,
        shenheList:[],
        fangkuanList:[],
        cuijiList:[]
      };
    },
    mounted() {
    	console.log(this.btnStr)
      this.getFenpeiPeople()
      this.readyAjax();
    },
    components:{
      recordComponent
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
      "tableForm.name":function(n){
        if(!n){
          this.readyAjax()
        }
      }
    },
    methods: {
      // 订单详情
      regetdata(val){
        switch (val) {
          case '审核记录':this.getRecordList('getOrderShenheList','shenheList');break;
          case '放款记录':this.getRecordList('getOrderFangkuanList','fangkuanList');break;
          case '催记记录':this.getRecordList('getOrderCuijiList','cuijiList');break;
        }
      },
      showOrderDetail(row){
        this.orderRow={...row};
        this.orderDetailVisible=true;
        // this.getAiInfo(row.id)
        this.getRecordList('getOrderShenheList','shenheList');
        this.getRecordList('getOrderFangkuanList','fangkuanList');
        this.getRecordList('getOrderCuijiList','cuijiList');
      },
      getRecordList(url,data){
        this.$api.audit[url]({
          orderId:this.orderRow.id
        }).then((res)=>{
          this[data]=res.data
        })
      },

	  //分配
      getFenpeiPeople(){
        this.$api.system.getLoginRecord_adminList().then((res)=>{
          this.fenpeiPeople=res.data
        })
      },
      handleSelectionChange(val){
        this.multipleSelection=val;
      },
      multiAction(val){
        if(!this.multipleSelection.length){
          return this.$message.warning("批量操作前请先选择用户")
        }
        if(val!=1){
          return   this.multiDialogVisible=true
		}else{
          this.$nextTick(()=>{
            this.$toolkit.showConfrim("确定要进行退回操作吗?",'退回').then(()=>{
              let orderIds=[];
              this.multipleSelection.map((item)=>{
                orderIds.push(item.id)
              })
              this.$api.pressMoney.goBackAction({
                type:'3',
                ids:orderIds
              }).then(()=>{
                this.readyAjax();
                this.$message.success("退回成功")
              })
            })
            // this.multiDialogVisible=true
          })
		}
      },
      fenpeiAction(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let orderIds=[];
            this.multipleSelection.map((item)=>{
              orderIds.push(item.id)
            })
            this.$api.pressMoney.fenpeiAction({
			  ...this.fenpeiForm,
              orderIds:orderIds.join(",")
            }).then(()=>{
              this.multiDialogVisible=false;
              this.readyAjax();
              this.$message.success("分配成功")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleClick(){
        this.reset()
      },
      readyAjax(){
        this.currentPage=1;
        this.pageSize=10;
        if(this.tableForm.time){
          this.tableForm.limitPayTime=this.$toolkit.formatTime(this.tableForm.time[0],false)+'~'+this.$toolkit.formatTime(this.tableForm.time[1],false)
        }
        this.getNormalPeoples()
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
        this.getNormalPeoples()
      },
      handleSizeChange(val){
        this.pageSize=val;
        this.getNormalPeoples()
      },
      getNormalPeoples(){
        this.$api.pressMoney.getNormalPeoples({
          ...this.tableForm,
          currentPage:this.currentPage,
          pageSize:this.pageSize
        }).then((res)=>{
          this.overdueList=res.data.pageDto.list;
          this.borrowMoney=res.data.borrowMoney;
          this.totalPeople=res.data.pageDto.total;
          this.total=res.data.pageDto.total
        })
      },
      showActionModal(row,type){
        this.actionRow={...row};
        if(type==1){
          this.dialogVisible=true;
        }else if(type==2){
          this.xuqiDialogVisible=true;
        }else if(type==3){
          this.changeVisible=true
		}else{
			this.$toolkit.showConfrim('您确定要进行代扣操作吗','代扣').then(()=>{
            this.$api.pressMoney.payOnCard({
              orderId:row.id,
            }).then(()=>{
              this.$message.success("代扣成功!");
              this.readyAjax()
            })
          })
		}
      },
      jieqingAction(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.pressMoney.jieqingOrder({
              id:this.actionRow.id,
              ...this.jieqingForm
            }).then(()=>{
              this.dialogVisible=false;
              this.$message.success("结清成功");
              this.readyAjax()
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      xuqiAction(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.pressMoney.xuqiOrder({
              id:this.actionRow.id,
              ...this.xuqiForm,
              days:7
            }).then(()=>{
              this.xuqiDialogVisible=false;
              this.$message.success("续期成功");
              this.readyAjax()
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeMoneyAction(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.pressMoney.changeMoney({
              orderId:this.actionRow.id,
              ...this.changeForm,
            }).then(()=>{
              this.changeVisible=false;
              this.$message.success("修改还款金额成功");
              this.readyAjax()
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      formats(row){
        if(row.pressMoneyMan==null&&row.pressCharge==null){
          return "待分配"
        }else if(row.pressMoneyMan!=null){
          return "已分配"
        }
        return "可分配"
      }

    },
    created() {},
    destoryed() {}
  };
</script>

<style  lang="less">
    @import url('../../assets/css/commonTable.less');
	@import url('../../assets/css/memberDialog.less');
</style>
