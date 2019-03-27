// pages/MyMine/MyMine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name:"用户名称",
    user_post:"用户职位"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  ClickPersonality: function () {//个人信息
    wx.navigateTo({
      url: '/pages/personality/personality',
    })
  },
  clickIndent: function () {//资料下载
    wx.navigateTo({
      url: '/pages/indent/indent'
    })
  },
  clickEvaluate: function () {//资料下载
    wx.navigateTo({
      url: '/pages/evaluate/evaluate'
    })
  },
  clickFootprint: function () {//我的足迹
    wx.navigateTo({
      url: '/pages/footprint/footprint'
    })
  },
  clickWaiter: function () {//我的客服
    wx.navigateTo({
      url: '/pages/waiter/waiter'
    })
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

  }
})