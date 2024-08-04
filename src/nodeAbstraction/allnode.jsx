import React, { useState, useRef, useEffect } from 'react';
import BaseNode from './baseNode';
import { Handle, Position } from 'reactflow';
import AutoResizeVariableText from './inputWrapper';
import './App.css';

// Define all node contents here
const nodeContents = {
 
  Node1: ({id,data}) => {
    const [city, setCity] = React.useState('');
    const [Node1, setNode1] = React.useState(null);
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
    return (
      <div className="Node1-content" >
         <AutoResizeVariableText id={id}/>      
      </div>
    );
  },
  Node2: ({id,data}) => {
    const [city, setCity] = React.useState('');
    const [Node1, setNode1] = React.useState(null);
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
    return (
      <div className="Node1-content" >
         <AutoResizeVariableText id={id}/>      
      </div>
    );
  },
  Node3: ({id,data}) => {
    const [city, setCity] = React.useState('');
    const [Node1, setNode1] = React.useState(null);
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
    return (
      <div className="Node1-content" >
         <AutoResizeVariableText id={id}/>      
      </div>
    );
  },Node4: ({id,data}) => {
    const [city, setCity] = React.useState('');
    const [Node1, setNode1] = React.useState(null);
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
    return (
      <div className="Node1-content" >
         <AutoResizeVariableText id={id}/>      
      </div>
    );
  },
  Node5: ({id,data}) => {
    const [city, setCity] = React.useState('');
    const [Node1, setNode1] = React.useState(null);
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
    return (
      <div className="Node1-content" >
         <AutoResizeVariableText id={id}/>      
      </div>
    );
  },

};

const nodeType = Object.entries(nodeContents).reduce((types, [key, Content]) => {
  types[key] = (props) => <BaseNode {...props} content={Content}  />;
  return types;
}, {});

export { nodeType };