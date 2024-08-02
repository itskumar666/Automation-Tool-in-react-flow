// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '', display: 'flex', flexWrap: 'wrap', gap: '10px',background:"grey" }}>
                <DraggableNode type="button" label="button"></DraggableNode>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type="calculator" label="calculator"></DraggableNode>
                <DraggableNode type="weather" label="weather"></DraggableNode>

            </div>
        </div>
    );
};
