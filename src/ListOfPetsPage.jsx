import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
          <p className="selectPet"> Select a Pet</p>
          {Object.entries(pet).map(([petCode, petDetails]) => {
            return (
              <li key={petDetails.id}>
                {' '}
                <Link to={`/pets/${petDetails.id}`}>{petDetails.name}</Link>
              </li>
            )
          })}
          <form>
            <div className="createPet">Create a New Pet</div>
            <label htmlFor="text1">Name </label>
            <input
              type="text"
              placeholder="Enter the pet's name"
              value={name}
              onChange={function (event) {
                setName(event.target.value)
              }}
            ></input>
            <button className="create" onClick={handleCreateAPet}>
              Create
            </button>
          </form>
        </ul>
      </nav>
    </>
  )
}
