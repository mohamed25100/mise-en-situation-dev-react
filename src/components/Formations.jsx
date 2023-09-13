import React from 'react';

export const Formations = ({FormationsArray}) => {
  return (
    <>
          {FormationsArray.map((formation, index) => (
            <tr>
            <td key={index}>{formation.nomFormation}</td>
            </tr>
            
          ))}
    </>
  );
};