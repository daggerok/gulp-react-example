import React from "react";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Description";
  }
  render() {
    return (
      <div className="marketing-col">
        <h3>{this.props.h3}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
