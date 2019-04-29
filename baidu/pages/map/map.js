Page({

  data: {
        scale: 16,
            latitude: '32.11834',
            longitude: '118.785372',
        markers: [{
            markerId: '1',
            latitude: '32.11834',
            longitude: '118.785372',
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
            latitude: '32.11834',
            longitude: '118.785372',
            }, {
            latitude: '32.11834',
            longitude: '118.785372',
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
});