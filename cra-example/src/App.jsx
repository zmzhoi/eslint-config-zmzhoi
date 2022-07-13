import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, setCount);
  }, [count]);

  return (
    <div className="App">
      <div>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Clear
        </button>
      </div>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default App;
