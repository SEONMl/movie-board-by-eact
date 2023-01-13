import React, { Component, useEffect, useState } from "react";
import axios  from 'axios';
import Movie from './Component/Movie.js';
import './CSS/App.css';

function App() {
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
    <section class="container">
      {isLoading ?
      ( <div class="loader">
        <span class="loader__text">Loading...</span>
        </div>
      ) : ( 
        <div class="movies">
         {movies.map( movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.poster}
            />
          ))}
        </div>
        )}
    </section>
    );
}

export default App;