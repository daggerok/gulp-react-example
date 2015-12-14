const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')

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
});

// model.get('recipes', 0, ["name", "instructions"]) // same:
// model.get('recipes[0]["name", "instructions"]')
// model.get('recipes[0].name')
// model.get('recipes[0..1]["name", "instructions"]')
// model.get('recipes[0..1].ingredients[0..9].name')
// model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions"]')
// model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions", "authors"]')
//   .then( data => console.log(data))

const App = React.createClass({
  render() {
    return (
      <div>
        <Recipes />
      </div>
    )
  }
});

const Recipes = React.createClass({
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
});

const Recipe = React.createClass({
  statics: {
    queries: {
      recipe() {
        return _.union( 
          Name.queries.recipe(), 
          Instructions.queries.recipe(),
          Authors.queries.recipe()
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
        <Instructions instructions={this.props.instructions} />
        <Ingredients ingredients={this.props.ingredients} />
        <Authors authors={this.props.authors} />
      </div>
    )
  }
});
const Name = React.createClass({
  statics: {
    queries: {
      recipe() {
        return ['name']
      }
    }
  },
  render() {
    return <h1>name: {this.props.name}</h1>
  }
});

const Instructions = React.createClass({
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
});

const Ingredients = React.createClass({
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
});

const Authors = React.createClass({
  statics: {
    queries: {
      recipe() {
        return ['authors']
      }
    }
  },
  render() {
    return <div>Aithors: {JSON.stringify(this.props.authors)}</div>
  }
});

ReactDOM.render(<App/>, document.getElementById('target') );
