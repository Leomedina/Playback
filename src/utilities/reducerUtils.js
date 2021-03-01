// Utilities for Root Reducer

export const singleColumnRearrange = (action, state) => {
  const { podId, source, destination } = action.payload;
  const sourceCol = state.columns[source.droppableId];
  const newList = Array.from(sourceCol.podcastIds);
  let newColumn;

  newList.splice(source.index, 1);
  newList.splice(destination.index, 0, podId);

  newColumn = { ...sourceCol, podcastIds: newList };

  return {
    ...state,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn
    }
  };
};