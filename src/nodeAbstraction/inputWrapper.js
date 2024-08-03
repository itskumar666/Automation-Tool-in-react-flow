import React, { useState, useRef, useEffect } from 'react';
import {Handle,Position} from "reactflow"

const AutoResizeVariableText = () => {  
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
    console.log(foundVariables);

    setVariables(foundVariables);
    console.log(foundVariables, "variable");
  }, [text]); 

 console.log(ref.current.style.height,"height")


  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div  style={{
      position: 'relative',
      border: '1px solid black',
      padding:'10px',
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
    

        {Array.from({ length: variables.length }).map((_, index) => (
          <Handle
            key={index}
            type="target"
            position="left"
            id={`handle-${index}`}
            style={{ top: `${200 / index}px` }}
          />
        ))}
     
       
  
    </div>
  );
};

export default AutoResizeVariableText;
