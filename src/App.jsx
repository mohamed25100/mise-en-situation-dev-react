import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from './views/Home';
import Student from './views/Student';

import { NotFound } from './views/NotFound';
import { Login } from './views/Login';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Trainer } from './views/Trainer/Trainer';
import { TrainerDetails } from './views/Trainer/TrainerDetails';
import { Contact } from './views/Contact';
import { Training } from './views/Training/Training';
import { AddFormation }  from './views/Training/AddFormation';
import { FormulaireInscription } from './views/FormulaireInscription';
import { ManagerTraining } from './views/manager/training';

const App = () => {
    return(
        <BrowserRouter>
        <div className="flex flex-col justify-between bg-pink-50 text-gray-900 min-h-screen">
          <div className="flex flex-col">
            {/* HEADER */}
            <Header />
            {/* CONTENT PAGE (Router) */}
            <div className="min-h-full">
              <Routes>
                {/* Déclaration de chaques routes associées avec son component */}
                {/* element = composant // path: chemin dan l'url */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/etudiant" element={<Student />} />
                <Route path="/formateur" element={<Trainer />} />
                <Route path="/formateur/:id" element={<TrainerDetails />} />
  
                <Route path="/contact" element={<Contact />} />
                <Route path="/formations" element={<Training />} />
                <Route path="manager/formation/:id" element={<AddFormation />} />
  
                <Route path="/form" element={<FormulaireInscription />} />
                <Route path="/manager/formations" element={<ManagerTraining />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
  
          {/* FOOTER */}
          <Footer />
        </div>
      </BrowserRouter>
    )
}

export default App;