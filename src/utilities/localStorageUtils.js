import store from 'reducers/store';

export const updateLocalStorage = () => {
  const { columns } = store.getState();
  localStorage.clear();
  localStorage.setItem("savedQueue", JSON.stringify(columns.savedQueue.podcastIds));
  return 1;
};