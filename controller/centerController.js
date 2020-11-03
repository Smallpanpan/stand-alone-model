/**
 * 用于解析各输入端的数据，处理后返回相应的结果
 * @author smallpanpan
 * @date 2020/8/3
 */
const baseController = require('./baseController');
class center extends baseController {
    constructor(httpClient, tcpServe) {
        let topics = [];
        super(httpClient, tcpServe, topics);
        this.start();
    }

    start() {
        
    }



}


module.exports = center;