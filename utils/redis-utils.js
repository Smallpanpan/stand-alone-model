/**
 *公共方法类封装：与Redis通讯模块 网关通讯模块
 * @author smallpanpan
 * @date 2020/9/5
 */
const redis = require('redis-connection-pool');
const config = require('../config/index');
class redies {
    constructor() {
        this.redisPool = redis('myRedisPool', config.redis());
    }



    // 通用发送
    pushTopic(topic,date) {
        return new Promise((resolve, reject) => {
            let arr = JSON.stringify(date);
            this.redisPool.rpush(topic, arr, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        })
    }

    // 接收 topic devalert redis设备状态数据
    popTopic(topic) {
        return new Promise((resolve, reject) => {
            this.redisPool.blpop(topic, (err, reply) => {
                let value = JSON.parse(reply[1]);
                if (err) {
                    reject(err);
                } else {
                    resolve(value);
                }
            });
        })
    }
    // topic devtask 为向redis网关写任务
    setTest(date) {
        return new Promise((resolve, reject) => {
            this.redisPool.set('test', date, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        })
    }

    // 接收 topic devalert redis设备状态数据
    getTest() {
        return new Promise((resolve, reject) => {
            this.redisPool.get('test', (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        })
    }
    // 通用写入 topic
    setTopic(topic,date) {
        return new Promise((resolve, reject) => {
            this.redisPool.set(topic, date, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        })
    }

    // 接收 topic devalert redis设备状态数据
    getTopic(topic) {
        return new Promise((resolve, reject) => {
            this.redisPool.get(topic, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        })
    }

}
module.exports = redies;