// investment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress:25,
    btn_visibel: false,
    balance:10000,
    asks: [
      { ask_str: "风险承受能力" }, { ask_str: "投资期限" }, { ask_str: "意向投入的金额" }, { ask_str: "最后一个问题" }
    ],
    current_sak: "风险承受能力",
    current :0,
  },
  EventHandle: function (event){
    this.setData({
      progress: (100 / 4) * (event.detail.current + 1),
      current_sak: this.data.asks[event.detail.current].ask_str,
      btn_visibel: (event.detail.current + 1) == 4 ? true : false
    });
  },
  ok:function(){
    wx.navigateTo({
      url: '../analysis/analysis'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})