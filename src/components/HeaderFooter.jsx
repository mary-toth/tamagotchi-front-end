import React from 'react'
import { Link } from 'react-router-dom'

export function HeaderFooter() {
  return (
    <>
      <header>
        <h1>tamagotchi</h1>
        <h2>
          <Link className="homeLink" to="/">
            home
          </Link>
        </h2>
      </header>
      <footer>made by mary &hearts; 2021</footer>
    </>
  )
}
