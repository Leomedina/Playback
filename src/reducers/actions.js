import { DEFAULT, REARRANGE_PODS } from 'actionTypes';

export const rearrangePods = function (podId, column, destinationIdx, sourceIdx,) {
  return {
    type: REARRANGE_PODS,
    payload: {
      podId,
      column,
      destinationIdx,
      sourceIdx
    }
  };
};

export const defaultBehavior = function (description) {
  return {
    type: DEFAULT,
    payload: { description }
  };
};