<template>
    <div>
        <el-card class="box-card affilateWrap" style="overflow-y: auto">
            <div slot="header" class="clearfix cardTitle">
                <span>详情</span>
            </div>
            
            <div class="cardBody">
            	<el-tabs type="border-card" v-model="activeName">
				  <el-tab-pane label="贷款申请详情" name="loanDetail">
			  	          <div class="auditInfoDetail">
			                    <el-form ref="form" :model="form" label-width="120px">
			                        <el-form-item label="姓名 : ">
			                            <el-input v-model="form.user.userName" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="电话 : ">
			                            <el-input v-model="form.user.phone" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="贷款单号 : ">
			                            <el-input v-model="form.lianPayNum" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="银行名称 : ">
			                            <el-input v-model="form.bankName" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="银行卡号 : ">
			                            <el-input v-model="form.bankCardNum" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="贷款期限 : ">
			                            <el-input v-model="form.limitDays" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="借款金额 : ">
			                            <el-input v-model="form.borrowMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="到账金额 : ">
			                            <el-input v-model="form.realMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="利息 : ">
			                            <el-input v-model="form.interestMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="平台服务费 : ">
			                            <el-input v-model="form.placeServeMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="信息认证费 : ">
			                            <el-input v-model="form.msgAuthMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="风控服务费 : ">
			                            <el-input v-model="form.riskServeMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="风险准备金 : ">
			                            <el-input v-model="form.riskPlanMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="综合费用 : ">
			                            <el-input v-model="form.wateMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="优惠券节省金额 : ">
			                            <el-input v-model="form.saveMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="应还款金额 : ">
			                            <el-input v-model="form.needPayMoney" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="申请借款时间 : ">
			                            <el-input v-model="form.gmtDatetime" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="容限期 : ">
			                            <el-input v-model="form.allowDays" :disabled="true"></el-input>
			                        </el-form-item>
			                        <el-form-item label="借款协议 : ">
			                            <el-button size="mini" type="primary" :disabled="true">查看</el-button>
			                        </el-form-item>
			                        <el-form-item label="借款服务协议 : ">
			                            <el-button size="mini" type="primary" :disabled="true">查看</el-button>
			                        </el-form-item>
			                        <el-form-item label="">
			                            <el-button size="mini" type="primary" @click="$router.go(-1)">返回</el-button>
			                        </el-form-item>
			                    </el-form>
			                </div>
			            
				  </el-tab-pane>
				  <el-tab-pane label="扣款记录" name="reduceMoneyRecord" lazy>
				  	  <el-table
					    :data="tableData"
					    border
					    empty-text="暂无扣款记录"
					    class="cardTable"
					    style="width: 100%">
					    <el-table-column
					      prop="dateTime"
					      label="扣款时间" :formatter="$toolkit.formatTimeTable">
					    </el-table-column>
					    <el-table-column
					      prop="type"
					      label="扣款类型"
					      >
					    </el-table-column>
					    <el-table-column
					      prop="result"
					      label="扣款备注">
					    </el-table-column>
					  </el-table>
				  </el-tab-pane>
			</el-tabs>
			</div>	
        </el-card>
		
    </div>
</template>

<script>
  export default {
    name: "auditInfoDetail",
    data() {
      return {
        form:{
        	user:{},
        },
        tableData:[],
       	activeName:"loanDetail"
      };
    },
    mounted() {
      this.getAuditInfoDetail();
      this.getReduceMoneyRecord()
    },
    computed:{
      "id":function(){
        return this.$route.params.id
      }
    },
    components:{
    },
    watch:{
    },
    methods: {
      getAuditInfoDetail(){
        this.$api.audit.getAuditInfoDetail({
          id:this.id
        }).then((res)=>{
            this.form=res.data
        }).catch(()=>{
          this.$message.error("获取详情失败")
        })
      },
      getReduceMoneyRecord(){
      	 this.$api.audit.getReduceMoneyRecord({
          orderId:this.id
        }).then((res)=>{
            this.tableData=res.data
        }).catch(()=>{
          this.$message.error("获取扣款记录失败")
        })
      },
      transTip(val){
        switch(val.type){
          case 4:return "风控审核";break;
          case 6:return "分配审核";break;
          case 8:return "人工审核";break;
          case 10:return "关闭";break;
          case 12:return "退回";break;
          case 14:return "分配放款";break;
          case 16:return "放款员审核(打款)";break;
          case 18:return "还款,结清";break;
          case 20:return "续期";break;
          case 22:return "分配催款";break;
          case 24:return "催款";break;
          case 40:return "审核备注";break;
          case 42:return "放款备注";break;
          case 44:return "催款备注";break;
        }
      }
    },
    created() {},
    destoryed() {}
  };
</script>

<style  lang="less">
    .auditInfoDetail{
        width: 60%;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>
