import React        from "react"
import Links        from "./Links.jsx"
import Descriptions from "./main/Descriptions.jsx"
import Examples     from "./main/Examples.jsx"

function Main() {
  return (
    <section className="content wrap">
        <Descriptions />
        <hr className="home-divider" />
        <Examples />
        <hr className="home-divider" />
        <Links />
    </section>
  )
}

export default Main
