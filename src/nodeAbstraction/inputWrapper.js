import React, { useState, useRef, useEffect } from 'react';
import { Handle, useUpdateNodeInternals } from 'reactflow';

const AutoResizeVariableText = ({ id }) => {
  const [text, setText] = useState('');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  
  useEffect(() => {
    const regex = /\{\{(\w+)\}\}/g;
    const foundVariables = [...text.matchAll(regex)].map(match => match[1]);
    setVariables(foundVariables);
  
    const handlePositions = foundVariables.map((_, index) => ({
      id: `op-${index}`,
      position: { x: 300, y: 20 * (index + 1) }, // Assuming position logic
      type: 'source',
    }));
    console.log("this is running..................")
    updateNodeInternals(id)
  }, [text,variables]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      style={{
        position: 'relative',
        border: '1px solid black',
        padding: '10px',
        minHeight: '100px',
        width: '300px',
      }}
    >
      <div>Input</div>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        style={{ width: '100%', boxSizing: 'border-box', padding: '5px' }}
      />
      {variables.map((_, index) => (
        <Handle
          key={index}
          type="source"
          position="right"
          id={`op-${index}`}
          style={{ top: `${20 * (index + 1)}px` }}
        />
      ))}
    </div>
  );
};

export default AutoResizeVariableText;
