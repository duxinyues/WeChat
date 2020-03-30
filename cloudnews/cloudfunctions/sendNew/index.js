// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid ,
      page: 'pages/index/index',
      lang: 'zh_CN',
      data: {
        thing1: {
          value: event.theme
        },
        date2: {
          value: event.startTime
        },
        date3: {
          value: event.endTime
        },
        thing4: {
          value: event.address
        }
      },
      templateId: 'oHIM1vz7f2KQpEDpVhgHhN0wPdogRgmOeW8z3hIVqMs',
      miniprogramState: 'developer'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}