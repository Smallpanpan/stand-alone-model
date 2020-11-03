/**
 *公共方法类封装：mqtt 
 * @author smallpanpan
 * @date 2020/8/3
 */
let mosca = require('mosca');
let mqttClient = require('mqtt');
class mqtt {
    constructor(url) {
        this.url = url;
        this.client = {};
        this.servers = {};
        this.settings = {};
    }
    // 开启mqtt服务
    server() {
       this.servers = new mosca.Server({port: 9800});
    }
    connect () {
        this.servers.on('clientConnected', (client) => {
        })
    }
    // 连接mqtt服务端
    pushClient(port,username, password,clineId) {
        this.client = mqttClient.connect(this.url, {
            port: port,
            clientId: clineId,
            username: username,
            password: password
        });
    }
    // 推送mqtt信息
    publish(data, topic) {
        this.client.publish(topic, data);
    }
    // 监听mqtt信息
    listen(topic) {
        this.client.subscribe(topic,{qos:0});//订阅主题为test的消息 
    }

}
module.exports = mqtt;