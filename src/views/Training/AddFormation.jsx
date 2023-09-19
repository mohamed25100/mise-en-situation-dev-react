import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { BackBtn } from "../../components/Btn";
import { useSelector } from "react-redux";
import { getNameClass, getUserId } from "../../store/selectors/userSelector";
import { USER_TYPES } from "../../store/types/userTypes";
export const AddFormation = () => {

  const userId = useSelector(getUserId)
  const nameClass = useSelector(getNameClass)
  
  const localhost = "8080";
  const [formData, setFormData] = useState({});
  const {id} = useParams()
  const navigate = useNavigate()


  const fetchformation = async () => {
    if (id > 0) {
      try {
        const response = await axios.get(`http://localhost:${localhost}/formation/` + id)
        setFormData(response.data);
        // Traitez la réponse du serveur ici, si nécessaire
      } catch (error) {
        // Gérez les erreurs ici
        console.error('Une erreur s\'est produite lors de l\'envoi des données au back-end:', error);
      }
    }
  }
  useEffect(() => {
    if(userId<0){
      navigate(`/login`)
    }else if(nameClass!== USER_TYPES.USER_MANAGER){
      switch(nameClass){
        case USER_TYPES.USER_ETUDIANT : { navigate(`/etudiant`) }
        case USER_TYPES.USER_FORMATEUR : { navigate(`/formateur`) }
        default : { navigate(`/login`) }
      }
    }
    fetchformation()
  }, [])




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:${localhost}/formation`, formData);
      // Traitez la réponse du serveur ici, si nécessaire
      navigate(`/manager`)
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Une erreur s\'est produite lors de l\'envoi des données au back-end:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className='my-10 container mx-auto min-h-screen text-center'>
      <div className="grid grid-cols-3">
        <div></div>
        <BackBtn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'}/>
      </div>
      
      
      <div className="flex justify-center">
        <form className="flex flex-col gap-6   p-5 w-2/3" onSubmit={handleSubmit} >
          <h1 className="text-center">Formulaire de Demande de Formation</h1>
          <div>
            <label htmlFor="nomFormation">Nom de la Formation :</label><br />
            <input className="w-full p-2 rounded-lg" type="text" name="nomFormation" onChange={handleChange} value={formData.nomFormation} required />
          </div>
          <div>
            <label htmlFor="dateDebut">Date de début</label>
            <input className="w-full p-2 rounded-lg" type="date" name="dateDebut" onChange={handleChange} value={formData.dateDebut} />
          </div>
          <div>
            <label htmlFor="dateFin">Date de début</label>
            <input className="w-full p-2 rounded-lg" type="date" name="dateFin" onChange={handleChange} value={formData.dateFin} />
          </div>
          <button className="bg-cyan-300 px-4 py-2 rounded-lg" type="submit">Envoyer</button>
          

          
        </form>
      </div>
      
    </main>
  );
}