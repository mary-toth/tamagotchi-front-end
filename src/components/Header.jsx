import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <h1>tamagotchi</h1>
      <span className="home">
        <Link to="/">home</Link>
      </span>
    </header>
  )
}
