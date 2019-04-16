<template>
    <div>
    </div>
</template>

<script>
  export default {
    name: 'singleTaobaoInfo',
    data () {
      return {
//      receiveTable:[],
//      orderTable:[],
//      baseInfo:{},
//      accountInfo:{}
      }
    },
//  props:["res"],
    mounted () {
    	this.getTongdunData()
//    this.getTaobaoDetail()
    },
    watch:{
//      "res":function(res){
//        this.baseInfo=res.data.data.task_data.base_info;
//        this.accountInfo=res.data.data.task_data.account_info;
//        this.receiveTable=res.data.data.task_data.receiver_list;
//        this.orderTable=res.data.data.task_data.order_list;
//        this.orderTable.map((item)=>{
//          item.productList=[];
//          item.priceList=[];
//          item.amountList=[];
//          item.product_list.map((cItem)=>{
//            item.productList.push(cItem.product_name);
//            item.priceList.push(cItem.product_price/100);
//            item.amountList.push(cItem.product_amount);
//          })
//        })
//      }
    },
    methods: {
    	getTongdunData(){
    		this.$api.detail.getTongdunData({
    			userId:this.$route.params.userId
    		}).then((res)=>{
    			let data=[res.data];
    			$.showReport(data)
    		})
    	}
//    getTaobaoDetail(){
//      this.$api.detail.getTaobaoDetail({
//        userId:this.$route.params.userId
//      }).then((res)=>{
//          this.baseInfo=res.data.data.task_data.base_info;
//          this.accountInfo=res.data.data.task_data.account_info;
//          this.receiveTable=res.data.data.task_data.receiver_list;
//          this.orderTable=res.data.data.task_data.order_list;
//          this.orderTable.map((item)=>{
//            item.productList=[];
//            item.priceList=[];
//            item.amountList=[];
//            item.product_list.map((cItem)=>{
//              item.productList.push(cItem.product_name);
//              item.priceList.push(cItem.product_price/100);
//              item.amountList.push(cItem.product_amount);
//            })
//          })
//      })
//    }
    },
    created () {
    },
    destoryed () {
    }
  }
</script>

<style scoped lang="less">
    .circleWrap{
        background: white;
        border-radius: 20px;
        padding: 20px;
    }
    .detailLabel{
        font-weight: bold;
    }
    .taobaoInfoWrap{
        .el-row{
            line-height: 40px;
            font-size: 13px;
            .el-col:nth-child(odd){
                font-weight: bold;
            }
            border-bottom: 1px solid #e7eaec
        }
    }
</style>
