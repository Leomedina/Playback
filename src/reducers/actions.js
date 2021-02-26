import { DEFAULT } from './actionTypes';

export const defaultBehavior = function (description) {
  return {
    type: DEFAULT,
    payload: { description }
  };
};