import React   from "react"
import Example from "./Example.jsx"

class Examples extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Examples"
  }
  render() {
    return (
      <section className="home-section">
          <Example h3="A Simple Component" id="helloExample">
            <p>
              React components implement a <code>render()</code> method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by <code>render()</code> via <code>this.props</code>.
            </p>
            <p>
              <strong>JSX is optional and not required to use React.</strong> Try clicking on &quot;Compiled JS&quot; to see the raw JavaScript code produced by the JSX compiler.
            </p>
          </Example>

          <Example h3="A Stateful Component" id="timerExample">
            <p>
              In addition to taking input data (accessed via <code>this.props</code>), a component can maintain internal state data (accessed via <code>this.state</code>). When a component&#39;s state data changes, the rendered markup will be updated by re-invoking <code>render()</code>.
            </p>
          </Example>

          <Example h3="An Application" id="todoExample">
            <p>
              Using <code>props</code> and <code>state</code>, we can put together a small Todo application. This example uses <code>state</code> to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
            </p>
          </Example>

          <Example h3="A Component Using External Plugins" id="markdownExample">
            <p>
              React is flexible and provides hooks that allow you to interface with other libraries and frameworks. This example uses <strong>marked</strong>, an external Markdown library, to convert the textarea&#39;s value in real-time.
            </p>
          </Example>
          <script src="https://facebook.github.io/react/js/marked.min.js"></script>
          <script src="https://facebook.github.io/react/js/examples/hello.js"></script>
          <script src="https://facebook.github.io/react/js/examples/timer.js"></script>
          <script src="https://facebook.github.io/react/js/examples/todo.js"></script>
          <script src="https://facebook.github.io/react/js/examples/markdown.js"></script>
      </section>
    )
  }
}

export default Examples
