
import { NotFound } from './views/NotFound';
import { Login } from './views/Login';
import { Contact } from './views/Contact';
import { FormulaireInscription } from './views/FormulaireInscription';
import { Route , Routes, BrowserRouter } from 'react-router-dom';
import { Contenu } from './views/Contenu';
import { ContenuDetail } from './views/ContenuDetail';
import { ContenuFormulaire } from './views/formulaire/ContenuFormulaire';
import { User } from './views/User';
import { Training } from './views/Training/Training';
import { About } from './views/About';
import { AddFormation }  from './views/Training/AddFormation';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Home } from './views/Home';
import { Formations } from './views/manager/Formations';
//import { MonFormulaire } from './views/Training/ValidationForm';

const App = () => {

    return(
        
    <BrowserRouter>    
      <div className="flex flex-col justify-between bg-pink-50 text-gray-900 min-h-screen">
        
          {/* HEADER */}
          <Header />
          {/* CONTENT PAGE (Router) */}
          <div className="min-h-full">
            <Routes>
              {/* Déclaration de chaques routes associées avec son component */}
              {/* element = composant // path: chemin dan l'url */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* Etudiant  */}
              <Route path="/etudiant" element={<User />} />
              <Route path="/etudiant/contenu/:courId" element={<Contenu />} />
              <Route path="/etudiant/contenuDetail/:contenuId" element={<ContenuDetail />} />
              {/* Formateur  */}
              <Route path="/formateur" element={<User />} />
              <Route path="/formateur/contenu/:courId" element={<Contenu />} />
              <Route path="/formateur/contenuFormulaire/:courId/:contenuId" element={<ContenuFormulaire />} />
              <Route path="/formateur/contenuDetail/:contenuId" element={<ContenuDetail />} />
              {/* Visiteur  */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/formations" element={<Training />} />
              <Route path="/formulaire-inscription" element={<FormulaireInscription />} />
              
              {/* Manager  */}
              
              <Route path='/manager' element={<User/>} />
              <Route path="/manager/formations" element={<Formations />} />
              <Route path="/manager/formation/:id" element={<AddFormation />} />
              <Route path="/about" element={<About />} />
                
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
 
    )
}
export default App
