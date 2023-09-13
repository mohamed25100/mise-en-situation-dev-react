import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cours } from "../components/Cours";

export const Trainer = () => {
  const param = useParams()
  const [cours,setCours] = useState([])
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const URL = `//localhost:8080/cours/formateur`

  const fecthCour = async () => {
    console.log("1");
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

  useEffect(()=>{
    fecthCour()
  },[])

  return (
    <>
    <main className='my-10 container mx-auto min-h-screen text-center'>
      
      <Cours cours={cours}/>
    </main>
      
    </>
  );
}