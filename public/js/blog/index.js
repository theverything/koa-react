/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Blog</h1>
        <Link to='us'>About Us</Link>
      </div>
    );
  }
});

module.exports = About;
