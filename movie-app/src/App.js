import React, { useEffect, useState } from "react";
import axios  from 'axios';

function App() {
  const [isLoading, setLoading]= useState(true);
  const [movies, setMovie] = useState([]);

  useEffect(() =>{
    async function getMovie() {
      await axios
      .get('https://yts.mx/api/v2/list_movies.json')
      .then(data => setMovie(data.data.data.movies));
      setLoading(false);
    }
    getMovie();
    console.log(movies);
    },[]);
    
  return (
    <div className='App'>
      {isLoading? 'Loading...' : 'We are ready'}
    </div>);
}

export default App;