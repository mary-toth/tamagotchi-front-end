import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export function PetInfoPage() {
  const [petInfo, setPetInfo] = useState({
    id: undefined,
    name: '',
    hungerLevel: '',
    happinessLevel: '',
  })

  const params = useParams()
  const history = useHistory()

  useEffect(function () {
    async function loadPetInfo() {
      const response = await axios.get(
        // @ts-ignore
        `https://tamagotchiapi.herokuapp.com/api/Pets/${params.id}`
      )
      setPetInfo(response.data)
    }
    loadPetInfo()
  }, [])

  async function deletePet() {
    const response = await axios.delete(
      `https://tamagotchiapi.herokuapp.com/api/Pets/${params.id}`
    )
    history.push('/')
  }

  return (
    <nav className="petinfo">
      <ul>
        <p className="petName">{petInfo.name}</p>
        <p>ID: {petInfo.id}</p>
        <p>
          Birthday:
          {
            // @ts-ignore
            petInfo.birthday
          }
        </p>
        <p>Hunger: {petInfo.hungerLevel}</p>
        <p>Happiness: {petInfo.happinessLevel}</p>
        <div className="feedpetscold">
          <button className="interact">Feed</button>
          <button className="interact">Scold</button>
          <button className="interact">Play</button>
        </div>
        <div className="deletesection">
          <button className="delete" onClick={deletePet}>
            Delete Pet
          </button>
        </div>
      </ul>
    </nav>
  )
}
