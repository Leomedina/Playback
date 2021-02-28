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
      podcastIds: ["pod-0", "pod-1"]
    },
    'savedQueue': {
      id: 'savedQueue',
      name: 'Queue',
      podcastIds: ["pod-2"]
    }
  },
};

export default INITIAL_STATE;