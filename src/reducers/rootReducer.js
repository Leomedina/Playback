import { REARRANGE_PODS } from 'reducers/actionTypes';
import INITIAL_STATE from 'reducers/initialData';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REARRANGE_PODS:
      const sourceCol = state.columns[action.payload.source.droppableId];
      const destinationCol = state.columns[action.payload.destination.droppableId];
      if(sourceCol === destinationCol) {
        console.log(sourceCol)
      }
      return {
        ...state,
      }
    default:
      return state;
  };
};

export default rootReducer;