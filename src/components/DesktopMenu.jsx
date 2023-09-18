import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/actions/userAction'
import { getIsLogin } from '../store/selectors/userSelector'

export const DesktopMenu = ({ links }) => {

  const isLogin = useSelector(getIsLogin)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

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
        {isLogin ? <Link className='my-auto' to={"/login"} onClick={handleLogout} >Se deconnecter</Link>
        : <Link className='my-auto' to={"/login"}>se connecter</Link>}
        
        
      </ul>
    </nav>
  )
}