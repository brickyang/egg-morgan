'use strict';
const logger = require('koa-morgan');

module.exports = options => {
  return logger.middleware(options.format || 'combined', options.options);
};
