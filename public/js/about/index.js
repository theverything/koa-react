/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About</h1>
        <Link to="me">Me</Link>
        <Link to="us">Us</Link>
        <Link to="them">Them</Link>
        <this.props.activeRouteHandler />
      </div>
    );
  }
});

module.exports = About;
