Page({
      data: {
        images: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b1.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b2.png',
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b3.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b4.png',
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b5.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b6.png',
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/b7.png', 
        ],
        
        ima: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/sw01.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/sw02.png',
        ],
        imas: [
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/17-1.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/17-2.png',
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/17-3.png',
        ],
        imase :[
            'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/d11.png', 'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/d22.png',
           'http://cs.yy411.net/baiduXiaoChengXuZiYuanBao/images/d33.png',
        ],
        current: 0,
        src: 'http://4g.anslp.net/a/home713/video/video2.mp4',
        loop: false,
        muted: false,
        autoplay: false,
        srcvideo: 'http://4g.anslp.net/a/home713/video/123321.mp4',

                scale: 16,
        latitude: '32.11834',
        longitude: '118.785372',
        markers: [{
            markerId: '1',
            latitude: '32.11834',
            longitude: '118.785372'
        }, {
            markerId: '2',
            latitude: '32.11834',
            longitude: '118.785372',
            callout: {
                display: 'ALWAYS',
                content: '南京安泰睿医疗科技有限公司'
            }
        }, {
            markerId: '3',
            latitude: '32.11834',
            longitude: '118.785372',
            callout: {
                display: 'ALWAYS',
                content: '南京安泰睿医疗科技有限公司'
            }
        }],
        showLocation: '1',
        polyline: [{
            points: [{
                longitude: 118.785372,
                latitude: 32.11834
            }, {
                longitude: 118.785372,
                latitude: 32.11834
            }],
            color: '#FF5F41FF',
            width: 2,
            dottedLine: true
        }],

        circles: [{
            latitude: '32.11834',
            longitude: '118.785372',
            color: '#FF5F41FF',
            fillColor: '#21FFFFFF',
            radius: '200',
            strokeWidth: '2'
        }]
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
    ly: function () {
    swan.navigateTo({
      url: '/pages/pinl/pinl'
    });
  },






    onReady() {
        console.log('map ready');
        this.mapContext = swan.createMapContext('myMap');
    },
    onMarkertap(e) {
        console.log('onMarkertap callback:');
        console.log(e);
    },
    onCallouttap(e) {
        console.log('onCallouttap callback:');
        console.log(e);
    },
    onControltap(e) {
        console.log('onControltap callback:');
        console.log(e);
    },
    onRegionchange(e) {
        console.log('onRegionchange callback:');
        console.log(e);
    },
    onTap(e) {
        console.log('onTap callback:');
        console.log(e);
    },
    onUpdated(e) {
        console.log('onUpdated callback::');
        console.log(e);
    },



  xw1: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz1/wz1'
    });
  },

  xw2: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz2/wz2'
    });
  },
  
  xw3: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz3/wz3'
    });
  },

  xw4: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz4/wz4'
    });
  },

  xw5: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz5/wz5'
    });
  },

  xw6: function () {
    swan.navigateTo({
      url: '/pages/mtbd/wz6/wz6'
    });
  },
});