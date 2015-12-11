import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('view')
)

import CommentBox from './components/CommentBox.jsx'

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
