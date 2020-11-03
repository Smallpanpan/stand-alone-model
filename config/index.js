/**
 * 基础数据配置文件
 */
const env = process.env.NODE_ENV
const baseConfig = require('./baseConfig.js');
const config = {
    httpUrl: () => {
        let url = {
            development: '',
            test: '',
            production: '',
        }
        return url[env]
    },
    kafkaUrl: () => {
        let url = {
            development: '',
            test: '',
            production: ''
        }
        return url[env];
    },
    

};
module.exports = config;