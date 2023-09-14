import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cours } from "../components/Cours";

const Student = () => {

  const {id} = useParams()
  const [loading,setLoading] = useState(false)
  const [idFormation,setIdFormation] = useState(0)
  const [cours,setCours] = useState([])
  const URL_ETUDIANT = `//localhost:8080/etudiant/${id}`
  
  const navigate = useNavigate()

  const handleClick =  (courId) => {
    navigate(`/etudiant/contenu/${id}/${courId}`)
  }

  const fecthEtu = async () =>{
    setLoading(true)
    try {
      const {data} = await axios.get(URL_ETUDIANT)
      setIdFormation(data.formationId)
      const URL_Formation = `//localhost:8080/formation/${data.formationId}`
      const {dataFormation} = await axios.get(URL_Formation)
      setCours(dataFormation.cours)
    } catch (error) {
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fecthEtu()
  },[])

  return (
    <>
      <main className='my-10 container mx-auto min-h-screen text-center'>
        {!loading && cours.length>0 && 
          <Cours cours={cours} handleClick={handleClick} />
        }
        
      </main>
    </>
  );
}
export default Student


// user - student - formateur