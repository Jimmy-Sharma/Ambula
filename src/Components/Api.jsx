import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../pages/Navbar'
import '../Styling/Api.css'

const Api = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=57aae2206da7dc6e06f17197a51211ba');
                setData(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    console.log(data)

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div>
            {data ? (
              <div  id='dataMap'>
                {
                  data.map((el) => (
                    <div  id='productDiv'>
                      <img id='ApiproductIMG' src={`https://image.tmdb.org/t/p/original//${el.backdrop_path}`} alt="" />
                      <h1 id='title'>{el.original_title || el.name}</h1>
                      <h2 className='price'>Rating : {Math.floor(el.vote_average)}</h2>
                      <h2 className='price'>Released on : {el.release_date || el.first_air_date}</h2>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Api