/** @jsx React.DOM */

var React = require('react');

var ButtonRed = React.createClass({
  render: function() {
    return (
      <button className='btn pink'>Button Red</button>
    );
  }
});

module.exports = ButtonRed;
