import { useState } from 'react'
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount -1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>

        <div className='counter'>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>

      </header>
    </div>
  );
}

export default App;
