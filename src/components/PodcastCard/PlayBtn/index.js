import React from 'react';
import AudioElement from 'components/PodcastCard/PlayBtn/AudioElement';
import playBtn from 'assets/images/play.png';
import pauseBtn from 'assets/images/pause.png';

function PlayBtn({ toggleAudio, isPlaying, id, audioElement }) {
  const buttonId = `btn-${id}`;
  console.log(audioElement);
  return (
    <div className="px-10 content-end my-auto">
      <button onClick={toggleAudio} className="focus:outline-none" id={buttonId}>
        {isPlaying ?
          <img
            className="w-8 h-8 object-center object-cover m-auto"
            src={pauseBtn} alt="" width="384" height="512" /> :
          <img
            className="w-8 h-8 object-center object-cover m-auto"
            src={playBtn} alt="" width="384" height="512" />}
        <AudioElement audioEl={audioElement} buttonId={buttonId} />
      </button>
    </div>
  );
};

export default PlayBtn;
