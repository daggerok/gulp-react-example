import React from "react"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.displayName = "Footer"
  }
  render() {
    return (
      <footer className="wrap">
        <div className="left">
          A Facebook &amp; Instagram collaboration.<br />
          <a href="https://facebook.github.io/react/acknowledgements.html">Acknowledgements</a>
        </div>
        <div className="right">
          &copy; 2013&ndash;2015 Facebook Inc.<br />
          Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </div>
      </footer>
    )
  }
}

export default Footer
