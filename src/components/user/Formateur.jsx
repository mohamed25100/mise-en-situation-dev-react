import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Cours } from '../Cours'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store/selectors/userSelector'
import { axiosInstance } from '../../interceptors/Interceptor'

export const Formateur = () => {

  const userId = useSelector(getUserId)
  const URL = `http://localhost:8080/cours/formateur`
  const navigate = useNavigate()
  const [cours, setCours] = useState([])

  

  const fecthCour = async () => {
    try {
      const {data} = await axios.get(URL,{
        params : {
          formateurId : userId
        }
      })
      setCours(data)
    } catch (error) {
      
    }
  }

  const handleClick =  (courId) => {
    //navigate(`/formateur/contenu/${param.id}/${courId}`)
  }

  useEffect(()=>{
    fecthCour()
  },[])

  return (
    <Cours cours={cours} />
  )
}
