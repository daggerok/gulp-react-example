import React from "react"

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Example"
  }
  render() {
    return (
      <div className="example">
        <h3>{this.props.h3}</h3>
        {this.props.children}
        <div id={this.props.id}></div>
      </div>
    )
  }
}

export default Example
