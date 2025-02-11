import React, { useState } from 'react'
import Data from './Data.json'

const Home = () => {
  return (
    <> 
  
    <Rocky/>
    <Hero/>
    
    </>
  )
}

export default Home


const Rocky = () => {
  const [movie, setMovie] = useState()
   
   const search = () => {
    const searchVal = document.getElementById('searchInput').value.trim();

    const movie = Data.find((item) => item.title.toLowerCase() === searchVal.toLowerCase());

    if (movie) {
      window.open(movie.download_link, '_blank');
    } else ( alert("movie not found"));

    document.getElementById('searchInput').value = '';
   }

    return (
      <nav className="sticky top-0 bg-gray-800 ">
      <div className="sticky mx-10 flex flex-wrap justify-between items-center py-4">

        <a href="#" className="text-white text-2xl font-bold hover:text-blue-600"> MovieZone</a>

        <div className='flex space-x-10 text-white '>
          <a className='hover:text-blue-600' href='#'>Home</a> 
          <a className='hover:text-blue-600' href='#'>About</a>
          <a className='hover:text-blue-600' href='#'>Contact</a>
        </div>

        <div className='flex items-center space-x-2 w-1/2 '>
          <input id='searchInput' className=' bg-gray-700 w-1/2 text-white placeholder-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ' type="text" placeholder='search for a movie' />
          <button onClick={search} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>search</button>
        </div>

        <a href="#LogIn" className=" bg-blue-600  text-white py-2 px-4 rounded hover:bg-blue-700">LogIn </a>
     
    </div>
  </nav>
    );
};


export const Hero = () => {
  return (
    <> 
      
    <div className='flex flex-wrap justify-center space-x-12 bg-red-800 text-white py-8 '>
      {Data.map((movie)=>(

        <div className="movie mt-5 flex flex-col items-center ">
        
        <img onClick={()=>{window.open(movie.trailer,'_blank')}} className='rounded-lg h-96 w-80 object-cover mb-4 transition-transform duration-300 hover:scale-110' src={movie.poster_image} alt="poster" />
        <h2 className='text-green-600 font-bold '><b>Title : {movie.title}</b></h2>
        <p className='text-yellow-400'>Rating :<span className={movie.rating > 6 ? 'bg-green-600 text-white pr-1 rounded' : 'bg-red-600 text-white pr-1 rounded' }> {movie.rating}</span></p>
        <a className='text-blue-600 hover:underline' href={movie.download_link} target='_blank'>Download</a>
      </div>

      ))};
    </div>
   
    </>
  )
}

    