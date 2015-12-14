const React = require('react')

module.exports = React.createClass({
  statics: {
    queries: {
      recipe() {
        return ['name', 'authors']
      }
    }
  },
  render() {
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <pre>Authors: {JSON.stringify(this.props.authors)}</pre>
      </div>
    )
  }
})
