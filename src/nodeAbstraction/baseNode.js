// BaseNode.js
import React from 'react';
import { Handle,Position } from 'react-flow-renderer';

const BaseNode = ({ data, content: Content }) => {
    console.log(data,"ye data hai")
    
  // const renderInputHandles = () => {
  //   return data.inputs.map((input, index) => (
  //     <Handle
  //       key={`input-${index}`}
  //       type="target"
  //       position="left"
  //       id={`input-${index}`}
  //       style={{ top: `${10 + index * 20}%` }}
  //     />
  //   ));
  // };

//   const renderOutputHandles = () => {
//     return data.outputs.map((output, index) => (
//       <Handle
//         key={`output-${index}`}
//         type="source"
//         position="right"
//         id={`output-${index}`}
//         style={{ top: `${10 + index * 20}%` }}
//       />
//     ));
//   };

  return (
    <div className={`node ${data.type}`}>
      <div className="node-header">{data.name}</div>
      {/* {renderInputHandles()} */}
      <Content {...data} />
      {/* {renderOutputHandles()} */}
      
    </div>
  );
};

export default BaseNode;