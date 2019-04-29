Page({
    data: {
        images: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx1.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx2.png'
           , 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx3.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx4.png'
           , 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx5.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx6.png'
           , 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/cpzx7.png'
        ]
    },
  ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },   
    index_: function () {
        swan.navigateTo({
          url: '/pages/index/index'
        });
    },
  phone: function (e) {
    swan.makePhoneCall({
      phoneNumber: '4009797666' //电话号码
    });
  },
  map: function () {
    swan.navigateTo({
      url: '/pages/map/map'
    });
  },
});