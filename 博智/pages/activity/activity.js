// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showData:"论坛峰会",
    showSelect :false,
    showSelectItem: [{ name: "论坛峰会" }, { name: "论坛峰会2" }, { name: "论坛峰会3" }],
    showData2: "北京",
    showSelect2: false,
    showSelectItem2: [{ name: "北京" }, { name: "上海" }, { name: "杭州" }],
    showData3: "论坛峰会",
    showSelect3: false,
    showSelectItem3: [{ name: "收费" }, { name: "免费" }],
  },
  clickShow:function(){
    if (this.data.showSelect){
      this.setData({
        showSelect:false
      })
    }else{
      this.setData({
        showSelect: true
      })
    }
  },
  setText:function(e){
    var nowData = this.properties.showSelectItem;
    var nowIdx = e.target.dataset.index;
    var nowText = nowData[nowIdx].name;
    this.setData({
      showSelect: false,
      showData: nowText,
    })
  },
  clickShow2: function () {
    if (this.data.showSelect2) {
      this.setData({
        showSelect2: false
      })
    } else {
      this.setData({
        showSelect2: true
      })
    }
  },
  setText2: function (e) {
    var nowData = this.properties.showSelectItem2;
    var nowIdx = e.target.dataset.index;
    var nowText = nowData[nowIdx].name;
    this.setData({
      showSelect2: false,
      showData2: nowText,
    })
  },
  clickShow3: function () {
    if (this.data.showSelect3) {
      this.setData({
        showSelect3: false
      })
    } else {
      this.setData({
        showSelect3: true
      })
    }
  },
  setText3: function (e) {
    var nowData = this.properties.showSelectItem3;
    var nowIdx = e.target.dataset.index;
    var nowText = nowData[nowIdx].name;
    this.setData({
      showSelect3: false,
      showData3: nowText,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickApplyCourse: function () {
    wx.navigateTo({
      url: '/pages/activityContent/activityContent',
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