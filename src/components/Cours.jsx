
import React from 'react'
import { Btn } from './Btn'
import { useNavigate } from 'react-router-dom'

export const Cours = ({cours,handleClick}) => {
    const nameClass = "py-2 px-10 hover:text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter"
    

  return (
    <>
        
        <div className="flex justify-center">
            <table className="border-collapse table-fixed w-full">
                <thead className="bg-pink-700">
                    <tr>
                        <th className="border-b border-pink-700 p-4 pl-8">Cour</th>
                        <th className="border-b border-pink-700 p-4 pl-8">Nom Formation</th>
                        <th className="border-b border-pink-700 p-4 pl-8">Contenus du cour</th>
                    </tr>
                </thead>
                <tbody className="bg-pink-300">
                    {
                        cours.map((cour, index) => (
                            <tr key={cour.id}>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">{cour.nomCour}</td>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">{cour.formationNomFormation}</td>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center"><Btn text={"Accès contenu"} nameClass={nameClass} onClick={() =>{
                                    handleClick(cour.id)
                                }  } /></td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </div>
    </>
  )
}
