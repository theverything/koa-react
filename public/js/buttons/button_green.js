/** @jsx React.DOM */

var React = require('react');

var ButtonGreen = React.createClass({
  render: function() {
    return (
      <button className='btn green'>Button Green</button>
    );
  }
});

module.exports = ButtonGreen;
