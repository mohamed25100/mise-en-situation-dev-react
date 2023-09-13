import React from 'react';
import { FormationsArray } from '../../api/FormationsArray';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//font awesome
import { faPen, faTrashCan,faCirclePlus } from '@fortawesome/free-solid-svg-icons';// font awesome
import {BtnAjouter} from '../../components/Btn'
export const ManagerTraining = () => {
  const year = new Date();
  const getyear= year.getDay () + "/" + year.getMonth() + "/" + year.getFullYear()
  return (
    <>
    
       <h1 className='text-center py-6 font-bold text-2xl'>Listes des Formations </h1>
<BtnAjouter style="border rounded-lg w-48 mx-6 bg-blue-300 py-4 my-4 " value={<FontAwesomeIcon icon={faCirclePlus}/>} />
      
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
                <td className='text-center'>{1 + index}</td>
                <td className='text-center' key={index}>{formation}</td>
                <td className='text-center'>{5}</td>
                <td className='text-center'>{getyear}</td>
                <td className='text-center'><FontAwesomeIcon className='mr-1 text-dark bg-amber-400 p-2 rounded-lg' icon={faPen} />
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