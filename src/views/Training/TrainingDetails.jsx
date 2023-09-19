import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formation } from "../components/Formation";

export const TrainingDetails = () => {
  const param = useParams()
  const [formation,setFormation] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const URL = `http://localhost:8080/formation`

  const fecthFormations = async () => {
    console.log("1");
    try {
      const {data} = await axios.get(URL,{
        params : {
          formationId : param.id
        }
      })
      setFormation(data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fecthFormations()
  },[])

  return (
    <>
    <main className='my-10 container mx-auto min-h-screen text-center'>
      
      <Formation formation={formation}/>
    </main>
      
    </>
  );
}