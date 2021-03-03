import { REARRANGE_PODS, LOAD_PODCASTS, SET_CURR_PLAYING } from 'reducers/actionTypes';
import INITIAL_STATE from 'reducers/initialData';
import { getPodcastAudios } from 'utilities/audioUtils';
import {
  singleColumnRearrange, upUpdatedIdList,
  multipleColumnRearrange, makeAvailableList
} from 'utilities/reducerUtils';

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURR_PLAYING:
      return {
        ...state,
        player: {
          ...state.player,
          currentlyPlaying: action.payload.id
        }
      };
    case LOAD_PODCASTS:
      const newPodcastList = makeAvailableList(action.payload, state);
      const newAvailableList = upUpdatedIdList(Object.keys(newPodcastList), state);
      const newQueueList = JSON.parse(localStorage.getItem("savedQueue")) || [];
      const newPodcastAudios = getPodcastAudios(newPodcastList);
      return {
        ...state,
        podcasts: { ...newPodcastList },
        columns: {
          ...state.columns,
          available: {
            ...state.columns.available,
            podcastIds: newAvailableList
          },
          savedQueue: {
            ...state.columns.savedQueue,
            podcastIds: newQueueList
          }
        },
        player: {
          ...state.player,
          podcastAudios: newPodcastAudios
        }
      };
    case REARRANGE_PODS:
      const { source, destination } = action.payload;
      if (source.droppableId === destination.droppableId)
        return singleColumnRearrange(action, state);
      else
        return multipleColumnRearrange(action, state);
    default:
      return state;
  };
};

export default rootReducer;