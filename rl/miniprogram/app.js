//app.js
const AV = require('./public/av-min');
AV.init({
  appId: '5QYsrni4fqM7383D0jPb1isT-gzGzoHsz',
  appKey: 'LHOhQmG8nzXRGUVBpS9IxIK0',
});
const q = new AV.Query("poetry");
q._limit = 500;
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    // 展示本地存储能力
    var vm = this;
    q.find().then(function (results) {
      var poetrys = {}

      for (var i in results) {
        var item = results[i]
        var poetry = {}
        poetry['author'] = item.attributes.author
        poetry['title'] = item.attributes.title
        poetry['paragraphs'] = item.attributes.paragraphs
        poetry['cover'] = item.attributes.cover
        poetry['id'] = item.id
        poetrys[item.id] = poetry
      }

      wx.setStorageSync('poetrys', poetrys)

      vm.globalData.poetrys = poetrys;

      if (vm.poetrysCallback) {
        vm.poetrysCallback(poetrys);
      }
    })
  },
  globalData:{
    userInfo:null,
    current:null,
    poetrys:{}
  }
})
