"use strict";

var winston,path,CONST;
winston = require('winston'),require('winston-daily-rotate-file');
path = require('path');
CONST = require('./util/constants').CONST;

winston.add(
    winston.transports.DailyRotateFile,{
        dirname: path.join(__dirname, CONST.WINSTON_PROPERTY.DIR_NAME),
        filename: CONST.WINSTON_PROPERTY.FILE_NAME,
        datePattern: CONST.WINSTON_PROPERTY.DATE_FORMAT,
        level: CONST.WINSTON_PROPERTY.LEVEL,
        json: CONST.WINSTON_PROPERTY.LEVEL,

        timestamp: function () {
            return (new Date().toUTCString());
        }
    });
winston.remove(winston.transports.Console);

module.exports = {
    win :winston
}




