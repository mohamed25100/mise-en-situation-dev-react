import React from 'react';
import { FormationsArray } from '../api/FormationsArray';

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