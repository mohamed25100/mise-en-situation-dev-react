import React from 'react'
import { Retour } from '../components/Btn'

export const About = () => {
  return (
<main>
    <h1 className='text-8xl font-bold text-center py-12 text-pink-700'>Notre organisme de formation</h1>

    <div className='flex justify-around mx-10'>
<div>

<div className='bg-slate-50 p-10 rounded-xl' >

  <p className='bg-slate-300 mx-6 rounded-xl p-3 my-10'>DAWAN est un organisme de formation enregistré sous le numéro 52 44 03634 44. Nous assurons des formations informatiques dans nos locaux à Paris, à Nantes, à Lyon, à Lille, à Bordeaux, à Rennes, à Marseille, à Toulouse, à Strasbourg, à Montpellier ou sur le site de nos clients. </p>
  <div className='bg-slate-200 mx-6 rounded-xl p-3 my-10'>

    <p>L’évolution constante des technologies de l’information entraîne de nombreuses mutations au sein de l’entreprise. Élément moteur de cette dynamique du changement, la formation professionnelle accroît de façon importante le degré d’implication des salariés :</p>
    <ul>
      <li>- elle étend leur champ de compétences,</li>
      <li>- accompagne et rythme leurs missions,</li>
      <li>- favorise leur évolution personnelle,</li>
      <li>- les prépare concrètement à l’appropriation de leurs nouvelles fonctions.</li>
    </ul>
  </div>

  {/* 3eme div */}

  <div className='bg-slate-300 mx-6 rounded-xl p-3 my-10'>
    <p>Lors des formations que nous assurons, nous nous appliquons à cerner tous les besoins exprimés et à assurer un cours qui réponde parfaitement aux attentes professionnelles de notre public. <br />
      Dans cette optique, nous proposons également des formations sur mesure. Elles permettent généralement de lancer un projet d’équipe en abordant les points les plus techniques et les plus difficiles à traiter.<br />

      En choisissant DAWAN, vous misez sur une pédagogie intelligente alliée à un savoir-faire solide. Vos collaborateurs bénéficieront de l’expérience « terrain » de nos formateurs ; outre les cours qu’ils assurent, nos consultants interviennent en effet sur de nombreux projets d’intégration de systèmes et de développement.<br />

      Organisme de formation déclaré sous le numéro le 52 44 03634 44 auprès de la Préfecture de la Région des Pays de la Loire (Cet enregistrement ne vaut pas agrément de l’Etat), DAWAN est une société créée en mars 2000 à Nantes et qui est implantée à Paris depuis mars 2004, à Lyon depuis 2008 et à Lille depuis 2009. DAWAN développe plusieurs secteurs de compétences complémentaires :<br />
      - La gestion de projet Internet<br />
      - La création d'Intranet<br />
      - La formation<br />

      Pour en savoir plus sur notre société ou nos cours, vous pouvez nous appeler au 09.72.37.73.73 ou nous contacter par le biais du formulaire de demande de renseignements.</p>
  </div>
</div>
</div>

      <div>
        <img width="400" src="https://www.dawan.fr/build/images/sidebar/logoDataDock.5f808feb.jpg" alt="logoDataDock" />
        <img width="400" src="https://www.dawan.fr/build/images/sidebar/charte-de-deontologie-cpf.a273f080.png" alt="charte-de-deontologie" />
        <img width="400" src="https://www.dawan.fr/build/images/sidebar/logo-acteurs-competence.960dac0f.jpg" alt="logo-acteurs-competence" />
        <img width="400" src="https://www.dawan.fr/build/images/sidebar/charte-diversite.697e3ed3.png" alt="charte-diversite" />
      </div>
      </div>
    </main>
  )
}