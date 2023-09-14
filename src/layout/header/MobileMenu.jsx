import React from 'react'
import { Link } from 'react-router-dom'


export const MobileMenu = ({links}) => {
  return (
    <nav>
      <ul>
        {links.map(({ title, href }) => (
          <li className='mb-4' key={title}>
            <Link className='block' to={href}>  {title} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}