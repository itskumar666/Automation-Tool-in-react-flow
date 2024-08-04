import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ReactFlowProvider } from '@xyflow/react';
import RandomHandleNode from './nodeAbstraction/testing';


function App() {
  return (
    <div>
      <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
     < RandomHandleNode id="1" />

    </ReactFlowProvider>
    
    </div>
  );
}

export default App;
