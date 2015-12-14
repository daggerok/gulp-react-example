const 
React        = require('react'),
Name         = require('./recipe/Name.jsx'),
Instructions = require('./recipe/Instructions.jsx'),
Ingredients  = require('./recipe/Ingredients.jsx'),
_            = require('lodash')

module.exports = React.createClass({
  statics: {
    queries: {
      recipe() {
        return _.union( 
          Name.queries.recipe(), 
          Instructions.queries.recipe()
        )
      },
      ingredients() {
        return Ingredients.queries.ingredients()
      }
    }
  },
  render() {
    return (
      <div>
        <Name {..._.pick(this.props, Name.queries.recipe())} />
        <Instructions {..._.pick(this.props, Instructions.queries.recipe())} />
        <Ingredients ingredients={this.props.ingredients} />
      </div>
    )
  }
})
