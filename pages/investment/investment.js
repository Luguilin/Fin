// investment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress:25,
    btn_visibel: false,
    asks: [
      [{ checked: false, text: "选项一"}, { checked: false, text: "选项2"}],
      [{ checked: false, text: "选项3"}, { checked: false, text: "选项4"}],
      [{ checked: false, text: "选项5"}, { checked: false, text: "选项6"}],
      [{ checked: false, text: "选项3"}, { checked: false, text: "选项4"}]
    ],
    current :0,
    ask_text:"问题1"
   
  },
  EventHandle: function (event){
    console.log((100 / 4) * (event.detail.current+1));
    this.setData({
      progress: (100 / 4) * (event.detail.current + 1),
      ask_text: "问题" + (event.detail.current + 1)
    });

    
    this.setData({
      btn_visibel: (event.detail.current + 1)==4?true:false
    });
    // console.log(event.detail.current);
  },
  aaa:function(){
    
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
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