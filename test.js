const redisModel = require('./utils/redis-utils');
let redisClinet = new redisModel();

// redisClinet.setTest("测试数据").then((res) => {
//   console.log("数据写入成功", res);
// }).catch(err => {
//   console.log("数据写入失败", err);
// })
// redisClinet.getTest().then((res) => {
//   console.log("数据读写", res);
// }).catch(err => {
//   console.log("数据写入失败", err);
// })
// 写入数据

// redisClinet.pushDevtask({"head":"2","basket":"4","temp":"4","id":"1","time":"5","qt2":"0","taskid":"6","qt1":"0"}).then((res) => {
//   console.log("数据写入成功", res);
// }).catch(err => {
//   console.log("数据写入失败", err);
// })

setInterval(() => {
  redisClinet.popDevtask().then((res) => {
    console.log("读取数据", res);
    console.log("读取数据", res.head);
  }).catch(err => {})
}, 4000)