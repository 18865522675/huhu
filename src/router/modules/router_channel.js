const router_module = {
  path: "/moduleMain",
  meta: {
    title: "渠道商管理",
    show: true,// 是否显示
    icon:"el-icon-news"
  },
  component: resolve => require(["../../views/moduleMain.vue"], resolve),
  children: [
    {
      path: "/channel/channelList",
      name: "channelList/channelList",
      meta: {
        title: "渠道商列表",
        show: true
      },
      component: resolve =>
        require(["@/views/channelManage/channelList.vue"], resolve)
    },
    {
      path: "/channel/channelTrans",
      name: "channelList/channelTrans",
      meta: {
        title: "渠道商转换率",
        show: true
      },
      component: resolve =>
        require(["@/views/channelManage/channelTrans.vue"], resolve)
    },
    {
      path: "/channel/channelPage",
      name: "channel/channelPage",
      meta: {
        title: "渠道商数据",
        show: true
      },
      component: resolve =>
        require(["@/views/channelManage/channelPage.vue"], resolve)
    },
//  {
//    path: "/channel/channelOverDue",
//    name: "channelList/channelOverDue",
//    meta: {
//      title: "渠道逾期明细",
//      show: true
//    },
//    component: resolve =>
//      require(["@/views/channelManage/channelOverDue.vue"], resolve)
//  },
    {
      path: "/channel/channel_member_list/:channelId",
      name: "channelList/channel_member_list",
      meta: {
        title: "渠道商会员列表",
        show: false
      },
      component: resolve =>
        require(["@/views/channelManage/channel_member_list.vue"], resolve)
    },
    {
      path: "/channel/channel_orderList/:channelId",
      name: "channelList/channel_orderList",
      meta: {
        title: "渠道商订单列表",
        show: false
      },
      component: resolve =>
        require(["@/views/channelManage/channel_orderList.vue"], resolve)
    },
    // {
    //     path:"/channel/channelDetail",
    //     name:"channel/channelDetail",
    //     meta:{
    //         title:"渠道转换率详情",
    //         show:true
    //     },
    //     component: resolve =>
    //         require(["@/views/channelManage/channelDetail.vue"], resolve)
    // }
  ]
};

export default router_module;
