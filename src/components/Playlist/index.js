import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PodcastCard from 'components/PodcastCard';

function AvailablePlaylist({ meta, podcasts }) {
  const podcastIds = meta.podcastIds;

  return (
    <Droppable droppableId={meta.id}>
      {(provided) => (
        <section
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="p-5 flex-1">
          <h1 className="text-3xl font-bold pb-2">{meta.name}</h1>
          {podcastIds.map((id, index) => <PodcastCard key={id} id={id} podcast={podcasts[id]} index={index} />)}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
};

export default AvailablePlaylist;