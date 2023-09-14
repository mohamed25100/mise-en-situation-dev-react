import { Link } from 'react-router-dom'

export const BtnAjouter = ({style, value, link}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href= link;
  }
  return (
        <button type="button" className={style} onClick={handleClick}>{value}ajouter</button>
  );
};

export const Btn = ({text,nameClass, onClick}) => {
  return(
    <button type="button" className={nameClass} onClick={onClick}>{text}</button>
  )
}

export const Retour = () => {
  return (
    <Link className='mt-3 underline text-center text-pink-700' to={'/'}>
    Sortons d'ici
    </Link>
  )
}

export const GoTo = ({link}) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href= link;
  }
  return (
    <button type="button" onClick={handleClick}>Retour à la liste des formations</button>
  )
}