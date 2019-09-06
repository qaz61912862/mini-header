const app = getApp()
Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, // 是否显示左上角图标   1表示显示    0表示不显示
      title: '组件列表', // 导航栏 中间的标题
      textColor: '#fff', // 标题颜色
      bgColor: 'transparent', // 导航栏背景颜色
      btnBgColor: 'transparent', // 胶囊按钮背景颜色
      iconColor: 'white', // icon颜色 black/white
      borderColor: 'rgba(255, 255, 255, 0.3)' // 边框颜色 格式为 rgba()，透明度为0.3
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.systeminfo.statusBarHeight * 2 + 20,
  },
  onLoad() {
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 2000);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})