import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Playlist from 'components/Playlist';
import { rearrangePods } from 'reducers/actions';

function Index() {
  const { available, savedQueue } = useSelector(store => store.columns);
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return;
    dispatch(rearrangePods(draggableId, source, destination));
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
