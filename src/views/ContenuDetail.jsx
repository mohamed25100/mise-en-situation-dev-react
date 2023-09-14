import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackBtn } from '../components/Btn';

export const ContenuDetail = () => {

    const [contenu, setContenu] = useState(null)
    const [lien,setLien] = useState()
    const [ressources, setRessource] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const param = useParams()
    const API = `//localhost:8080/contenu/${param.id}`
    const RESSOURCE = `//localhost:8080/contenu/file/${param.id}`

    const fecthContenu = async () => {
        setLoading(true)
        try {
           const {data} = await axios.get(API)
           const {response} = await axios.get(RESSOURCE,{
            responseType: 'blob'
           })
           if(data.path!=null){
                axios({
                url : RESSOURCE,
                method : 'GET',
                responseType : 'blob'
            }).then((response) => {
                // create file link in browser's memory
                const href = URL.createObjectURL(response.data);
                const link = document.getElementById('downloadFile')
                link.href = href
                link.setAttribute('download',data.path.slice(12))
            })
           }  
           /*
           */
           setContenu(data)
        } catch (error) {
            console.log(error);
        }finally{
            
            setLoading(false)
        }
    }


    useEffect(()=>{
        fecthContenu()
    },[])

  return (
    <main className='my-10 container mx-auto min-h-screen text-center'>
        
        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4">
                <BackBtn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'}/>
                <div></div>
                <div></div>
                {contenu !== null && contenu.path !== null && <a className='py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4' id='downloadFile'>Télécharger Fichier</a> }
                
            </div>
            {contenu !== null && 
            <div className='flex flex-col gap-2'>
                
                    <h1 className='font-bold text-2xl text-pink-700 py-2'>{contenu.titre}</h1>
                    <p className=''>{contenu.description}</p>
                
            </div>
            
            
            }
            
        </div>
        </main>
  )
}
