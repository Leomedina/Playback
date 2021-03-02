import React from 'react';


function PodcastMeta({ podcast }) {
  const imageLink = podcast.image || "https://i.imgur.com/L2jJdj9.png";
  const title = podcast.title.length > 35 ? podcast.title.slice(0, 30) + "..." : podcast.title;
  const description = podcast.description.slice(0, 50) + " ...";

  return (
    <div className={`flex px-6 justify-start`}>
      <img
        className="w-20 h-20 mr-6 hidden md:block rounded-full object-center object-cover m-auto"
        src={imageLink} alt="" width="384" height="512" />
      <div className="text-left">
        <h1 className="font-semibold text-s md:text-base">{title}</h1>
        <h1 className="text-gray-500 text-xs">{podcast.name}</h1>
        <p className="text-gray-500 text-xs pt-2 hidden md:block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PodcastMeta;