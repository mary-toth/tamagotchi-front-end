import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { Header } from './components/Header'

export function ListOfPetsPage() {
  const [pet, setPet] = useState([])
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

  async function handleCreateAPet(event) {
    event.preventDefault()
    const response = await axios.post(
      'https://tamagotchiapi.herokuapp.com/api/Pets',
      { name: name }
    )
    const refreshPets = await axios.get(
      'https://tamagotchiapi.herokuapp.com/api/Pets'
    )
    setPet(refreshPets.data)
    setName('')
  }
  return (
    <>
      <nav>
        <ul>
          {Object.entries(pet).map(([petCode, petDetails]) => {
            return (
              <li key={petDetails.id}>
                {' '}
                <Link to={`/pets/${petDetails.id}`}>{petDetails.name}</Link>
              </li>
            )
          })}
          <form>
            <h4>Create a New Pet</h4>
            <label
              // @ts-ignore
              for="text1"
            >
              Name{' '}
            </label>
            <input
              type="text"
              placeholder="Enter the pet's name"
              value={name}
              onChange={function (event) {
                setName(event.target.value)
              }}
            ></input>
            <button onClick={handleCreateAPet}>Create</button>
          </form>
        </ul>
      </nav>
    </>
  )
}
export function App() {
  return (
    <>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <ListOfPetsPage />
        </Route>
        <Route exact path="/Pets/:id">
          <ListOfPetsPage />
        </Route>
        <Route exact path="/2">
          pg 2{' '}
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
