let waitingQueue = []
let lock = false
const load = callback => {
  getTokenAndDo(token => {
    wx.request({
      url: 'https://v2.jinrishici.com/one.json?client=mini-progrram-sdk/1.0',
      header: {
        'X-User-Token': token
      },
      success: res => {
        if (res.data.status === "success") {
          callback(res.data)
        } else {
          console.error("请求失败了" + res.data.errMessage)
        }
      },
      fail: () => {
        console.error("诗词不存在！")
      }
    })
  })
}

const getTokenAndDo = callback => {
  let token = wx.getStorageSync("jinrishici-token")
  if (token) {
    callback(token)
  } else {
    waitingQueue.push(callback)
    if (lock) {
      return;
    }
    lock = true
    wx.request({
      url: 'https://v2.jinrishici.com/token?client=mini-progrram-sdk/1.0',
      success: res => {
        if (res.data.status === "success") {
          wx.setStorageSync("jinrishici-token", res.data.data)
          lock = false
          while (waitingQueue.length > 0) {
            waitingQueue.pop()(res.data.data)
          }
        } else {
          console.error("error" + res.data.errMessage)
          lock = false
        }
      },
      fail: () => {
        console.error("error")
      }
    })
  }
}

module.exports = {
  load: load
}