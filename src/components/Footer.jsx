import { Formations, Table } from "./Formations";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
      <footer className='py-4'>
          <div>
              09 72 37 73 73 <br />
              (Prix d'un appel local)<br />
              www.dawan.fr<br />
              Formations, Ingénierie, Conseil<br />
              France - Belgique - Suisse<br />
          </div>

          {/* Le top 30 de nos formations */}
          <div>
              <h1>Le top 30 de nos formations</h1>

              <table>
                  <tr>
                      <th>Formation</th>
                  </tr>

                  <Formations />
                  
              </table>
          </div>
          {/* end Le top 30 de nos formations */}

          {/* Découvrez Dawan */}
          <div>
              <h1>Découvrez Dawan</h1>
              <p>Présentation de notre organisme de formation</p>
              <p>Modalités pédagogiques</p>
              <p>Références</p>
          </div>

          {/* Suivez nous */}
          <div>
              <h1>Suivez nous</h1>

              
          </div>

          <p className='text-center font-bold text-lg'>    dawan - {year} - Copyright - All right reserved</p>
      </footer>
  )
}