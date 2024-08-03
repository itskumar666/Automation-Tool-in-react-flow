// AllNodes.js
import React, { useState, useRef, useEffect } from 'react';
import BaseNode from './baseNode';
import { Handle, Position } from 'reactflow';
import AutoResizeVariableText from './inputWrapper';

// Define all node contents here
const nodeContents = {
  Calculator: ({ onCalculate }) => {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [operation, setOperation] = React.useState('+');

    return (
      <div className="calculator-content">
        <textarea name="" id="" cols="30" rows="10" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1"></textarea>
        {/* <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" /> */}
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
        <button onClick={() => onCalculate(num1, operation, num2)}>Calculate</button>
      </div>
    );
  },

  Weather: (id,data) => {
    const [city, setCity] = React.useState('');
    const [weather, setWeather] = React.useState(null);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
      autoResize();
    }, [value]);
  
    const autoResize = () => {
      const input = inputRef.current;
      if (input) {
        input.style.height = 'auto';
        input.style.width = 'auto';
        input.style.height = input.scrollHeight + 'px';
        input.style.width = input.scrollWidth + 'px';
      }
    };
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };


    const getWeather = async () => {
      // const result = await ;
      // setWeather(result);
    };

    return (
      <div className="weather-content" >
         <AutoResizeVariableText/>
        {/* <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" /> */}
        <button onClick={getWeather}>Get Weather</button>
        
        {weather && (
          <div className="weather-display">
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
          </div>
        )}
      </div>
    );
  },

  // Add more node contents here...
};

// Create a node type for each content
const nodeType = Object.entries(nodeContents).reduce((types, [key, Content]) => {
  types[key] = (props) => <BaseNode {...props} content={Content}  />;
  return types;
}, {});

export { nodeType };