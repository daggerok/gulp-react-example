import React      from "react"
import ReactDOM   from "react-dom"
import Nav        from "./content/Nav.jsx"
import GetStarted from "./content/GetStarted.jsx"
import Main       from "./content/Main.jsx"
import Footer     from "./content/Footer.jsx"

var Content = React.createClass({
  onChange: (event) => {
    console.log(event.target)
  },
  render: function() {
    return (
      <div onClick={this.onChange}>
        <Nav />
        <GetStarted />
        <Main />
        <form>
        {this.props.options.map(function(option) {
          return (
            <input 
              type="radio"
              name="value"
              value={option.value}
              checked={option.checked}
              key={option.label} />
          )
        })}
        </form>
        <Footer />
      </div>
    )
  }
})

module.exports = Content
