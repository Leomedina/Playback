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
          className="p-4 mb-3 max-h-50 flex bg-green-400 shadow rounded-md">
          <div className="flex-1">
            <h1>LOGO</h1>
          </div>
          <div className="flex-2 px-10 justify-start">
            <h1>{podcast.title}</h1>
            <h1>{podcast.name}</h1>
            <p className="">
              {podcast.description}
            </p>
          </div>
          <div className="flex-1">
            PLAYBUTTON
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default PodcastSlot;