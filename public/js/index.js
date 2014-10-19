/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello world</h1>
        <Link to="app">Home</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
        <this.props.activeRouteHandler />
      </div>
    );
  }
});

module.exports = App;
