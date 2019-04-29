Page({
    data: {
        images: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/banner1.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/banner2.png'
        ],
        imgs: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/lunbo_2.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/lunbo_2.png'
        ],
        imags: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/a1.jpg', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/a2.jpg'
        ],
        imag: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/a3.jpg', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/a4.jpg'
        ],
        image: [
            'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/k.jpg', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/k.jpg'
        ],
        show:false
    },
  function(){
    setTimeout(()=>{
        console.log("5555")
    },1000)
  },
  phone: function (e) {
    swan.makePhoneCall({
      phoneNumber: '4009797666' //电话号码
    });
  },

  shgy: function () {
    swan.navigateTo({
      url: '../shgy/shgy'
    });
  },

  cpzx: function () {
    swan.navigateTo({
      url: '../cpzx/cpzx'
    });
  },
  banner1: function () {
    swan.navigateTo({
      url: '/pages/banner1/banner1'
    });
  },

  jszc: function () {
    swan.navigateTo({
      url: '../jszc/jszc'
    });
  },
  
  index_: function () {
    swan.navigateTo({
      url: '/pages/index/index'
    });
  },

  mtbd: function () {
    swan.navigateTo({
      url: '../mtbd/mtbd'
    });
  },
  map: function () {
    swan.navigateTo({
      url: '/pages/map/map'
    });
  },
  //病种开始
  jlz: function () {
    swan.navigateTo({
      url: '/pages/list/jlz/jlz'
    });
  },
  jsfl: function () {
    swan.navigateTo({
      url: '/pages/list/jsfl/jsfl'
    });
  },
  kjz: function () {
    swan.navigateTo({
      url: '/pages/list/kjz/kjz'
    });
  },
  qpz: function () {
    swan.navigateTo({
      url: '/pages/list/qpz/qpz'
    });
  },
  sjsr: function () {
    swan.navigateTo({
      url: '/pages/list/sjsr/sjsr'
    });
  },
  smz: function () {
    swan.navigateTo({
      url: '/pages/list/smz/smz'
    });
  },
  sxza: function () {
    swan.navigateTo({
      url: '/pages/list/sxza/sxza'
    });
  },
  yyz: function () {
    swan.navigateTo({
      url: '/pages/list/yyz/yyz'
    });
  },
  ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },
  
})

