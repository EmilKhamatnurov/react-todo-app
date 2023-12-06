import React, { useState, useEffect } from 'react';
import Loaders from './Loaders';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function delay() {

  }


  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    
      .then(response => response.json())
    
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      });
    

  }, []);
  return (
    <>
    {isLoading ?  (<Loaders/>) : ""}
      {JSON.stringify(users)}
    </>
  )
}

export default App
