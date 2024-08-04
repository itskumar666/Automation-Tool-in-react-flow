import { useCallback, useState } from 'react';
import { Handle, useUpdateNodeInternals } from '@xyflow/react';
 
export default function RandomHandleNode({ id }) {
  const updateNodeInternals = useUpdateNodeInternals();
  const [handleCount, setHandleCount] = useState(0);
  const randomizeHandleCount = useCallback(() => {
    setHandleCount(Math.floor(Math.random() * 10));
    updateNodeInternals(id);
  }, [id, updateNodeInternals]);
 
  return (
    <>
      {Array.from({ length: handleCount }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position="left"
          id={`handle-${index}`}
        />
      ))}
 
      <div>
        <button onClick={randomizeHandleCount}>Randomize handle count</button>
        <p>There are {handleCount} handles on this node.</p>
      </div>
    </>
  );
}