import React, { useState, useEffect } from 'react';

function App() {
  // localStorage.setItem('counter', 0)
  const [counter, setCounter] = useState(() => 
    !parseInt(localStorage.getItem('counter')) ? 0 : 
    parseInt(localStorage.getItem('counter'))
  );

  useEffect(() => {
    localStorage.setItem('counter', counter)
  }, [counter]);

  return (
    <div>
      {counter} <br />
      <button onClick={() => setCounter(counter + 1)}>Добавить 1</button>
    </div>
  )
}

export default App
