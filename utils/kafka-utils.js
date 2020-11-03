/**
 * 公共方法类封装：kafka的工具类
 * @author smallpanpan
 * @date 2019/12/3
 */

const kafkaNode = require('kafka-node');


class kafka {
    constructor(ip, topic, options) {
        this.ip = ip;
        this.topic = topic;
        this.options = options || {
            autoCommit: true,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024
        };
        this.client = new kafkaNode.KafkaClient({
            kafkaHost: this.ip,
            requestTimeout: 1000 * 60 * 10
        })
        const topics = this.topic;
        this.consumer = new kafkaNode.Consumer(this.client, topics, this.options);
        this.error();
    }
    /**
     * kafka消息接收时回调函数
     * 
     */
    message(cb) {
        this.consumer.on('message', cb);
    }
    /**
     * client出错时回调函数
     * @param {Function} errorFunction 
     */
    error(errorFunction = () => {}) {
        this.client.on('socket_error', () => {
            console.log('socket_error');
        })
    }
}
module.exports = kafka;