/**
 * 具体业务实现模块：服务端响应方法类
 * @author smallpanpan
 * @date 2020/8/3
 */
const HamburgerService = require('../service/HamburgerService');
const HamburgerModel = new HamburgerService();
const date = require('silly-datetime');
const {order} = require('../db/schema');
const config = require('../config/index.js');
const http = require('../utils/http-utils');
let httpClient = new http(config.httpUrl());

class queryCake {
    constructor() {
        this.date = date.format(new Date(), 'YYYYMMDD');
        this.http();
    }



    // 查询所有数据
    selectAllOrder(param) {
        return new Promise(() => {
            // ...
        })
    }
    // 监听处理
    http() {
        httpClient.createServer((request, response, pathname, obj) => {
            let data, param;
            if (pathname) {
                switch (pathname) {
                    case '/api/orderlist':
                        response.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        this.date = date.format(new Date(), 'YYYYMMDD');
                        param = {
                            date: this.date
                        };
                        this.selectAllOrder(param, (res) => {
                            data = JSON.stringify({
                                message: 'this is orderList',
                                data: {
                                    orderList: res
                                },
                                code: 200
                            });
                            response.end(data);
                        });
                        break;
                    default:
                        response.writeHead(500, {
                            'Content-Type': 'application/json'
                        });
                        console.log('pathname', pathname);
                        data = JSON.stringify({
                            code: 500
                        });
                        response.end(data);
                }

            } else {
                response.writeHead(404, {
                    'Content-Type': 'application/json'
                });
                data = JSON.stringify({
                    code: 404
                });
                response.end(data);
            }
        });
    }

}
module.exports = queryCake;