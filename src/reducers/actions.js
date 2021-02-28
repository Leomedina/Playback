import { DEFAULT, REARRANGE_PODS } from 'reducers/actionTypes';

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

export const defaultBehavior = function (description) {
  return {
    type: DEFAULT,
    payload: { description }
  };
};