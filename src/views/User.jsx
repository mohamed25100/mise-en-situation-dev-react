import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getNameClass, getUserId } from '../store/selectors/userSelector'
import { useNavigate } from 'react-router-dom'
import { USER_TYPES } from '../store/types/userTypes'
import { Formateur } from '../components/user/Formateur'
import { Etudiant } from '../components/user/Etudiant'
import { Manager } from '../components/user/Manager'

export const User = () => {

    const userId = useSelector(getUserId)
    const nameClass = useSelector(getNameClass)
    const navigate = useNavigate()
    console.log(nameClass);
    useEffect(()=>{
      if(userId<0){
        navigate(`/login`)
    }
    },[])
    

  return (

    <main className='my-10 container mx-auto min-h-screen text-center'>
        {nameClass === USER_TYPES.USER_FORMATEUR && <Formateur userId={userId}  />}
        {nameClass === USER_TYPES.USER_ETUDIANT && <Etudiant userId={userId} />  }
        {nameClass === USER_TYPES.USER_MANAGER  && <Manager userId={userId} />  }
    </main>
  )
}
