import React from "react"
import Links from "./Links.jsx"

function GetStarted() {
  return (
    <div className="hero">
      <div className="wrap">
        <div className="text"><strong>React</strong></div>
        <div className="minitext">
          A JavaScript library for building user interfaces
        </div>

        <Links />
      </div>
    </div>
  )
}

module.exports = GetStarted
