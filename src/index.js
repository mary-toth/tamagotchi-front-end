import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import { HomePage } from './HomePage'

ReactDOM.render(
  <Router>
    <HomePage />
  </Router>,
  document.getElementById('root')
)
