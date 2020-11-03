/**
 *公共方法类封装 stocket 连接工具类
 * @author smallpanpan
 * @date 2019/12/3
 */
let net = require('net');
class tcp {
    constructor(port) {
        this.tcp_server = net.createServer();
        this.tcpClient = net.Socket();
        this.port = port;
        this.Sockets = {};
        this.SocketID = 1;
    }
    /**
     * tcp开启监听
     *
     * @param {Number} port 端口
     * @param {Function} startFunction 开启监听后监听方法
     */
    tcpStart(startFunction = function () {
        console.log('tcp_server start')
    }) {
        this.tcp_server.listen(this.port, startFunction);
    }

    /**
     *  客户端发送字符串
     *  
     * @param {*} str 发送的字符串
     * @param {*} cb 回调方法
     * @memberof tcp
     */
    clientSend(str, cb) {
        this.tcpClient.write(str, cb);
    }

}
module.exports = tcp;