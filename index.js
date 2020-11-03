/**
 * 服务启动位置  
 * */ 

const config = require('./config');
const tcp = require('./utils/tcp-utils');
const http = require('./utils/http-utils-yun');
// 开启tcp 服务
let tcpServe = new tcp('9527');
// 开启http服务
let httpClient = new http(config.httpUrl());

//开启TCP服务
tcpServe.tcpStart(() => {
    console.log('TCP Server 开启成功');
});


const Hamburger = require('./controller/centerController');
new Hamburger(httpClient, tcpServe);
