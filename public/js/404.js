/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Four04 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>404</h1>
        <Link to="app">Home</Link>
      </div>
    );
  }
});

module.exports = Four04;
