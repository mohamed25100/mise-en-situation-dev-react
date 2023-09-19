import React from 'react'
import { Retour } from '../components/Btn'

export const NotFound = () => {
  return (
    <main>
        <h1 className='text-8xl font-bold text-center py-12 text-pink-700'>404</h1>
        <p className='text-center text-xl'>Nous n'arrivons pas à trouver votre page..</p>
      <Retour />
    </main>
  )
}