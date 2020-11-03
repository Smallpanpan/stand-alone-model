/**
 * 公共方法类封装：http的工具类
 * @author smallpanpan
 * @date 2020/8/3
 */
const request = require('request');
const httpService = require('http');
const url = require('url');
class http {
    constructor(hostName) {
        this.loginNumber = 0;
        this.hostName = hostName;
        this.accessTokens = '';
        this.logTimeout = '';
        this.headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': this.accessTokens,
            'json': true,
        };
    }
    /**
     * post请求
     * @param {Object} content 请求参数
     */
    post(postUrl, content) {
        return new Promise((resolve, reject) => {
            let options = {
                url: this.hostName + postUrl,
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(content),
            }
            request.post(options, (err, res, body) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(body);
                }
            });

        });
    }


    /**
     * token登录
     */
    accessTokenLogin() {

    }
    /**
     * 监听http服务
     */
    createServer(cb) {
        httpService.createServer((request, response) => {
            let pathname = url.parse(request.url).pathname;
            cb({
                request,
                response,
                pathname
            });
        }).listen(8080);
    }
}
module.exports = http;