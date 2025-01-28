import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='h-1/6 w-full bg-red-400 p-5 text-center  bottom-0'>
      <div>
        <h3>RecipeApp</h3>
        <p>Cooking made easy!</p>
      </div>
      <div className=' text-[#6c757d]'>
        © 2024 RecipeApp. All rights reserved. | <Link to="#">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer