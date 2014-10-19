/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Us = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Us</h1>
        <Link to='app'>Home</Link>
      </div>
    );
  }
});

module.exports = Us;
