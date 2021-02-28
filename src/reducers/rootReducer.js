import { REARRANGE_PODS } from 'reducers/actionTypes';
import INITIAL_STATE from 'reducers/initialData';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REARRANGE_PODS:
      return {
        ...state,
      }
    default:
      return state;
  };
};

export default rootReducer;