import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { BackBtn, Btn } from "../components/Btn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { getNameClass, getUserId } from "../store/selectors/userSelector"
import { USER_TYPES } from "../store/types/userTypes"

export const Contenu = () => {

    const userId = useSelector(getUserId)
    const nameClass = useSelector(getNameClass)
    const {courId} = useParams()
    
    const CONTENU_URL = `http://localhost:8080/contenu/formateur`
    
    const [contenus, setContenu] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(userId<0){
          navigate(`/login`)
      }
    },[])

    const handledelete = async (id) => {
        
        try {
            await axios.delete(`http://localhost:8080/contenu/${id}`).then((response)=>{
                console.log(response);
                fecthContenu()
                alert(response.data)
            })
           
        } catch (error) {
            
        }
    }

    const fecthContenu = async () => {
        try {
            const {data} = await axios.get(CONTENU_URL,{
              params : {
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
                {nameClass=== USER_TYPES.USER_FORMATEUR && 
                <Link to={`/formateur/contenuFormulaire/${courId}/0`} className="py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4"   > 
                <Btn  text={"Ajouter"} onClick={()=>{
                    navigate()
                }}/> 
                </Link>}
                
                
            </div>
            {
                /**
                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded relative" role="alert">
            <strong className="font-bold">Delete Success</strong>
            <span className="block sm:inline"></span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
                 
                 */
            }
            
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
                                        {nameClass===USER_TYPES.USER_FORMATEUR &&
                                        <Link to={`/formateur/contenuFormulaire/${courId}/${contenu.id}`} className="text-orange-700 p-1 hover:text-pink-700">
                                        <FontAwesomeIcon icon={faPen} className="" size="lg" />
                                        </Link>
                                        }
                                        
                                        
                                        <Link to={`/formateur/contenuDetail/${contenu.id}`}  className="text-gray-700 p-1 hover:text-pink-700" >
                                            <FontAwesomeIcon icon={faInfo} className="" size="lg" />
                                        </Link>
                                        {nameClass===USER_TYPES.USER_FORMATEUR && 
                                            <FontAwesomeIcon icon={faTrashCan} className="text-red-600  hover:text-red-900 p-1" size="lg" onClick={ (e) => {
                                                e.preventDefault()
                                                handledelete(contenu.id)} 
                                            }  />
                                        }
                                        
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