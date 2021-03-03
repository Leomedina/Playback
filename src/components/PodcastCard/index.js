import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import CardMeta from 'components/PodcastCard/PodcastMeta';
import PlayBtn from 'components/PodcastCard/PlayBtn';

function PodcastCard({ id, podcast, index }) {
  let toggleAudio, isPlaying = null;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <article
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`py-4 mb-4 h-28 flex justify-between bg-white shadow rounded-lg`}>
          <CardMeta podcast={podcast} />
          <PlayBtn toggleAudio={toggleAudio} isPlaying={isPlaying} />
        </article>
      )}
    </Draggable>
  );
};

export default PodcastCard;