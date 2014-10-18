/** @jsx React.DOM */
var React = require('react');
var buttons = require('./buttons');

var Page = React.createClass({
  render: function() {
    return (
      <div>
        <buttons.ButtonRed />
        <buttons.ButtonGreen />
        <buttons.ButtonBlue />
      </div>
    );
  }
});

React.renderComponent(<Page />, document.getElementById('app'));
