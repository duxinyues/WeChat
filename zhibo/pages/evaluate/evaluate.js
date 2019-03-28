// pages/evaluate/evaluate.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    showModal: false,
    showModal: false,
  },
  swiperTab: function (e) {//滑动切换
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  clickTab: function (e) { 
    var that = this; 
    if (this.data.currentTab === e.target.dataset.current) { 
      return false; 
      } else { 
        that.setData({ 
          currentTab: e.target.dataset.current 
          }) 
        } 
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.applyVluer
    if (options.applyVluer !== "undefined"){
      if (options.applyVluer==1){
        wx.showModal({

          title: '下载完成',

          content: '恭喜您已下载完成资料，您可以进入我的资料中进行查看',

          success: function (res) {

            if (res.confirm) {//这里是点击了确定以后

             wx.navigateTo({
               url: '/pages/evaluateApply/evaluateApply',
             })

            } else {//这里是点击了取消以后

              console.log('用户点击取消')

            }

          }

        })
      }
    }

  },
  clickEvaluateContent:function(){
    wx.navigateTo({
      url: '/pages/evaluateContent/evaluateContent',
    })
  },
  downloadContent:function(){
    // wx.showModal({

    //   title: '提示',

    //   content: '下载资料前需要您填写一个简单调查问卷',

    //   success: function (res) {

    //     if (res.confirm) {//这里是点击了确定以后

    //       wx.navigateTo({
    //         url: '/pages/evaluateApply/evaluateApply',
    //       })

    //     } else {//这里是点击了取消以后

        

    //     }

    //   }

    // })
  },
  goQuest:function(){
    wx.navigateTo({
      url: '/pages/evaluateApply/evaluateApply',
    })
  },
  goevaluateContent: function () {
    wx.navigateTo({
      url: '/pages/evaluateContent/evaluateContent',
    })
  },
  toShowModal: function(e) {
    this.setData({
      showModal: true,
      showModals: false,
    })
  },

  hideModal: function() {
    this.setData({
      showModal: false,
      showModals: false,
    });
  },
  toShowModals: function (e) {
    this.setData({
      showModals: true,
      showModal: false,
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