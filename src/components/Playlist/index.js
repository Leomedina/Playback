import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PodcastSlot from 'components/PodcastSlot/';

function AvailablePlaylist({ meta, color }) {
  const podcastIds = meta.podcastIds;

  return (
    <Droppable droppableId={meta.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`w-full p-5`}>
          <h1 className="text-2xl font-bold pb-2">{meta.name}</h1>
          { podcastIds.map((podcast, index) => <PodcastSlot key={podcast} name={podcast} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default AvailablePlaylist;