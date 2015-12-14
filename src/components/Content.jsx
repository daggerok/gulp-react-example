import React      from "react"

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Footer"
    this.state = { count: props.init }
  }
  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div onClick={this.increment.bind(this)}>
        clicked {this.state.count} times.
      </div>
    )
  }
}

Content.propsTypes = { init: React.PropTypes.number.isRequired }
Content.defaultProps = { init: 0 }
