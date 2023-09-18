import { useNavigate } from "react-router-dom";


export const BtnAjouter = () => {
  return (
        <button type="button">ajouter</button>
  );
};

export const BtnSubmit = ({text,className}) => {
  return(
    <button type="submit" className={className} >{text}</button>
  )
}

export const Btn = ({text,className, onClick}) => {
  return(
    <button type="button" className={className} onClick={onClick}>{text}</button>
  )
}

export const BackBtn = ({className}) => {
  const navigate = useNavigate()
return (
  <button
  onClick={() => navigate(-1)}
  className={className}
  >
      Retour
  </button>
)
}
