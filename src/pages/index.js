import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import Playlist from 'components/Playlist';

function Index() {
  const { available, savedQueue } = useSelector(store => store.columns);
  
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return;
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App p-12 h-screen bg-gray-300 lg:flex">
        <Playlist
          color="blue"
          meta={available} />
        <Playlist
          color="red"
          meta={savedQueue} />
      </div>
    </DragDropContext>
  );
}

export default Index;
