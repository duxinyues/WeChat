function formatTime(date){
    var year = date.getFullYear();
    var month =  date.getMonth()+1;
    var day = date.getDate();

    var hour = date.getHour();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year,month,day].map(formatNumber).join("/")+" "+[hour,minute,second].map(formatNumber).join(":");
}

function formatNumber(data){
    var data = data.toString();
    return data[1] ? data : '0'+data;
}

function formatWan(data){
    var data = data.toString();
    return (n/10000).toFixed(1)+"万";
}

/**
 * 获取推荐频道数据
 */
function getRecommmmend(callback){
    wx.request({
        url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        data: {
            g_tk:5381,
            uin:0,
            format:"json",
            inCharset:"utf-8",
            outCharset:"utf-8",
            notice:0,
            platform:"h5",
            needNewCode:1,
            _:Date.now()
        },
        method: 'GET', 
        header: {"content-Type":"application/json"}, 
        success: function(res){
            if(res.statusCode == 200){
                callback(res.data);
            }
        }
    })
}

/**
 * 获取热门搜索
 */

function getHotSearch(callback){
    wx.request({
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
        data: {
            g_tk:5381,
            uin:0,
            format:"json",
            inCharset:"utf-8",
            outCharset:"utf-8",
            notice:0,
            platform:"h5",
            needNewCode:1,
            _:Date.now()
        },
        method: 'GET', 
        header: {"content-Type":"application/json"}, 
        success: function(res){
            console.log(res);
            if(res.statusCode == 200){
               let data = res.data;
               data.data.hotkey = data.data.hotkey.slice(0,8);
               callback(data);
            }
        }
    })
}

/**
 * 搜索结果
 */
function getSearchMusic(keyword,page,callback){
    
}

