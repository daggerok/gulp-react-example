const React = require('react');
const ReactDOM = require('react-dom');

const $ref = falcor.Model.ref

const model = new falcor.Model({
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
        authors: {
          $type: 'atom',
          value: ['Max', 'Dag', 'Other']
        }
      },
      {
        name: 'Brownies',
        instructions: 'Aslo bake them rolf',
        ingredients: [
          $ref('ingredientsById[2]')
        ],
        authors: {
          $type: 'atom',
          value: ['Alex', 'Sam']
        }
      }
    ]
  }
});

// model.get('recipes', 0, ["name", "instructions"]) // same:
// model.get('recipes[0]["name", "instructions"]')
// model.get('recipes[0].name')
// model.get('recipes[0..1]["name", "instructions"]')
// model.get('recipes[0..1].ingredients[0..9].name')
// model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions"]')
model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions", "authors"]')
  .then( data => {
    console.log(data)
  })

const App = React.createClass({
  render() {
    return <h1>Hey!</h1>
  }
});

ReactDOM.render(<App/>, document.getElementById('target') );
