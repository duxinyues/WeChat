Page({

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
    ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },
});