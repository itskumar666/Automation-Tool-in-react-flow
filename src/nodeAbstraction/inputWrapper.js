import React, { useState, useRef, useEffect } from 'react';
import {Handle,Position} from "reactflow"
import {useStore }from '../store';
import { shallow } from 'zustand/shallow';
import { useUpdateNodeInternals } from '@xyflow/react';



import './App.css'

const AutoResizeVariableText = ( {setChildState,id }) => {  
  const updateNodeInternals = useUpdateNodeInternals();

  const selector = (state) => ({
   handle:state.handle,
   setHandle:state.setHandle
    
  });
  const {
    handle,
    setHandle,
  } = useStore(selector, shallow);

  const [text, setText] = useState('');
  const [variables, setVariables] = useState([]);
  const [varw, setVarw] = useState();
 
  const textAreaRef = useRef(null);
  const ref=useRef(null)

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [text])

  useEffect(() => {
    const regex = /\{\{(\w+)\}\}/g;
    const foundVariables = [...text.matchAll(regex)].map(match => match[1]);

    setVariables(foundVariables);
    setChildState(prevState => prevState + 1);
    updateNodeInternals(id); 
    setHandle(foundVariables);
  }, [text]); 

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div  style={{
      position: 'relative',
      border: '1px solid black',
      // padding:'10px',
      minHeight: '100px', 
      ref:{ref},
      width: '300px', 
    }}
  >
  <div>Input</div>
      <textarea
        ref={textAreaRef}
        value={text}
        
        onChange={handleChange}
        style={{ width: '100%', boxSizing: 'border-box',padding:'5px' }}
      />
    

        {/* {handle.map((_, index) => (
            <div key={index} className="handle-container" style={{ top: `${100 / (index + 1)}px` }}>
            <Handle
              className="yelauda"
              type="target"
              position="left"
              id={`handle-${variables[index]}`}
            />
            <div className="handle-label" >{variables[index]}</div>
          </div>
        ))}
      */}
       
  
    </div>
  );
};

export default AutoResizeVariableText;
