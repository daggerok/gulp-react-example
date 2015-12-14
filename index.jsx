const React = require('react');
const ReactDOM = require('react-dom');
const ref = falcor.Model.ref
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
          ref('ingredientsById[1]'),
          ref('ingredientsById[2]')
        ]
      },
      {
        name: 'Brownies',
        instructions: 'Aslo bake them rolf',
        ingredients: [
          ref('ingredientsById[2]')
        ]
      }
    ]
  }
});

// model.get('recipes', 0, ["name", "instructions"]) // same:
// model.get('recipes[0]["name", "instructions"]')
// model.get('recipes[0].name')
// model.get('recipes[0..1]["name", "instructions"]')
model.get('recipes[0..1].ingredients[0..9]')
  .then( data => {
    console.log(data)
  })

const App = React.createClass({
  render() {
    return <h1>Hello, World!</h1>
  }
});

ReactDOM.render(<App/>, document.getElementById('target') );
