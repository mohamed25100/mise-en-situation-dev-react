import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cours } from "../components/Cours";
import { Contenu } from "./Contenu";

export const Trainer = () => {
  const param = useParams()
  const [cours,setCours] = useState([])
  
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [isContenuClick,setIsContenuClick] = useState(false)
  const URL = `//localhost:8080/cours/formateur`
  const navigate = useNavigate()

  const fecthCour = async () => {
    
    try {
      const {data} = await axios.get(URL,{
        params : {
          formateurId : param.id
        }
      })
      
      setCours(data)
    } catch (error) {
      
    }
  }
  const handleClick =  (courId) => {
    navigate(`/formateur/contenu/${param.id}/${courId}`)
  }

  useEffect(()=>{
    fecthCour()
  },[])

  return (
    <>
    <main className='my-10 container mx-auto min-h-screen text-center'>
      <Cours cours={cours} handleClick={handleClick} />
    </main>
      
    </>
  );
}