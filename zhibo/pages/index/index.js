//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    coursesData:{
      courses1Title: '本月课程',
      courses1Url: "/pages/monthCourse/monthCourse",
      courses1ContentList:[
        {
          contentTitle:"精品课程标题1",
          contentTime:"12.12 上海",
          contentPrice:"￥120.0",
          contentImage:"/img/image20.png"
        },
        {
          contentTitle: "精品课程标题2",
          contentTime: "12.12 上海",
          contentPrice: "￥120.0",
          contentImage: "/img/image20.png"
        }
      ]
    },
    coursesData2: {
      courses2Title: '重点推荐',
      courses2Url: "",
      courses2ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "发布时间：2019/1/23",
          contentPrice: "￥120.0",
          contentImage: "/img/image22.png"
        },
        {
          contentTitle: "精品课程标题2",
          contentTime: "发布时间：2019/1/23",
          contentPrice: "￥120.0",
          contentImage: "/img/image22.png"
        }
      ]
    },
    coursesData3:{
      courses3Title: '研究报告',
      courses3Url: "/pages/monthCourse/monthCourse",
      courses3ContentList: [
        {
          contentTitle: "精品课程标题1",
          contentTime: "发布时间：2019/1/23",
          contentImage: "/img/image22.png"
        }
      ]
    },
    showMasking: true,
    newContent:"200+房企人力总汇集在山城，这里发生了什么大事？"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickSchooLBegin:function(){
    wx.switchTab({
      url: '/pages/course/course',
    })
  },
  clickAdvisory:function(){
      wx.navigateTo({
        url: '/pages/advisory/advisory'
      })
  },
  clickCase: function () {
    wx.navigateTo({
      url: '/pages/case/case'
    })
  },
  clickGraduate: function () {
    wx.navigateTo({
      url: '/pages/graduate/graduate'
    })
  },
  clickNews: function () {
    wx.navigateTo({
      url: '/pages/news/news'
    })
  },
  clickSmallClass: function () {
    wx.navigateTo({
      url: '/pages/SmallClass/SmallClass'
    })
  },
  clickServe: function () {
    wx.navigateTo({
      url: '/pages/serve/serve'
    })
  },
  clickActivity: function () {
    wx.navigateTo({
      url: '/pages/activity/activity'
    })
  },
  openCoursesD: function () {
    wx.navigateTo({
      url: '/pages/courseDetails/courseDetails',
    })
  },
  submit: function () {//打开蒙版
    this.setData({
      showMasking: true
    })
  },
  close_mask: function () {//取消蒙版
    this.setData({
      showMasking: false,
      showMasking2:false
    })
  },
  clickSign:function(){
    this.setData({
      showMasking: false,
      showMasking2: true 
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
