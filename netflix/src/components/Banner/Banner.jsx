import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css';

function Banner() {
  const [movie, setmovie] = useState({});
  
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setmovie(randomMovie);
        console.log("Random movie selected:", randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    if (!str) return ""; 
    const sentences = str.split('. ');
    const truncatedDescription = sentences.slice(0, 4).join('. ') + (sentences.length > 4 ? '...' : '');
    return truncatedDescription;
  }

  const imageUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    : 'https://via.placeholder.com/1920x1080';

  return (
    <div className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {movie?.overview ? truncate(movie?.overview, 150) : "Loading description..."}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default Banner;
