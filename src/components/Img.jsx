export const Img = ({src, alt}) => {
    return(
        <>
        <div>
        <h2 className="text-white">Formation {alt}</h2>
        <img className='m-auto gap-5' width="60px"  src={src} alt={alt} />
        
        </div>
        </>
        )
  }