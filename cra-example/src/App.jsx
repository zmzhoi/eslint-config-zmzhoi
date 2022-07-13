import { useEffect, useState } from 'react';

function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('hi');
  }, []);
  return <div className="App">This is a app</div>;
}

export default App;
