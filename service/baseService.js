// 用于编写数据查询业务逻辑层（与数据库交互模块）
const order = require('../db/models/order');
const userorder = require('../db/models/userorder');
const sequelize = require('../db/dbconfig');
const Sequelize = require('sequelize');
const Op = Sequelize.Op
class baseService {
    constructor() {

    }
    insertOrder(objOrder,objorderDetail) {
        return new Promise((resolve, reject) => {
            return sequelize.transaction(t => {
                return order.create(objOrder, { transaction: t }).then(res => {
                    return orderDetail.create(objorderDetail)
                }, { transaction: t })
            }).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e);
            });
        })
    }
    // 查询最新order信息
    findOrderDesc(params) {
        return new Promise((resolve, reject) => {
            userorder.findOne({
                where: params,
                order: [['weight', 'DESC']],
                raw: true
            }).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e);
            })
        })
    }
 
}

module.exports = baseService;



