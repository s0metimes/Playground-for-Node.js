/**
 * TITLE: logger.js
 * AUTHOR: 정재곤 박사 (Do it Android)
 * DESCRIPTION: level 이 info 와 exception 일 때만 파일을 만들어 저장하는 logger 이다.
 *              매우 아름다우며, 유용하게 사용 가능하다. 애용하자.
 */

var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');
var abasolutePath = '/Users/sihwan/Documents/PLAYGROUND/NODEJS';

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:nn:ss.SSS ZZ');
    // ex) '2017-01-17 04:21:28.500 +0900'
}

var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily) ({
            name: 'info-file',
            filename: abasolutePath + '/log/server',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: abasolutePath + '/log/exception',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 5000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

module.exports = logger;
