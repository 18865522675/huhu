import { $ } from "./axios";

export default {
    //获取转换率列表-时间纬度
    channelTrans_getList: params => $.post("channel/page", params, { lock: true }),
    
    channelPage_getList: params => $.get("channel/channelManagerList", params, { lock: true }),
    
    

    //获取渠道商列表（所有）
    channelList_getList: params => $.get("/channel/selectAll", params, { lock: true }),


  //获取渠道商逾期明细列表
  channelOverDueList_getList: params => $.get("/verb/channelOverdueDetailedList", params, { lock: true }),

  //获取渠道商列表
  getChannelList: params => $.get("channel/selectList", params, { lock: true }),

  //获取渠道商列表
  addChannel: params => $.post("channel/add", params, { lock: true }),

  delChannel: params => $.delete("channel/"+params, {}, { lock: true  }),


  //渠道转化率-注册纬度
  channelTrans_getRegisterList: params => $.post("channel/register/page", params, { lock: true }),


};
