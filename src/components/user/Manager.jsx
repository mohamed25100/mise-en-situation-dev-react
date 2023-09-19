import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store/selectors/userSelector'
import axios from 'axios'
import { Btn } from '../Btn'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Manager = () => {
  const userId = useSelector(getUserId)
  const [formData, setFormData] = useState([])
  {/* Formation URL */}
  const GET_ALL = `http://localhost:8080/formation`
  //const DELETE_ID = `http://localhost:8080/formation/${id}`
  // GET ALL FORMATION
  const fetchFormations = async () => {
    try {
      const {data} = await axios.get(GET_ALL)
      setFormData(data)
    } catch (error) {
      
    }
    
  }

  // DELETE BY ID
  const deleteFormation = async (id) => {
    await axios.delete(`http://localhost:8080/formation/${id}`).then(()=>{
      fetchFormations()
    })
  }

  useEffect(()=>{
    fetchFormations()
  },[])

  return (
    <>
      <h1 className='text-center py-6 font-bold text-2xl'>Listes des Formations </h1>

      <div className='grid grid-cols-4 mx-6'>
        <Link className="py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4" to={"/manager/formation/0"}>
          <Btn text={"Ajouter"}  />
        </Link>
        
      </div>
      
      
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
    {formData.map((formation, index) => (
      <tr className='border'key={index}>
        <td className='text-center'>{formation.id}</td>
        <td className='text-center' key={index}>{formation.nomFormation}</td>
        <td className='text-center'>{formation.nbCours}</td>
        <td className='text-center'>{formation.dateDebut}</td>
        <td className='text-center'>    
        
        {/* Update */}
        <span>
        <Link className='mt-3 underline text-center text-pink-700' to={"/manager/formation/"+formation.id}>
        <FontAwesomeIcon className='mr-1 text-dark bg-amber-400 p-2 rounded-lg' icon={faPen} />
        </Link>
        </span>
          

          {/* Delete */}
          <button onClick={() => deleteFormation(formation.id)}>
          <FontAwesomeIcon className='ml-1 text-white bg-rose-600 p-2 rounded-lg' icon={faTrashCan} />
          </button>
        </td>
      </tr>

    ))}
  </tbody>
</table>


</div>
    </>
  )
}
