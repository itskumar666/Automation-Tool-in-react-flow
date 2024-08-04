// BaseNode.js
import React from 'react';
import { Handle,Position } from 'react-flow-renderer';

const BaseNode = ({ data, content: Content }) => {
    

  return (
    <div className={`node ${data.type}`}>
      <div className="node-header">{data.name}</div>
      <Content {...data} />
      
    </div>
  );
};

export default BaseNode;