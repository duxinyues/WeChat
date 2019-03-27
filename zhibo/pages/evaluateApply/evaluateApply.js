// pages/estimate/estimate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '满意', checked: 'true' },
      { name: 'CHN', value: '一般' },
      { name: 'BRA', value: '不满意' },
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  questionnaireEnd: function () {
    wx.showModal({

      title: '提示',

      content: '确定放弃填写当前调查问卷吗？放弃填写您将不能下载该资料',

      success: function (res) {

        if (res.confirm) {//这里是点击了确定以后

          wx.navigateTo({
            url: '/pages/evaluate/evaluate?applyVluer=1',
          })

        } else {//这里是点击了取消以后

          console.log('放弃')

        }

      }

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