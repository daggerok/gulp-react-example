const React = require('react')

module.exports = React.createClass({
  statics: {
    queries: {
      ingredients() {
        return ['name', 'description']
      }
    }
  },
  render() {
    return <h3>Ingredients: {JSON.stringify(this.props.ingredients)}</h3>
  }
})
