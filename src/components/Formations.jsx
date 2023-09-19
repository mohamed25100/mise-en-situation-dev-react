import React from 'react';

export const Formations = ({formTab}) => {
  
  return (
    <div className="grid grid-cols-2 gap-2">

          {formTab.map((formation, index) => (
            
            <div key={index}>{formation.nomFormation}</div>
            
            
          ))}
        
    </div>
  );
};