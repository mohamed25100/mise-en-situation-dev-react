import React from 'react';
import { FormationsArray } from './FormationsArray';

export const Formations = ({formTab}) => {
  
  return (
    <div className="grid grid-cols-2 gap-2  ">

          {formTab.map((formation, index) => (
            
            <p key={index}>{formation.nomFormation}</p>
            
            
          ))}
        
    </div>
  );
};