const 
$ref        = falcor.Model.ref,
$atom       = falcor.Model.atom,
model       = new falcor.Model({
  cache: {
    ingredientsById: {
      1: {
        name: 'Flour',
        description: 'white and powdery'
      },
      2: {
        name: 'Chocolate',
        description: 'delicious'
      }
    },
    recipes: [
      {
        name: 'Cookies',
        instructions: 'Bake them lol',
        ingredients: [
          $ref('ingredientsById[1]'),
          $ref('ingredientsById[2]')
        ],
        authors: $atom(['Max', 'Dag', 'Other'])
      },
      {
        name: 'Brownies',
        instructions: 'Aslo bake them rolf',
        ingredients: [
          $ref('ingredientsById[2]')
        ],
        authors: $atom(['Alex', 'Sam'])
      }
    ]
  }
}),
React       = require('react'),
Recipe      = require('./recipes/Recipe.jsx'),
Ingredients = require('./recipes/recipe/Ingredients.jsx'),
_           = require('lodash')

// model.get('recipes', 0, ["name", "instructions"]) // same:
// model.get('recipes[0]["name", "instructions"]')
// model.get('recipes[0].name')
// model.get('recipes[0..1]["name", "instructions"]')
// model.get('recipes[0..1].ingredients[0..9].name')
// model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions"]')
// model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions", "authors"]')
//   .then( data => console.log(data))

module.exports = React.createClass({
  getInitialState() {
    return {
      recipes: []
    }
  },
  componentDidMount() {
    // console.log(JSON.stringify(['recipes', { to: 9 }, 'ingredients', { to: 9 }, Ingredients.queries.ingredients()], null, 2))
    model.get(
      ['recipes', { to: 9 }, Recipe.queries.recipe()],
      ['recipes', { to: 9 }, 'ingredients', { to: 9 }, Ingredients.queries.ingredients()]
    ).then( data => {
      this.setState({
        recipes: _.values(data.json.recipes)
      })
      // console.log(_.values(data.json.recipes))
    })
  },
  render() {
    return (
      <div>
        {this.state.recipes.map( (recipe, index) => {
          return <Recipe {... recipe} key={index} />
        })}
      </div>
    )
  }
})
