/** @jsx React.DOM */

// Modules
var React = require('react');
var Router = require('react-router');

// Routing
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var routes = (
  <Routes location="history">
    <Route name="app" path="/" handler={require('./')}>
      <Route name="about" handler={require('./about')}>
        <Route name="me" handler={require('./about/me')}/>
        <Route name="us" handler={require('./about/us')}/>
        <Route name="them" handler={require('./about/them')}/>
      </Route>
      <Route name="blog" handler={require('./blog')}/>
    </Route>
    <NotFoundRoute handler={require('./404')}/>
  </Routes>
);

React.renderComponent(routes, document.getElementById('app'));
