import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BackBtn, Btn } from "../components/Btn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faPen } from "@fortawesome/free-solid-svg-icons"

export const Contenu = () => {

    const {id,courId} = useParams()
    const CONTENU_URL = `//localhost:8080/contenu/formateur`
    const [contenus, setContenu] = useState([])
    const navigate = useNavigate()
    


    const fecthContenu = async () => {
        try {
            const {data} = await axios.get(CONTENU_URL,{
              params : {
                formateurId : id,
                courId : courId
              }
              
            })
            setContenu(data)
          } catch (error) {
            
          }
    }


    useEffect(()=>{
        fecthContenu()
    },[])

    return (
        <>
        
        <main className='my-10 container mx-auto min-h-screen text-center'>
        
        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4">
                <BackBtn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'}/>
                <div ></div>
                <div ></div>
                <Btn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'} text={"Ajouter"} onClick={()=>{
                    navigate(`/formateur/contenuFormulaire/${id}/0`)
                }}/>
            </div>
            
            <table className="border-collapse table-fixed w-full">
                <thead className="bg-pink-700">
                    <tr>
                        <th className="border-b border-pink-700 p-4 pl-8">Titre</th>
                        <th className="border-b border-pink-700 p-4 pl-8">Nom du cour</th>
                        <th className="border-b border-pink-700 p-4 pl-8">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-pink-300">
                    {
                        contenus.map((contenu, index) => (
                            <tr key={contenu.id}>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">{contenu.titre}</td>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">{contenu.courNomCour}</td>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">
                                    <div className="flex justify-center gap-5">
                                        <FontAwesomeIcon icon={faPen} className="text-orange-700 p-1 hover:text-pink-700" size="lg" />
                                        <FontAwesomeIcon icon={faInfo} className="text-gray-700 p-1 hover:text-pink-700" size="lg" onClick={(e)=>{
                                            e.preventDefault()
                                            navigate(`/formateur/contenuDetail/${contenu.id}`)
                                        }} />
                                    </div>
                                    
                                </td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </div>
        </main>
        </>
    )
}