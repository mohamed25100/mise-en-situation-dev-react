import React, { useEffect, useState } from 'react'
import { BackBtn, BtnSubmit } from '../../components/Btn'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store/selectors/userSelector'

export const ContenuFormulaire = () => {

    const refFile = React.createRef()
    const [titre,setTitre] = useState("")
    const [description, setDescription] = useState("")
    const userId = useSelector(getUserId)

    const [selectedFile, setSelectedFile] = useState("");
    const {courId,contenuId} = useParams()
    const [version,setVersion] = useState(0)    
    const [contenuDtoString,setContenuDtoString] = useState("{\"id\":"+contenuId+", \"version\": " +version+", \"titre\": \"\" , \"description\": \"\",\"formateurId\":"+userId+", \"courId\": "+courId+" }")
    const POST_URL = `http://localhost:8080/contenu/file`
    const POST_CREATE = `http://localhost:8080/contenu`
    const GET_URL = `http://localhost:8080/contenu/${contenuId}`
    const navigate = useNavigate()
    const fecthContenu = async () => {
        if(contenuId>0){
            try {
                const {data} = await axios.get(GET_URL)
                setTitre(data.titre)
                setDescription(data.description)
                setVersion(data.version)
            } catch (error) {
                
            }
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            
            
            //formData.append("contenuDtoString",contenuDtoString)
            //formData.append('dto',)
            await axios.post(POST_CREATE,{id:contenuId, version: version, titre:titre, description:description,formateurId:userId, courId: courId} )
            .then((res)=>{
                console.log(refFile.current.files[0]);
                if(refFile.current.files[0]){
                    const formData = new FormData()
                    formData.append('file',refFile.current.files[0])
                    formData.append('id', res.data.id)
                    axios({
                        method : "post",
                        url : POST_URL,
                        data : formData,
                        headers : { "Content-Type": "multipart/form-data" }
                    })
                }
                /*
                */
            })/*
            await axios({
                method: "post",
                url: POST_URL,
                data: {
                    'file' : refFile.current.files[0],
                    "contenuDtoString" :  {"id":contenuId, "version": version, "titre":titre, "description":description,"formateurId":userId, "courId": courId}
                },
                headers: { "Content-Type": "multipart/form-data" },
              })*/
            /*const {reponse} = await axios.post(POST_URL ,{
                data : {
                    'file' : refFile.current.files[0],
                    'contenuDtoString' : contenuDtoString
                }
            },{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })*/
            navigate(-1)
        } catch (error) {
            console.log(contenuDtoString);
            console.log(error);
        }
    }

    useEffect(()=>{
        fecthContenu()
    },[])

  return (
    <main className='my-10 container mx-auto min-h-screen text-center'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4">
                <BackBtn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'}/>
                
        </div>
        <form className='sm:w-full lg:w-2/3 mx-auto flex flex-col gap-2' onSubmit={handleSubmit} >
            <h1 className='my-4 text-2xl font-bold text-pink-700'>{contenuId>0 ? "Modifier le contenu pour le Cour" : "Créer un contenu pour le Cour"} </h1>
            <div>
                <label htmlFor="nom">Titre:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        minLength="2"
                        maxLength="100"
                        onChange={(e)=>{setTitre(e.target.value)}}
                        value={titre}
                    />
            </div>
              
            <div>
            <label htmlFor="desc">Decription:</label><br />
                    <textarea className='w-full py-2 px-2 border rounded-lg'
                        id="desc"
                        name="desc"
                        required
                        rows="10"
                        onChange={(e)=>{setDescription(e.target.value)
                        
                        }}
                        value={description}
                    />
            </div>   
            <div>
                <label htmlFor="file">Fichier à télécharger :</label><br />
                    <input className='w-full border rounded-lg file:text-pink-700 file:font-bold file:bg-pink-300 file:w-2/6 file:rounded-lg file:rounded-tr-none file:rounded-br-none file:px-4 file:py-2 file:mr-4 file:border-none hover:cursor-pointer text-gray-400'
                        type="file"
                        id="file"
                        name="file"
                        ref={refFile}
                    />
            </div> 
            <BtnSubmit className={"bg-pink-50 text-pink-700 hover:bg-pink-300 py-3 px-7 font-bold rounded-sm my-6 shadow-sm shadow-black"} text={"Créer"} />
                </form> 
    </main>
  )
}
