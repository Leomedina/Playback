import axios from 'axios';
import { DEFAULT, REARRANGE_PODS, LOAD_PODCASTS } from 'reducers/actionTypes';

export const rearrangePods = function (podId, source, destination) {
  return {
    type: REARRANGE_PODS,
    payload: {
      podId,
      source,
      destination
    }
  };
};

export const loadPodcasts = function (podcasts) {
  return {
    type: LOAD_PODCASTS,
    payload: { podcasts }
  };
};

export const defaultBehavior = function (description) {
  return {
    type: DEFAULT,
    payload: { description }
  };
};

//Thunks actions creators - allows for async API calls

export const getPodsFromAPI = function () {
  return async function (dispatch) {
    const response = await axios.get('https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json')
    dispatch(loadPodcasts(response.data.podcasts));
  };
};