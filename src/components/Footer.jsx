export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='py-4'>
    <p 
    className='text-center font-bold text-lg'>
        dawan - {year} - Copyright - All right reserved</p>
   </footer>
  )
}