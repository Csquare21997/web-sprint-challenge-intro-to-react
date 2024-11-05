import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characterData, setCharacterData] = useState([])
  useEffect(() => {
    async function getCharacters() {
      const [planets, people] = await Promise.all([
        axios.get(urlPlanets),
        axios.get(urlPeople)
      ])
      

      let characters = people.data.map((person) => {
        const newPeople = {
          ...person,
          homeworld: planets.data.find((homeworldobject) => person.homeworld === homeworldobject.id)
        }
        return newPeople
      })
       setCharacterData (characters)

      
    }
    
    getCharacters();
        
  }, [])

  console.log(characterData)

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characterData.map((singleCharacterObject) => (
        <Character key = {singleCharacterObject.id} data={singleCharacterObject}/>
        
      )
      )}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
