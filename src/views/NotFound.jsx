import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main>
        <h1 className='text-8xl font-bold text-center py-12 text-pink-700'>404</h1>
        <p className='text-center text-xl'>Nous n'arrivons pas à trouver votre page..</p>
        <Link className='mt-3 underline text-center text-pink-700' to={'/'}>
          Sortons d'ici
        </Link>
    </main>
  )
}