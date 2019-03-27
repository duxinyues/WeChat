// pages/invoiceAddr/invoiceAddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  deleteAddr:function(){
    wx.showToast({

      title: '删除成功',

      icon: 'success',

      duration: 2000//持续的时间

    })
  },
  defaultAddr:function(){
    wx.showToast({

      title: '默认地址',

      icon: 'success',

      duration: 2000//持续的时间

    })
  },
  clickInvoiceAddAddr:function(){
    wx.navigateTo({
      url: '/pages/invoiceAddAddr/invoiceAddAddr',
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