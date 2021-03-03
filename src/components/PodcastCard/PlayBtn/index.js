import React, { useState } from 'react';

function PlayBtn() {
  const { isPlaying, setIsPlaying } = useState(false);
  const icon = isPlaying ? "is playing" : "not playing";

  return (
    <div className="px-6 content-end my-auto">
      {icon}
    </div>
  );
};

export default PlayBtn;
