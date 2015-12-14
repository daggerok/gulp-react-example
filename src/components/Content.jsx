module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  onClick: function(event) {
    this.setState({
      count: this.state.count + 1
    })
  },
  render: function() {
    return (
      <div onClick={this.onClick}>
        clicked {this.state.count} times.
      </div>
    );
  }
})
