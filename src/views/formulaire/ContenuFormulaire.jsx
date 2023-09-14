import React from 'react'
import { BackBtn, BtnSubmit } from '../../components/Btn'

export const ContenuFormulaire = () => {
  return (
    <main className='my-10 container mx-auto min-h-screen text-center'>
        <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4">
                <BackBtn className={'py-4 px-10 bd-pink-50 text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter my-4'}/>
                
        </div>
        <form className='w-2/3 mx-auto flex flex-col gap-2'>
            <h1 className='my-4 text-2xl font-bold text-pink-700'>Créer un contenu pour le Cour </h1>
            <div>
                <label htmlFor="nom">Nom:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        minLength="2"
                        maxLength="100"
                    />
            </div>
            <div>
                <label htmlFor="prenom">Prénom:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        minLength="2"
                        maxLength="100"
                    />
            </div>   
            <div>
            <label htmlFor="email">Email:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
            </div>   
            <div>
            <label htmlFor="telephone">Téléphone:</label><br />
                    <input className='w-full py-2 px-2 border rounded-lg'
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        minLength="10"
                        maxLength="10"
                        
                    /> 
            </div>   
            <div>
            <label htmlFor="message">Message:</label><br />
                    <textarea className='w-full py-2 px-2 border rounded-lg'
                        type="text"
                        id="message"
                        name="message"
                        required
                        rows="10"
                        
                    />
            </div>   

            <BtnSubmit className={"bg-pink-50 text-pink-700 hover:bg-pink-300 py-3 px-7 font-bold rounded-sm my-6 shadow-sm shadow-black"} text={"Créer"} />
                </form> 
    </main>
  )
}
