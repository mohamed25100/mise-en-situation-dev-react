import axios from "axios";
import React, { useState } from 'react';
export const UpdateFormation = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put('http://localhost:8085/manager/formation', formData);
      // traitez la reponse de back-end
      console.log(response.data);
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Erreur lors de la modification des données du backend:', error);
    }
  };

  return (
    <>
    <h1>form</h1>
    <form onSubmit={handleSubmit}>
      <label for="nomFormation">Nom de la Formation :</label><br />
      <input id="nomFormation" type="text" name="nomFormation" onChange={handleChange} required/><br /><br />

      <h2>Cours :</h2>
      <div class="cours">
      
      <label for="nomCours1">Nom du Cours :</label><br />
      <input type="text" id="nomCours1" name="nomCours[]" onChange={handleChange} /><br /><br />


      <label for="formateur1">Formateur :</label>
      <input type="text" id="formateur1" name="formateur[]"  onChange={handleChange}/><br />

      <button type="submit">Envoyer</button>

      </div>
    </form>
    <Retour />
    </>
  );
}