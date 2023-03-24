import { useState } from 'react'

import './App.css'
import { Route , Routes } from 'react-router'
import Phones from './components/Phones'
function App() {
 

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Phones />}>

      </Route>
  
     </Routes>
   
    </div>
  )
}

export default App

