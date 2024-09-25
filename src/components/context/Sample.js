import React, { createContext } from 'react'
import Comb1 from './Comb1'
export const MyBContect=createContext()
function Sample() {
    
  return (
    <div>
      <MyBContect.Provider value={100}>
        <Comb1/>
      </MyBContect.Provider>
    </div>
  )
}

export default Sample
