import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function PetInfoPage() {
  const [petInfo, setPetInfo] = useState({
    id: undefined,
    name: '',
    hungerLevel: '',
    happinessLevel: '',
  })

  const params = useParams()

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

  return (
    <div>
      <p>{petInfo.id}</p>
      <p>{petInfo.name}</p>
      <p>
        {
          // @ts-ignore
          petInfo.birthday
        }
      </p>
      <p>{petInfo.hungerLevel}</p>
      <p>{petInfo.happinessLevel}</p>
    </div>
  )
}
