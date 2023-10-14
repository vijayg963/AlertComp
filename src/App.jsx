import { useState } from 'react';
import './App.css';
import Alert from './component/Altert';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Alert />
    </>
  );
}

export default App;
