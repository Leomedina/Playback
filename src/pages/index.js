import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Playlist from 'components/Playlist';
import { rearrangePods, getPodsFromAPI } from 'reducers/actions';
import { updateLocalStorage } from 'utilities/localStorageUtils';
import globalAudio from 'utilities/globalAudio';

function Index() {
  const { available, savedQueue } = useSelector(store => store.columns);
  const { podcasts } = useSelector(store => store);
  const dispatch = useDispatch();
  let audios;

  //Get Pods from API on mount
  useEffect(() => {
    dispatch(getPodsFromAPI());

  }, [dispatch]);


  useEffect(() => {
    audios = globalAudio(podcasts);
  }, [podcasts])


  //Handle Drag and Drop
  const onDragEnd = result => {
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) return;
    dispatch(rearrangePods(draggableId, source, destination));
    updateLocalStorage();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App py-4 px-4 md:px-12 flex flex-col-reverse xl:flex-row bg-gray-100">
        <Playlist
          meta={available}
          podcasts={podcasts} />
        <Playlist
          meta={savedQueue}
          podcasts={podcasts} />
      </div>
    </DragDropContext>
  );
}

export default Index;
