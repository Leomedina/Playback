import React from 'react';

function PodcastMeta({ podcast }) {
  return (
    <div className="flex">
      <h1 className="px-6 hidden md:block w-24 center m-auto">LOGO</h1>
      <div className="px-3 text-left">
        <h1 className="font-semibold text-lg ">{podcast.title}</h1>
        <h1 className="text-gray-500 text-sm">{podcast.name}</h1>
        <p className="text-sm">
          {podcast.description}
        </p>
      </div>
    </div>
  );
};

export default PodcastMeta;