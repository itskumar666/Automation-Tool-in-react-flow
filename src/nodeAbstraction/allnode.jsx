// AllNodes.js
import React, { useState, useRef, useEffect } from 'react';
import BaseNode from './baseNode';
import { Handle, Position } from 'reactflow';
import AutoResizeVariableText from './inputWrapper';
import {useStore }from '../store';
import { shallow } from 'zustand/shallow';
import { ReactFlowProvider, useUpdateNodeInternals } from '@xyflow/react';

const selector = (state) => ({
  handle:state.handle,
  setHandle:state.setHandle
   
 });
 
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

  Weather: ({id,data}) => {
    const [childState, setChildState] = useState(0);

    const {
      handle,
      setHandle,
    } = useStore(selector, shallow);
   
    const [city, setCity] = React.useState('');
    const [weather, setWeather] = React.useState(null);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
      autoResize();

    }, [value,id,childState]);
  
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

console.log("parent render")
    const getWeather = async () => {
      // const result = await ;
      // setWeather(result);
    };
  let a=new Array(handle.length).fill(9)
    return (
      <div className="weather-content" >
         
         <AutoResizeVariableText setChildState={setChildState} id={id}/>
         <p>{childState}child state kya hai yha</p>
         {a.map((key, index) => (
          console.log(index,key),
            <Handle
              style={{ top: `${100 / (index + 1)}px`}}
              className="yelauda"
              type="target"
              position="left"
              key={index}
              id={`handle-${index}`}
            />
        ))}
     
      </div>
    );
  },

  // Add more node contents here...
};

// Create a node type for each content
const nodeType = Object.entries(nodeContents).reduce((types, [key, Content]) => {
  types[key] = (props) => <BaseNode {...props} content={Content}  />;
  return types;
}, {}

);
export { nodeType };