import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const eraseLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className={`main-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>

      <div className="calculator-container">
        <h2>Calculator</h2>
        <input className="calc-input" type="text" value={input} readOnly />
        <div className="result">Result: {result}</div>
        <div className="buttons-grid">
          {['7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','=','+'
          ].map((btn, i) => (
            <button
              key={i}
              className="calc-button"
              onClick={() => (btn === '=' ? calculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button className="calc-button erase" onClick={eraseLast}>⌫</button>
          <button className="calc-button clear" onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
