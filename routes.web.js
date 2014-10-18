var render = require('co-render');
var Router = require('koa-router');
var routes = new Router();

routes
  .get('/', function *(next) {
    this.body = yield render('index.html', { engine: 'handlebars' });
  });

module.exports = routes;
