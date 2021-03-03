import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Playlist from 'components/Playlist';
import { rearrangePods, getPodsFromAPI } from 'reducers/actions';
import { updateLocalStorage } from 'utilities/localStorageUtils';

function Index() {
  const { available, savedQueue } = useSelector(store => store.columns);
  const { podcasts } = useSelector(store => store);
  const dispatch = useDispatch();

  //Get Pods from API on mount
  useEffect(() => {
    dispatch(getPodsFromAPI());
  }, [dispatch]);


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
