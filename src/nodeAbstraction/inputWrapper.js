import React, { useState, useRef, useEffect } from 'react';
import { Handle, useUpdateNodeInternals } from 'reactflow';
import './App.css';

const AutoResizeVariableText = ({ id }) => {
  const [text, setText] = useState('');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const [inputType, setInputType] = useState();


  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

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
  }, [text]);

  useEffect(() => {
    const handlePositions = variables.map((_, index) => ({
      id: `op-${index}`,
      position: { x: 300, y: 20 * (index + 1) }, // Assuming position logic
      type: 'source',
    }));
    console.log("Updating node internals...");
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      style={{
        position: 'relative',
        padding: '0px 10px 0px 10px',
        minHeight: '0px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{paddingBottom:'5px'}}>{id}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      
        <div>Name:</div>


          <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        style={{ width: '170px', boxSizing: 'border-box', height: '50px',border:'1px rgb(18, 124, 173,0.4) solid',borderRadius: '5px',outline:'none'}}
      />
        
        </div>
       <label style={{paddingTop: '10px',paddingBottom: '7px'}}>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
            <option value="File">JSON</option>
            <option value="File">Formatted Text</option>
            <option value="File">Audio</option>
            <option value="File">Image</option>





          </select>
        </label>
      {variables.map((_, index) => (
        <div className='handle-container'       
        > 
        <span className='handle-name'     style={{ top: `${15 * (index + 1)}px` }}
 >{variables[index]} </span>
        <Handle
          key={index}
          type="target"
          position="left"
          id={`op-${index}`}
          style={{ top: `${15* (index + 1)}px` }}
        /></div>

      ))}
    </div>
  );
};

export default AutoResizeVariableText;