import React from 'react'
import { Link } from 'react-router-dom'

export const DesktopMenu = ({ links }) => {
  return (
    <nav>
      <ul className='flex justify-between mx-5'>
        <li><img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" width='80px' alt="logo" /></li>

        <li className='my-auto'>
          <ul className='flex justify-around gap-14'>
            <li>Formations</li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li>Qui sommes-nous</li>
          </ul>
        </li>
        <Link className='my-auto' to={"/login"}>se conecter</Link>
      </ul>
    </nav>
  )
}