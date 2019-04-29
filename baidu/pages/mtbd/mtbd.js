Page({

  data: {

    },
    
  wz1: function () {
    swan.navigateTo({
      url: 'wz1/wz1'
    });
  },

  wz2: function () {
    swan.navigateTo({
      url: 'wz2/wz2'
    });
  },
    ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },
  
  wz3: function () {
    swan.navigateTo({
      url: 'wz3/wz3'
    });
  },

  wz4: function () {
    swan.navigateTo({
      url: 'wz4/wz4'
    });
  },

  wz5: function () {
    swan.navigateTo({
      url: 'wz5/wz5'
    });
  },

  wz6: function () {
    swan.navigateTo({
      url: 'wz6/wz6'
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

})

