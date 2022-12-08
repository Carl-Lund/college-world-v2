import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/helloWorld')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
