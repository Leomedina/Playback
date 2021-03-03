export const getPodcastAudios = (podcasts) => {
  const podcastAudios = {};
  for (const id in podcasts) podcastAudios[id] = new Audio(podcasts[id].audio);
  return podcastAudios;
}