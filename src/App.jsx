import Home from './views/Home';
import Student from './views/Student';
import { NotFound } from './views/NotFound';
import { Login } from './views/Login';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Trainer } from './views/Trainer';
import { Contact } from './views/Contact';
import { Training } from './views/Training';
import { FormulaireInscription } from './views/FormulaireInscription';
import { ManagerTraining } from './views/manager/training';
import { Route , Routes, BrowserRouter } from 'react-router-dom';

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
              <Route path="/student" element={<Student />} />
              <Route path="/trainer/:id" element={<Trainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/training" element={<Training />} />
              <Route path="/formulaire-inscription" element={<FormulaireInscription />} />
              <Route path="/manager/training" element={<ManagerTraining />} />
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