import React, {useEffect,useState} from 'react'
import instance from "../../axios";
import requests from '../../request'
import   "./Banner.css";


function Banner() {
const [movies, setMovies] = useState([])
const [description, setDescription] = useState(false)
useEffect(() => {
    async function fetchData () {
        const request = await instance.get(requests.fetchComedyMovies)

        setMovies(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ])
    }

    fetchData()

  
}, [])
function truncate(str,n) {
  return str?.length>n ?str.substr(0,n-1)+".....":str
}
function moreInfo() {
  setDescription(!description)
  
}


  return (
    <header
    className='banner'
    style={{
      backgroundSize:'cover',
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
      backgroundPosition:"center center"
    }}>


    <div className='banner_contents'>

      <h1 className='banner_title'>{movies.title ||movies.name ||movies.orginal_name}</h1>
<div>
  
</div>
      <div className='banner_buttons'>

        <button className="button">Play</button>
        <button className="button " onClick={moreInfo} >More Info</button>

      </div>
      {description&&
      <h1 className='banner_description'>
        {truncate(movies.overview,150)}
      </h1>
}
    </div>



   
    
<div className='fade_bottom' >
    
     </div>

    </header>
  
  )
}

export default Banner