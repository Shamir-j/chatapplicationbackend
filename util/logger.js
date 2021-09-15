let { format } = require('winston')
const winston = require("winston")
require("winston-mongodb")

const options = {
  file: {
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  file: {
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  mongo: {
    level: 'error',
    db: "mongodb+srv://smarthotelSystemUser:Hx0meBXMo2RjawLb@smarthotel.i3gmt.mongodb.net/realtimechat_database?retryWrites=true&w=majority",
    collection: 'systemlog',
    format: format.combine(format.timestamp(), format.json()),
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    new winston.transports.MongoDB(options.mongo)
  ],
  exitOnError: false
})

module.exports = logger