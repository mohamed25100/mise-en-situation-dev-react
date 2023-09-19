import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//font awesome
import { faPen, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';// font awesome
import { BtnAjouter } from '../../components/Btn'
import { Link } from "react-router-dom";



import { IconFormations } from "../Home";

export const Training = () => {
  const [formData, setFormData] = useState({});
  const year = new Date();
  const getyear = year.getDay() + "/" + year.getMonth() + "/" + year.getFullYear()


  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      let response = await axios.get('http://localhost:8080/formation');
      setFormData(response.data);
    };
    fetchPost();
  }, []);

  const [FormationsArray, setFormation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL_API = "http://localhost:8080/formation"
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
  useEffect(() => {
    fetchFormation()
  }, [])
  return (
    <>

      {/* liste des formations */}
      <h2 className='text-2xl font-bold text-center my-6'>Nos différentes formations</h2>

      <div className='flex justify-center'>

        <table className='border w-full mx-6 mb-6'>
          <thead className='bg-slate-200 h-16'>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Nombre de cours</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody className=' border'>
            {FormationsArray.map((formation, index) => (
              <tr className='border'>
                <td className='text-center'>{formation.id}</td>
                <td className='text-center' key={index}>{formation.nomFormation}</td>
                
                <td className='text-center'>{5}</td>
                <td className='text-center'>{getyear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <IconFormations />
    </>
  );
}


