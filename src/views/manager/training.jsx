import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//font awesome
import { faPen, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';// font awesome
import { BtnAjouter } from '../../components/Btn'
import { Link } from "react-router-dom";

export const ManagerTraining = () => {

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
  useEffect(() => {
    fetchFormation()
  }, [])


  const year = new Date();
  const getyear = year.getDay() + "/" + year.getMonth() + "/" + year.getFullYear()
  return (
    <>

      <h1 className='text-center py-6 font-bold text-2xl'>Listes des Formations </h1>
      <BtnAjouter link={"/manager/formation/0"} style="border rounded-lg w-48 mx-6 bg-blue-300 py-4 my-4 " value={<FontAwesomeIcon icon={faCirclePlus} />} />

      <div className='flex justify-center'>

        <table className='border w-full mx-6 mb-6'>
          <thead className='bg-slate-200 h-16'>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Nombre de cours</th>
              <th>date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className=' border'>
            {FormationsArray.map((formation, index) => (
              <tr className='border'>
                <td className='text-center'>{formation.id}</td>
                <td className='text-center' key={index}>{formation.nomFormation}</td>
                <td className='text-center'>{5}</td>
                <td className='text-center'>{getyear}</td>
                <td className='text-center'>    <Link className='mt-3 underline text-center text-pink-700' to={"/manager/formation/"+formation.id}>
                <FontAwesomeIcon className='mr-1 text-dark bg-amber-400 p-2 rounded-lg' icon={faPen} />
                </Link>
                  
                  <FontAwesomeIcon className='ml-1 text-white bg-rose-600 p-2 rounded-lg' icon={faTrashCan} />
                </td>
              </tr>

            ))}
          </tbody>
        </table>


      </div>

    </>
  );
}