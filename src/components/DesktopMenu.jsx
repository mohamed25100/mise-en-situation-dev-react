import React from 'react'
import { Link } from 'react-router-dom'

export const DesktopMenu = ({links}) => {
  return (
    <nav>
      <ul className='flex gap-10 justify-around'>
        {links.map(({ title, href }) => (
          <li className='mb-4' key={title}>
            <Link className='block' to={href}>  {title} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}