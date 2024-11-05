import React, { useState } from 'react'

function Character(props) { 
  const {data}=props;
  
  const [dataName, setDataName] = useState (false)  
  const handleToggle = () => {
    setDataName (!dataName)
    
  }

  

  
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={handleToggle} >
      <h3 className="character-name">{data.name}</h3>
       {dataName && (
        <p>
          Planet: 
          <span className="character-planet">{data.homeworld.name}</span>
        </p>
        
       )}
      {/* Use the same markup with the same attributes as in the mock */} 
    </div>
  )
}

export default Character
