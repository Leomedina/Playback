import { REARRANGE_PODS } from 'reducers/actionTypes';
import INITIAL_STATE from 'reducers/initialData';
import { singleColumnRearrange } from 'utilities/reducerUtils';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REARRANGE_PODS:
      const { source, destination } = action.payload;
      if (source.droppableId === destination.droppableId)
        return singleColumnRearrange(action, state);
      return state;
    default:
      return state;
  };
};

export default rootReducer;