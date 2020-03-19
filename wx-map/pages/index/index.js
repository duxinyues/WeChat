//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    markers: [{
      iconPath: "../resources/location.png",
      id: 0,
      latitude: 26.64702,
      longitude: 106.63024,
      width: 50,
      height: 50
    }],
    latitude: 26.64702,
    longitude: 106.63024,
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '健康码', //导航栏 中间的标题
      white: true, // 是就显示白的，不是就显示黑的。
    },
    // 导航头的高度
    height: app.globalData.height * 2 + 20,

    userImg: "../img/user1.png",
    cradImg: "../img/user2.png",
    clickCradimg: "../img/jilu.png",
    rightimg: "../img/rightimg.png"
  },
  onLoad: function() {},
  onReady: function() {
    const that = this;
    const markers = that.data.markers;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        markers.latitude = res.latitude;
        markers.longitude = res.longitude;
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: markers
        })
        const latitude = res.latitude
        const longitude = res.longitude
      }
    })
  },
  login: function() {
    wx.navigateTo({
      url: '/pages/userinfo/index',
    })
  },
  card: function() {
    wx.navigateTo({
      url: '/pages/card/index',
    })
  },
  punchCard: function() {
    wx.navigateTo({
      url: '/pages/punchcard/index',
    })
  }
})