import React from "react";
import Description from "./Description.jsx"

export default class DescriptionList extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "DescriptionList";
  }
  render() {
    return (
      <div>
        {this.props.items.map(function(item) {
          return <Description h3={item.h3} key={item.h3}>{item.p}</Description>
        })}
      </div>
    );
  }
}
