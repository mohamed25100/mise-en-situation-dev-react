import axios from "axios";
import { Formations, Table } from "./Formations";
import { useEffect, useState } from "react";

export const Footer = () => {

    const [FormationsArray, setFormation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const URL_API = "http://localhost:8085/manager/formation"
    const fetchFormation = async () => {
        setLoading(true);
        try {
          const { data } = await axios.get(URL_API);
          
          setFormation(data);
        } catch (error) {
            console.log(error);
          setError(error.message || "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchFormation()
    },[])

  return (
      <footer className='flex py-4 bg-orange-300 gap-5'>
          <div>
            
            <img src="https://www.dawan.fr/build/images/dawan-logo.5b6f94e2.png" alt="logo" />
            <ul>
                <li>09 72 37 73 73 <br />(Prix d'un appel local)</li>
                <li>www.dawan.fr</li>
                <li>Formations, Ingénierie, Conseil</li>
                <li>France - Belgique - Suisse</li>
            </ul>

          </div>

          {/* Le top 30 de nos formations */}
          <div>
              <h1 className="text-xl font-bold">Le top 30 de nos formations</h1>

              <table className="grid grid-cols-2">
              <Formations FormationsArray={FormationsArray}/>
                  
              </table>
          </div>
          {/* end Le top 30 de nos formations */}

          {/* Découvrez Dawan */}
          <div>
              <h1 className="text-xl font-bold">Découvrez Dawan</h1>
              <p>Présentation de notre organisme de formation</p>
              <p>Modalités pédagogiques</p>
              <p>Références</p>
          </div>

          {/* Suivez nous */}
          <div>
              <h1 className="text-xl font-bold">Suivez nous</h1>
          </div>
      </footer>
  )
}