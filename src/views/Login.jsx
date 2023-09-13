import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [inputClass,setInputClass] = useState("border-b border-slate-700 p-4 pl-8 text-slate-400 bg-white w-full")
  const [message, setMessage] = useState("void")
  const [isSubmit, setIsSubmit] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const BASE_URL_API = `//localhost:8080/user/login`

  const loginUser = async () => {
    
    try {
      const {data} = await axios.get(BASE_URL_API,{
        params: {email: email, password:password}
      })
      if(data.id===0){
        setMessage("error")
      }else{
        switch (data.nameClass) {
          case "Formateur":
            navigate(`/trainer/${data.id}`)
            break;
          case "Etudiant":
            
            break;
          case "Manager":
            
            break;
          case "User":
            
            break;
        
          default:
            console.log("Oupss je ne suis rien");
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSubmit(true)
    loginUser()
    
}

    return (
      <>
      <main className="container mx-auto space-y-3">
      <div className="flex flex-col justify-center px-10 xl:w-1/3 lg:w-1/2 m-auto my-32 ">
                { message == 'sucess' && <p className="w-full bg-emerald-400 text-slate-700 text-center p-4 my-2">Reussite</p>}
                { message == 'error' && <p className="w-full bg-red-700 text-slate-300 text-center p-4 my-2">Mot de passe incorrect </p>}
                
                <form className="flex flex-col my-2 w-full gap-2 items-center "  onSubmit={handleSubmit} >
                <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className={inputClass} placeholder="Tapez votre email ici" onChange={(e)=> setEmail(e.target.value)} value={email} />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" className={inputClass} placeholder="Tapez votre email ici" onChange={(e)=> setPassword(e.target.value)} value={password} />
                    <button type="submit" className="bg-red-700 my-2 p-2 w-1/2 ">S'inscrire</button>
                </form>
            </div>
      </main>
      </>
    );
};