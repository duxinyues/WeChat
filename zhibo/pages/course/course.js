// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData:{
      
    },
    coursesData: {
      courses1Title: '近期公开课',
      courses1Url: "/pages/monthCourse/monthCourse",
      courses1ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        },
        {
          contentTitle: "精品课程标题2",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        }
      ]
    },
    coursesData11: {
      courses1Title: '高价班',
      courses1Url: "/pages/monthCourse/monthCourse",
      courses1ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        },
        {
          contentTitle: "精品课程标题2",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        }
      ]
    },
    coursesData12: {
      courses1Title: '课程预告',
      courses1Url: "/pages/monthCourse/monthCourse",
      courses1ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        },
        {
          contentTitle: "精品课程标题2",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        }
      ]
    },
    coursesData4: {
      courses4Title: '热点推荐',
      courses4Url: "",
      courses4ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image22.png"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickPrijectAll: function () {
    wx.navigateTo({
      url: '/pages/projectAll/projectAll'
    })
  },
  clickManpower:function(){
    wx.navigateTo({
      url: '/pages/manpower/manpower'
    })
  },
  clickMarketing:function(){
    wx.navigateTo({
      url: '/pages/marketing/marketing'
    })
  },
  openCoursesD: function () {
    wx.navigateTo({
      url: '/pages/courseDetails/courseDetails',
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