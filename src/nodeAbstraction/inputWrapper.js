import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

import './App.css';

export const DynamicInput = () => {
//   const [value, setValue] = useState('');
//   const inputRef = useRef(null);

//   useEffect(() => {
//     autoResize();
//   }, [value]);

//   const autoResize = () => {
//     const input = inputRef.current;
//     if (input) {
//       input.style.height = 'auto';
//       input.style.width = 'auto';
//       input.style.height = input.scrollHeight + 'px';
//       input.style.width = input.scrollWidth + 'px';
//     }
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

const [text, setText] = useState(data.text || '');
const [handles, setHandles] = useState([]);

useEffect(() => {
  const matches = text.match(/{{\s*[\w]+\s*}}/g);
  if (matches) {
    const variables = matches.map(match => match.replace(/{{\s*|\s*}}/g, ''));
    setHandles(...handles,variables);
  } else {
    // setHandles([]);
  }
}, [text]);

const handleTextChange = (e) => {
  setText(e.target.value);
  data.text = e.target.value; // Update the node data
};

const adjustTextareaHeight = (e) => {
  e.target.style.height = 'auto';
//   e.target.style.width = 'auto';
//   e.target.style.width = `${e.target.scrollWidth}px`;
  e.target.style.height = `${e.target.scrollHeight}px`;
};

  return (
    // <textarea
    //   ref={inputRef}
    //   value={value}
    //   onChange={handleChange}
    //   className="dynamic-input"
    //   rows="1"
    // />
<>
    <textarea
    value={text}
    onChange={handleTextChange}
    onInput={adjustTextareaHeight}
    placeholder="Enter text with {{variable}}"
    style={{ width: '100%', boxSizing: 'border-box' }}
  />
  {handles &&   handles.map((handle, index) => (
    <Handle key={index} type="source" position={Position.Left} id={handle} />
  ))}</>
  );
};