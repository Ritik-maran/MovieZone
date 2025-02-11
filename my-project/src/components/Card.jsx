// import React from 'react'
// const Card = ({movie}) => {

//   return (
//     <>
    
//     <div className="movie mt-5 flex flex-col items-center ">
        
//         <img onClick={()=>{window.open(movie.trailer,'_blank')}} className='rounded-lg h-96 w-80 object-cover mb-4 transition-transform duration-300 hover:scale-110' src={movie.poster_image} alt="poster" />
//         <h2 className='text-green-600 font-bold '><b>Title : {movie.title}</b></h2>
//         <p className='text-yellow-400'>Rating :<span className={movie.rating > 6 ? 'bg-green-600 text-white pr-1 rounded' : 'bg-red-600 text-white pr-1 rounded' }> {movie.rating}</span></p>
//         <a className='text-blue-600 hover:underline' href={movie.download_link} target='_blank'>Download</a>
//       </div>

//     </>
//   )
// }

// export default Card