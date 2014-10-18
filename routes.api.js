var Router = require('koa-router');
var routes = new Router();

routes
  .get('/', function *(next) {
    this.body = "Hello API!";
  });

module.exports = routes;
