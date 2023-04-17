import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    alert(`You have clicked the button ${count + 1} times.`);
  };

  return (
    <div>
      <p>You have clicked the button {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
