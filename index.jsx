const 
React    = require('react'),
Recipes  = require('./components/Recipes.jsx'),
App      = React.createClass({
  render() {
    return <div><Recipes /></div>
  }
}),
ReactDOM = require('react-dom')

ReactDOM.render(<App/>, document.getElementById('target') );
