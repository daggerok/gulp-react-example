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
        <Footer />
      </div>
    )
  }
})

module.exports = Content
