import React from 'react'

function Nav() {
  return (
    <div className="nav-main">
      <div className="wrap">
        <a className="nav-home" href="https://facebook.github.io/react/index.html">
          <img className="nav-logo" src="https://facebook.github.io/react/img/logo.svg" width="36" height="36"/>
          React
        </a>
        <ul className="nav-site nav-site-internal">
          <li><a href="https://facebook.github.io/react/docs/getting-started.html">Docs</a></li>
        <li><a href="https://facebook.github.io/react/support.html">Support</a></li>
        <li><a href="https://facebook.github.io/react/downloads.html">Download</a></li>
        <li><a href="https://facebook.github.io/react/blog/">Blog</a></li>
        </ul>

        <ul className="nav-site nav-site-external">
          <li><a href="https://github.com/facebook/react">GitHub</a></li>
          <li><a href="https://facebook.github.io/react-native/">React Native</a></li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Nav
