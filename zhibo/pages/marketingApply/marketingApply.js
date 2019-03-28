// pages/manpowerApply/manpowerApply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMasking: false,
    showMasking2: false,
    select: false,
    tihuoWay: '参与人数',
    showRadio: 1,
    items: [
      { name: 'personage', value: '个人用户', checked: 'true' },
      { name: 'company', value: '企业用户' },
    ]
  },
  radioChange: function (e) {
    var radioValue = e.detail.value;
    console.log(e.detail.value)
    if (radioValue == "personage") {
      this.setData({
        showRadio: 2
      })
    } else {
      this.setData({
        showRadio: 1
      })
    }
  },
  clickSubmit: function () {
    console.log();
    if (this.data.showRadio == 1) {
      this.setData({
        showMasking: true
      })
    } else {
      this.setData({
        showMasking2: true
      })
    }
  },
  clickSubmit1: function () {
    this.setData({
      showMasking: true,
      showMasking2: false
    })
  },
  close_mask: function () {//取消蒙版
    this.setData({
      showMasking: false,
      showMasking2: false
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
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

  }
})