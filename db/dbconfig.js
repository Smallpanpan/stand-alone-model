/**
 *公共方法类封装：数据库配置类
 * @author smallpanpan
 * @date 2020/8/3
 */
const Sequelize = require('sequelize');
const dbConfig = require('../config/index');
// 数据库配置文件
const sqlConfig = {
    host: dbConfig.db().host,
    user: dbConfig.db().user,
    password: dbConfig.db().password,
    port: dbConfig.db().port,
    database: dbConfig.db().database,
    timezone: '+08:00'
};

const sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    host: sqlConfig.host,
    port: sqlConfig.port,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    timezone: sqlConfig.timezone,
    logging: false
});
module.exports = sequelize;