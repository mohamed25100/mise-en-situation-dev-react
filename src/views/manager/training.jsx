import React from 'react';
import { FormationsArray } from '../../components/FormationsArray';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//font awesome
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';// font awesome
import {BtnAjouter} from '../../components/Btn'
export const ManagerTraining = () => {
  return (
    <>
      <div>Manager Formations</div>
<BtnAjouter className={"bg-red-900"} />

      <div className='flex justify-center'>

        <table className='border w-full mx-6'>
          <thead className='bg-slate-200'>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className=' border'>
            {FormationsArray.map((formation, index) => (
              <tr>
                <td className='text-center'>{1 + index}</td>
                <td className='text-center' key={index}>{formation}</td>
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