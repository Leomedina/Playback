import React from 'react';
import { LOAD_PODCASTS } from 'reducers/actionTypes';

function PodcastMeta({ podcast }) {
  const imageLink = podcast.image || "https://i.imgur.com/L2jJdj9.png";

  return (
    <div className="flex px-6 justify-start">
      <img
        class="w-20 h-20 mr-6 rounded-full object-center object-cover m-auto"
        src={imageLink} alt="" width="384" height="512" />
      <div className="text-left">
        <h1 className="font-semibold">{podcast.title}</h1>
        <h1 className="text-gray-500 text-xs">{podcast.name}</h1>
        <p className="text-xs pt-2 line-clamp-1">
          {podcast.description}
        </p>
      </div>
    </div>
  );
};

export default PodcastMeta;