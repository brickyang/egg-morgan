'use strict';

module.exports = app => {
  app.config.coreMiddlewares.unshift('morgan');
};
