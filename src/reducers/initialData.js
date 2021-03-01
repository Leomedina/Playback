const INITIAL_STATE = {
  podcasts: {
    'one': { id: "pod-0", name: "one" },
    'two': { id: "pod-1", name: "two" },
    'three': { id: "pod-2", name: "three" },
  },
  columns: {
    'available': {
      id: 'available',
      name: 'Available',
      podcastIds: new Set()
    },
    'savedQueue': {
      id: 'savedQueue',
      name: 'Queue',
      podcastIds: new Set()
    }
  },
};

export default INITIAL_STATE;