import React from 'react';

export const Formations = () => {
  const formations = [
    "Formation Webmaster",
    "Formation HTML 5",
    "Formation jQuery",
    "Formation E-marketing",
    "Formation PHP",
    "Formation Symfony",
    "Formation Drupal",
    "Formation Wordpress",
    "Formation Joomla",
    "Formation Talend",
    "Formation Autocad",
    "Formation Photoshop",
    "Formation Illustrator",
    "Formation InDesign",
    "Formation Premiere",
    "Formation Excel",
    "Formation Word",
    "Formation Oracle",
    "Formation Réseaux",
    "Formation VMware",
    "Formation Linux",
    "Formation Windows Server",
    "Formation Java",
    "Formation JEE",
    "Formation Cobol",
    "Formation Python",
    "Formation Delphi",
    "Formation .NET",
    "Formation C#",
    "Formation VB.net"
  ];

  return (
    <>
          {formations.map((formation, index) => (
            <tr>
            <td key={index}>{formation}</td>
            </tr>
            
          ))}
    </>
  );
};