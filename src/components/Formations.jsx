import React from 'react';

export const Formations = () => {
  const formations = ["Formation Webmaster", "Formation Excel", "Formation HTML 5", "Formation Word"];

  return (
    <>
          {formations.map((formation, index) => (
            <tr>
            <td key={index}>{formation}</td>
            </tr>
            
          ))}
        <br />
    </>
  );
};