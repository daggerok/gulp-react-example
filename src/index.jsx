import React    from "react"
import ReactDOM from "react-dom"
import Content  from "./components/Content.jsx"

HoverboardStore.getState(function(options) {
  ReactDOM.render(<Content options={options}/>, document.getElementById("ui"))
})
