import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
export const AddFormation = () => {
  const [formData, setFormData] = useState({});
const param =useParams()


const fetchformation = async () => {
    if(param.id >0 ){
        try {
            const response = await axios.get('http://localhost:8080/manager/formation/' + param.id)
            setFormData(response.data) ;
            // Traitez la réponse du serveur ici, si nécessaire
          } catch (error) {
            // Gérez les erreurs ici
            console.error('Une erreur s\'est produite lors de l\'envoi des données au back-end:', error);
          }      
    }
}
 useEffect(() => {
    fetchformation()
 },[])




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/manager/formation', formData);
      // Traitez la réponse du serveur ici, si nécessaire
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
    <>
    <h1>form</h1>
    <form onSubmit={handleSubmit}>
      <label for="nomFormation">Nom de la Formation :</label><br />
      <input  type="text" name="nomFormation" onChange={handleChange} value={formData.nomFormation} required/><br /><br />

      <label for="id">formation Id:</label><br />
      <input id="id" type="text" onChange={handleChange} value={formData.id} required/><br /><br />

      <h2>Cours :</h2>
      <div class="cours">
      
      <label for="nomCours1">Nom du Cours :</label><br />
      <input type="text" id="nomCours1" name="nomCours[]" onChange={handleChange} /><br /><br />


      <label for="formateur1">Formateur :</label>
      <input type="text" id="formateur1" name="formateur[]"  onChange={handleChange}/><br />

      <button type="submit">Envoyer</button>

      </div>
    </form>

    </>
  );
}