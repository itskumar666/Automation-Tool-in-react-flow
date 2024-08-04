// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '', display: 'flex', flexWrap: 'wrap', gap: '10px',background:"grey" }}>
                
                {/* <DraggableNode type="button" label="button"></DraggableNode> */}
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type="Node1" label="Node1"></DraggableNode>
                <DraggableNode type="Node2" label="Node2"></DraggableNode>
                <DraggableNode type="Node3" label="Node3"></DraggableNode>
                <DraggableNode type="Node4" label="Node4"></DraggableNode>
                <DraggableNode type="Node5" label="Node5"></DraggableNode>


            </div>
        </div>
    );
};
