import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import { PetDetails } from './components/PetDetails'

function ListOfPetsPage() {
  const [pet, setPet] = useState({})
  const [name, setName] = useState('')

  useEffect(function () {
    async function loadThePets() {
      const response = await axios.get(
        'https://tamagotchiapi.herokuapp.com/api/Pets'
      )
      setPet(response.data)
    }
    loadThePets()
  }, [])

  return (
    <>
      <nav>
        <ul>
          {Object.entries(pet).map(([petCode, petDetails]) => {
            return (
              <li key={petDetails.id}>
                {' '}
                <Link to="/PetDetails">{petDetails.name}</Link>
              </li>
            )
          })}
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
    </>
  )
}

export function HomePage() {
  return (
    <>
      <header>
        <h1>tamagotchi</h1>
        <span className="home">
          <Link to="/">home</Link>
        </span>
      </header>
      <nav>{/* <ListOfPetsPage /> */}</nav>

      <Switch>
        <Route exact path="/">
          <ListOfPetsPage />
        </Route>
        <Route path="/PetDetails">
          <PetDetails />
        </Route>
        <Route exact path="/2">
          pg 2{' '}
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
