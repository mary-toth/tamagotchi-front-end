import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

export function App() {
  const [pet, setPet] = useState({ names: [] })
  const [name, setName] = useState()

  // @ts-ignore
  useEffect(async () => {
    const response = await axios.get(
      'https://tamagotchiapi.herokuapp.com/api/Pets'
    )
    setPet(response.data)
  }, [])
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap');
      </style>
      <header>
        <h1>tamagotchi</h1>
        <span className="home">
          <Link to="/">home</Link>
        </span>
      </header>
      <nav>
        <ul>
          {Object.entries(pet.names).map(([petCode, petDetails]) => {
            return <li key={petDetails.id}>{petDetails.name}</li>
          })}

          {/* <li>
            <Link to="/1">Pet 1</Link>
          </li>
          <li>
            <Link to="/2">Pet 2</Link>
          </li>
          <li>
            <Link to="/3">Pet 3</Link>
          </li>
          <li>
            <Link to="/3">Pet 4</Link>
          </li>
          <li>
            <Link to="/3">Pet 5</Link>
          </li> */}
          <form>
            <h4>Add a new pet</h4>
            <label
              // @ts-ignore
              for="text1"
            >
              Name{' '}
            </label>
            <input type="text" placeholder="Enter the pet's name"></input>
            <button>Create</button>
          </form>
        </ul>
      </nav>
      {/* 
      <div className="section">
        <nav className="form">
          <form>
            <label for="text1">Name </label>
            <input type="text" placeholder="enter the pet's name"></input>
            <button>create</button>
          </form>
        </nav>
      </div> */}
      <Switch>
        <Route exact path="/">
          home{' '}
        </Route>
        <Route exact path="/1">
          pg 1{' '}
        </Route>
        <Route exact path="/2">
          pg 2{' '}
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
