import axios from "axios";
import React, { useState } from 'react';
import { GoTo } from "../../components/Btn";
export const AddFormation = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8085/manager/formation', formData);
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
    <GoTo link={"/manager/formations"} />
    </>
  );
}