import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);  
    const [trailerUrl, setTrailerUrl] = useState("");
    const [loading, setLoading] = useState(true); 
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results || []);  
            } catch (error) {
                console.error("Fetch error:", error);
                setMovies([]);  
                setTrailerUrl('');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => {
                    console.error("Trailer not found:", error);
                    setTrailerUrl('');
                });
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies
                    .filter((movie) => (isLargeRow ? movie.poster_path : movie.backdrop_path))
                    .map((movie, index) => (
                        <img
                            onClick={() => handleClick(movie)}
                            key={index}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        />
                    ))
                }
            </div>
            <div style={{ paddingTop: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;
