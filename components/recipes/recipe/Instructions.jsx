const React = require('react')

module.exports = React.createClass({
  statics: {
    queries: {
      recipe() {
        return ['instructions']
      }
    }
  },
  render() {
    return <h2>Instructions: {this.props.instructions}</h2>
  }
})
