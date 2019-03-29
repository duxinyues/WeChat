// pages/trip/trip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['飞机', '高铁', '火车', '汽车'],
    date: '',
    hotel: ['标准间', '豪华间', '豪华间'],
    index:0,
    key:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickPayment: function () {
   // wx.navigateTo({
      //url: '/pages/payment/payment',
   // })
    wx.showToast({

      title: '成功',

      icon: 'success',

      duration: 2000//持续的时间

    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindhotelChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '158XXXXXXXX',
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