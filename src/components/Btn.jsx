export const BtnAjouter = () => {
  return (
        <button type="button">ajouter</button>
  );
};

export const Btn = ({text,nameClass, onClick}) => {
  return(
    <button type="button" className={nameClass} onClick={onClick}>{text}</button>
  )
}