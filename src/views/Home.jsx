import React, { useEffect } from 'react';


export const Home = () => {
  return (
    <>
    <div className='min-h-screen'>

      <div className='relative'>
      <img src="/img/head.png" alt="head" />
      <h1 className='text-center text-6xl text-neutral-600 font-bold absolute right-1/2 bottom-2/4 bg-white opacity-80 p-3 rounded-lg'>Bienvenu à dawan</h1>
      </div>

    


    <div className='bg-rose-600 flex justify-around text-center'>

      <div className='bg-yellow-300 w-1/4 h-72 pt-6 font-bold text-xl rounded-lg m-6'>carrousel</div>
      <div className='bg-lime-800 w-1/4 h-72  pt-6 font-bold text-xl rounded-lg m-6'>carrousel</div>
      <div className='bg-cyan-500 w-1/4 h-72  pt-6 font-bold text-xl rounded-lg m-6'>carrousel</div>
    </div>


    <h2 className='text-2xl font-bold text-center'>Le top 30 de nos formations le plus demandées sur le marché de l'emploi</h2>
<div className="grid grid-cols-3">

<img className='m-auto gap-5' width="100px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" />
   

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" />

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="JAVA" />

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />

   <img className='m-auto gap-5' width="100px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />

   <img className='m-auto gap-5' width="100px"  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="angular" />


</div>

    </div>
    </>
  );
}