import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';// tailwind
import 'font-awesome/css/font-awesome.min.css';//font awesome

import reportWebVitals from './reportWebVitals';

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
import { AddFormation } from './views/formulaires/AddFormation';
import { PutFormation } from './views/formulaires/PutFormulaire';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/formation" element={<Training />} />
              <Route path="/formulaire-inscription" element={<FormulaireInscription />} />
              <Route path="/manager/formation" element={<ManagerTraining />} />
              <Route path="/manager/formation/:id" element={<AddFormation/>} />
              
              //<Route path="/manager/formation/modif/:id" element={<PutFormation/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
