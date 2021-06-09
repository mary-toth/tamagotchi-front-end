import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <h1>tamagotchi</h1>
      <h2>
        <Link className="homeLink" to="/">
          home
        </Link>
      </h2>
    </header>
  )
}
