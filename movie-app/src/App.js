import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading]= useState(true);
  const [movies, setMovie] = useState([]);

  
  useEffect(() =>{
    setTimeout(()=>{
      setLoading({isLoading:false});
    },3000);
    console.log("componentDidMount [Funtional Component]");
  },[]);

  return (
    <div className='App'>
      {isLoading? 'Loading...' : 'We are ready'}
    </div>);
}

export default App;