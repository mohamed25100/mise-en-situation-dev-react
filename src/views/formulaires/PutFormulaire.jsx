import React, { useState } from 'react';
import axios from "axios";

export const PutFormation = () => {
  const [updatedData, setUpdatedData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const response = await axios.put('http://localhost:8080/manager/formation', updatedData);
        // Traitez la réponse du backend ici
        console.log(response.data);
      } catch (error) {
        // Gérez les erreurs ici
        console.error('Erreur lors de la modification des données du backend:', error);
      }


    // Envoyer les données modifiées au backend ici
    // Utilisez fetch, Axios, ou une autre bibliothèque pour effectuer la requête HTTP
  };

  return (
    <>
    <h1>form</h1>
    <form onSubmit={handleSubmit}>
      <label for="nomFormation">Nom de la Formation :</label><br />
      <input  type="text" name="nomFormation" onChange={handleChange} required/><br /><br />

      <label for="id">formation Id:</label><br />
      <input id="id" type="text" onChange={handleChange} required/><br /><br />

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