// Utilities for Root Reducer

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