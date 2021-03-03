
function globalAudio(podcasts) {
  const podcastAudios = {}
  for (const key in podcasts) podcastAudios[key] = podcasts[key].audio;

  let currentlyPlaying = null;

  const play = (id) => {
    if (currentlyPlaying) {
      podcastAudios[currentlyPlaying].pause();
    }
    podcastAudios[id].play();
    currentlyPlaying = id;
  };

  const pause = (id) => {
    currentlyPlaying = null;
    audios[id].pause();
  };

  return [play, pause];
};

export default globalAudio;