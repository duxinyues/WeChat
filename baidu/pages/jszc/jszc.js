Page({ 
     
  data: {
        current: 0,
        src: 'http://4g.anslp.net/2019/video/2.mp4',
        loop: false,
        muted: false,
        autoplay: false
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