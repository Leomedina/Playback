import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function PodcastSlot({ id, podcast, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-4 mb-3 flex justify-between items-center bg-green-400 shadow rounded-lg">
          {podcast.name}
        </div>
      )}
    </Draggable>
  );
};

export default PodcastSlot;