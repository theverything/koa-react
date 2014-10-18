/** @jsx React.DOM */

var React = require('react');

var Hello = React.createClass({
  componentDidMount: function () {
    alert('Hello there!');
  },
  render: function() {
    return (
      <h1>
        This a node and react app.
      </h1>
    );
  }
});
React.renderComponent(
  <Hello />,
  document.getElementById('app')
);
