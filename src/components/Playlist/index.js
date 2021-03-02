import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PodcastCard from 'components/PodcastCard';

function AvailablePlaylist({ meta, color, podcasts }) {
  const podcastIds = meta.podcastIds;

  return (
    <Droppable droppableId={meta.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="p-5">
          <h1 className="text-2xl font-bold pb-2">{meta.name}</h1>
          {podcastIds.map((id, index) => <PodcastCard key={id} id={id} podcast={podcasts[id]} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default AvailablePlaylist;