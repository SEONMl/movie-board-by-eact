import React, { useEffect, useState } from "react";
import axios  from 'axios';
import Movie from '../components/Movie.js';
import '../CSS/Home.css';

function Home() {
  const [isLoading, setLoading]= useState(true);
  const [movies, setMovie] = useState();

  async function getMovie() {
    await axios
    .get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res=> {
      setMovie(res.data.data.movies);
      setLoading(false);
    });
  }
  useEffect(() =>{
    getMovie();
    },[]);

  return (
    <section className="container">
      {isLoading ?
      ( <div className="loader">
        <span className="loader__text">Loading...</span>
        </div>
      ) : ( 
        <div className="movies">
         {movies.map( movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.large_cover_image}
            genres={movie.genres}
            />
          ))}
        </div>
        )}
    </section>
    );
}

export default Home;