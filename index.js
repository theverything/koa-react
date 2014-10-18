/**
 * Modules
 */
var koa = require('koa');
var logger = require('koa-logger');
var bodyparser = require('koa-bodyparser');
var mount = require('koa-mount');
var web = require('./routes.web');
var api = require('./routes.api');
var app = koa();

/**
 * Middleware
 */
app.use(logger());
app.use(bodyparser());

/**
 * Routes
 */
app.use(mount('/api', api.middleware()));
app.use(mount('/', web.middleware()));

module.exports = app;
