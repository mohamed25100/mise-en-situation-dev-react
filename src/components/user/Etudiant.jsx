import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFormationId, getUserId } from '../../store/selectors/userSelector'
import axios from 'axios'
import { Cours } from '../Cours'

export const Etudiant = () => {
  
  const [formationNom,setFormationNom] = useState("")
  const userId = useSelector(getUserId)
  const formationId = useSelector(getFormationId)

  const URL_COURS = `http://localhost:8080/formation/${formationId}`
  

  const [cours, setCours] = useState([])

  const fecthEtudiant = async () => {
    try {
      
      const {data} = await axios.get(URL_COURS)
      setCours(data.cours)
      
      
    } catch (error) {
      
    }finally{
      
    }
  }
  
 useEffect(()=>{
  fecthEtudiant()
 },[])

  return (
    <>
    <h1>{formationNom}</h1>
    {cours && <Cours cours={cours}/>}
    
    </>
    
  )
}
