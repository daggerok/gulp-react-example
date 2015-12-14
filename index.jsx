const React = require('react');
const ReactDOM = require('react-dom');

const $ref = falcor.Model.ref
const $atom = falcor.Model.atom

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
          $atom: ['Max', 'Dag', 'Other']
        }
      },
      {
        name: 'Brownies',
        instructions: 'Aslo bake them rolf',
        ingredients: [
          $ref('ingredientsById[2]')
        ],
        authors: {
          $atom: ['Alex', 'Sam']
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
  .then( data => console.log(data))

const App = React.createClass({
  render() {
    return (
      <div>
        <Recipes 
          recipes={[
            {
              name: 'new name',
              instructions: 'new instruction',
              ingredients: [ 'new ingredient 1', 'new ingredient 2' ],
              authors: [ 'Max', 'Serg' ]
            }
          ]} />
      </div>
    )
  }
});

const Recipes = React.createClass({
  render() {
    return (
      <div>
        {this.props.recipes.map( recipe => {
          return <Recipe {... recipe} key={recipe} />
        })}
      </div>
    )
  }
});

const Recipe = React.createClass({
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Instructions instructions={this.props.instructions} />
        <Ingredients ingredients={this.props.ingredients} />
        <Authors authors={this.props.authors} />
      </div>
    )
  }
});

const Name = React.createClass({
  render() {
    return <h1>name: {this.props.name}</h1>
  }
});

const Instructions = React.createClass({
  render() {
    return <h2>Instructions: {this.props.instructions}</h2>
  }
});

const Ingredients = React.createClass({
  render() {
    return <h3>Ingredients: {JSON.stringify(this.props.ingredients)}</h3>
  }
});

const Authors = React.createClass({
  render() {
    return <div>Aithors: {JSON.stringify(this.props.authors)}</div>
  }
});

ReactDOM.render(<App/>, document.getElementById('target') );
