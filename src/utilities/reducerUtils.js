// Utilities for Root Reducer
import HashIds from 'hashids';

export const singleColumnRearrange = (action, state) => {
  const { podId, source, destination } = action.payload;
  const sourceCol = state.columns[source.droppableId];
  //create new podcast list
  const newList = Array.from(sourceCol.podcastIds);
  //adjust podcast list
  newList.splice(source.index, 1);
  newList.splice(destination.index, 0, podId);
  //create new column state
  let newColumn = { ...sourceCol, podcastIds: newList };

  return {
    ...state,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn
    }
  };
};

export const multipleColumnRearrange = (action, state) => {
  const { podId, source, destination } = action.payload;
  const sourceCol = state.columns[source.droppableId];
  const destCol = state.columns[destination.droppableId];
  //create new podcast list
  const newStartList = Array.from(sourceCol.podcastIds);
  const newDestList = Array.from(destCol.podcastIds);
  //adjust podcast lists
  newStartList.splice(source.index, 1);
  newDestList.splice(destination.index, 0, podId);
  //create new column state
  let newSourceCol = { ...sourceCol, podcastIds: newStartList };
  let newDestinationCol = { ...destCol, podcastIds: newDestList }

  return {
    ...state,
    columns: {
      ...state.columns,
      [newSourceCol.id]: newSourceCol,
      [newDestinationCol.id]: newDestinationCol
    }
  };
};

export const upUpdatedIdList = (ids, state) => {
  const inQueueMemory = state.columns.savedQueue.podcastIds;
  const newAvailableIds = new Set();
  for (let id of ids) {
    if (!inQueueMemory.has(id)) newAvailableIds.add(id);
  };
  return newAvailableIds;
};

export const makeAvailableList = (podcasts) => {
  const newList = {};
  for (let podcast of podcasts.podcasts) {
    const podcastId = makePodcastId(podcast.audio);
    newList[podcastId] = { ...podcast, id: podcastId }
  };
  return newList;
};


//Function to create unique ids based on the location of the podcast.
//This allows me to check if there're any duplicates or if the podcast is already in my saved queue.
export const makePodcastId = (location) => {
  const hashIds = new HashIds("http://bitly.com/98K8eH"); //This is the salt for creating ids
  const hex = Buffer.from(location, 'utf8').toString('hex');
  return hashIds.encodeHex(hex);
};