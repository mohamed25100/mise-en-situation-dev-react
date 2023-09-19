import React, { useEffect } from 'react';
import { VideoPlayer1, VideoPlayer2, VideoPlayer3 } from '../components/VideoPlayer.jsx';
import { Img } from '../components/Img.jsx';

export const Home = () => {
  return (
    <>
    <div className='min-h-screen mt-10'>

      <div className='relative '>
      <img src="/img/head.png" alt="head" />
      <h1 className='text-center text-6xl text-neutral-600 font-bold absolute right-1/2 bottom-2/4 bg-white opacity-80 p-3 rounded-lg'>Bienvenu à dawan</h1>
      </div>

    
      <h2 className='text-5xl text-gray-800 font-bold text-center m-16'>Nos retours d'expériences en images</h2>

    <div className='bg-red-300 gap-1 flex text-center pt-10 justify-center pb-16'>
    <VideoPlayer1   /><VideoPlayer2   /><VideoPlayer3/>
      
    </div>
<div className="bg-zinc-500 grid grid-cols-6">
   

{/* 6 img */}

<Img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="php"  />

   <Img src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="JAVA" />

   <Img  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />

   <Img  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />

   <Img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />

   <Img  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />




</div>

    </div>
    </>
  );
}