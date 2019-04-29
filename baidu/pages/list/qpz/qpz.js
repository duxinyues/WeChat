 Page({
  data: {
    index: 0,
    date: '年/月/日',
    array:  ['--请选择病症--', '失眠症', '抑郁症', '神经衰弱', '焦虑症','其他病症'],
  },
  ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },
    map: function () {
    swan.navigateTo({
      url: '/pages/map/map'
    });
  },
    selectorChange: function (e) {
        console.log('picker-selector changed，值为', e.detail.value)
        this.setData(
            'index', e.detail.value
        );
    },

    bindDateChange: function(e) {
        this.setData({
        date: e.detail.value
        })
    },

    phone: function (e) {
    swan.makePhoneCall({
      phoneNumber: '4001139120' //电话号码
    });
  },


    index_: function () {
    swan.navigateTo({
      url: '/pages/index/index'
    });
  },
})

