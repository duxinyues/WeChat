//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    console.log(34)
    wx.requestSubscribeMessage({
      tmplIds: ['oHIM1vz7f2KQpEDpVhgHhN0wPdogRgmOeW8z3hIVqMs'],
      success(res) { 
        console.log(res)
      }
    })
    // // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'sendNew',
      // 传递给云函数的参数
      data: {
        openid: app.globalData.openid,
        theme:"团建",
        startTime:"2020-03-30",
        endTime:"2020-03-31",
        address:"贵阳"
      },
      success: res => {
        console.log(res)
        // output: res.result === 3
      },
      fail: err => {
        console.log(err)
        // handle error
      },
    })
    // 选择图片
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['compressed'],
    //   sourceType: ['album', 'camera'],
    //   success: function (res) {

    //     wx.showLoading({
    //       title: '上传中',
    //     })

    //     const filePath = res.tempFilePaths[0]
        
    //     // 上传图片
    //     const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
    //     wx.cloud.uploadFile({
    //       cloudPath,
    //       filePath,
    //       success: res => {
    //         console.log('[上传文件] 成功：', res)

    //         app.globalData.fileID = res.fileID
    //         app.globalData.cloudPath = cloudPath
    //         app.globalData.imagePath = filePath
            
    //         wx.navigateTo({
    //           url: '../storageConsole/storageConsole'
    //         })
    //       },
    //       fail: e => {
    //         console.error('[上传文件] 失败：', e)
    //         wx.showToast({
    //           icon: 'none',
    //           title: '上传失败',
    //         })
    //       },
    //       complete: () => {
    //         wx.hideLoading()
    //       }
    //     })

    //   },
    //   fail: e => {
    //     console.error(e)
    //   }
    // })
  },

})
