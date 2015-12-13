import React           from "react"
import Description     from "./Description.jsx"
import DescriptionList from "./DescriptionList.jsx"

var Descriptions = React.createClass({
  render: () => {
    var items = [
      { 
        h3: "Data flow", 
        p: "React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding."
      }/* add more with: ', {h3: 'title', p: 'description'}'*/
    ]

    return (
      <section className="light home-section marketing-row">
        <Description h3="Just the UI">
          Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it&apos;s easy to try it out on a small feature in an existing project.
        </Description>

        <Description h3="Virtual DOM">
          React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using <a href="https://facebook.github.io/react-native/">React Native</a>.
        </Description>

        <DescriptionList items={items} />
      </section>
    )
  }
})

module.exports = Descriptions
