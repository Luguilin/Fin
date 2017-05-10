//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '我要投资模块',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    console.log("---------")
    var that=this;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onReady: function () {
    wx.navigateTo({
      url: '../login/login?id=1'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  onShow:function(){
// wx.navigateTo({
//   url: '../login/login'
//     })
  }
})
