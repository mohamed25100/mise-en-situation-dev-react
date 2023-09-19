import { useNavigate } from 'react-router-dom'

export const BtnAjouter = ({style, value, link}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href= link;
  }
  return (
        <button type="button" className={style} onClick={handleClick}>{value}ajouter</button>
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

export const Retour = () => {
  const navigate = useNavigate()
  return (
    <button className="bg-cyan-300 px-4 py-2 rounded-lg"
    onClick={() => navigate(-1)}
    >Retour</button>
  )
}