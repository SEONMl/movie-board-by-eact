import React, { Component, useEffect, useState } from "react";
import axios  from 'axios';
import Movie from './Component/Movie.js';

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
    <div className='App'>
      {isLoading
      ? 'Loading...'
      : movies.map((movie)=>{
        return (
          <Movie
          key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.poster}
          />
        );
      })}
    </div>);
}

export default App;