import React from 'react'
import { Link } from 'react-router-dom'

export const DesktopMenu = ({ links }) => {
  const manager = false;
  return (
    <nav>
      <ul className='flex justify-between mx-5'>
        <li><img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" width='100px' alt="logo" /></li>

        <li className='my-auto'>
          <ul className='flex justify-around gap-14 font-bold'>
          <li><Link to={"/"} className='font-bold'>Home</Link></li>
          { manager === true && <li><Link to={"/manager/formations"} className='font-bold'>Formations</Link></li>}
          { !manager && <li><Link to={"/formations"} className='font-bold'>Formations</Link></li>}
            
            <li><Link to={"/contact"} className='font-bold'>Contact</Link></li>
            <li><Link to={"/about"} className='font-bold'>Qui sommes-nous</Link></li>
          </ul>
        </li>
        <Link className='my-auto rounded-lg bg-amber-300 px-4 py-3 font-bold' to={"/login"}>se conecter</Link>
      </ul>
    </nav>
  )
}