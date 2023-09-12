import React from 'react';
import { FormationsArray } from './FormationsArray';

export const Formations = () => {
  return (
    <>
          {FormationsArray.map((formation, index) => (
            <tr>
            <td key={index}>{formation}</td>
            </tr>
            
          ))}
    </>
  );
};