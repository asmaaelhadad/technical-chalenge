import React from 'react'
import { Link } from 'react-router-dom'


function HomePage() {

    const showPhones = async (event)=> {
        event.preventDefault()
        try {
          await axios.get(`${import.meta.env.VITE_BASE_URL_API}/phones`)
          
         // navigate(`/phones`)
        } catch(err) {
          console.log(err)
        }}
    

  return (
    <div>
        <form onSubmit={showPhones}>
                <input  type="text" value={details}  />
                <button  type="submit">Details</button>
              </form>
    </div>
  )
}

export default HomePage;