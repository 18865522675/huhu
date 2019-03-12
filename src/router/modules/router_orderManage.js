const router_module = {
  path: "/moduleMain",
  meta: {
    title: "订单管理",
    show: true, // 是否显示
    icon:"el-icon-document"
  },
  component: resolve => require(["../../views/moduleMain.vue"], resolve ),
  children: [
    {
      name:"orderManage/okOrder",
      path:"/orderManage/okOrder",
      meta:{
        title:"已结清订单",
        show:true
      },
      component: resolve =>
        require(["@/views/orderManage/okOrder.vue"], resolve)
    },
//  {
//    name:"orderManage/todayShouldPay",
//    path:"/orderManage/todayShouldPay",
//    meta:{
//      title:"当日应还款订单",
//      show:true
//    },
//    component: resolve =>
//      require(["@/views/orderManage/todayShouldPay.vue"], resolve)
//  },
  ]
};

export default router_module;
