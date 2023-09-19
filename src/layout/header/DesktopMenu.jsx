import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getIsLogin, getNameClass, getUserId } from '../../store/selectors/userSelector';
import { logout } from '../../store/actions/userAction';
import { USER_TYPES } from '../../store/types/userTypes';


export const DesktopMenu = ({ links }) => {
  const nameClass = useSelector(getNameClass)
  const isLogin = useSelector(getIsLogin)
  const userId = useSelector(getUserId)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())  }

  return (
    <nav>
      {userId < 0 ? <ul className='flex justify-between mx-5'>
        <li><img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" width='80px' alt="logo" /></li>

        <li className='my-auto'>
          <ul className='flex justify-around gap-14'>
          <li>
            <Link className='font-bold text-xl' to={"/"}>Home</Link>
            
          </li>
          
          <li><Link className='font-bold text-xl' to={"/formations"}>Formations</Link></li>
            
            <li><Link className='font-bold text-xl' to={"/contact"}>Contact</Link></li>
            <li><Link className='font-bold text-xl' to={"/about"}>Qui sommes-nous</Link></li>
          </ul>
        </li>
        <Link className='my-auto rounded-lg bg-amber-300 px-4 py-3 font-bold' to={"/login"}>se conecter</Link>
        
        
      </ul>
      :
      <ul className='flex justify-between mx-5'>
        <li><img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" width='80px' alt="logo" /></li>

        <li className='my-auto'>
          <ul className='flex justify-around gap-14'>
          <li>
            {nameClass === USER_TYPES.USER_MANAGER && <Link className='font-bold text-xl' to={"/"}>Home</Link>}
            {nameClass === USER_TYPES.USER_FORMATEUR && <Link className='font-bold text-xl' to={"/"}>Home</Link>}
            {nameClass === USER_TYPES.USER_ETUDIANT && <Link className='font-bold text-xl' to={"/"}>Home</Link>}
            
          </li>
          { nameClass === USER_TYPES.USER_MANAGER  && <li><Link className='font-bold text-xl' to={"/manager/formations"}>Formations</Link></li>}
          {  nameClass !== USER_TYPES.USER_MANAGER && <li><Link className="font-bold text-xl" to={"/formations"}>Formations</Link></li>}
          <li><Link to={"/about"}>Qui sommes-nous</Link></li>
          </ul>
        </li>
        <Link className='my-auto rounded-lg bg-amber-300 px-4 py-3 font-bold' to={"/login"} onClick={handleLogout} >Se deconnecter</Link>
        
        
        
      </ul>

      }
      
    </nav>
  )
}