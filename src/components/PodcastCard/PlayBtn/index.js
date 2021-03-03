import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrPlaying } from 'reducers/actions';
import playBtn from 'assets/images/play.png';
import pauseBtn from 'assets/images/pause.png';

function PlayBtn({ id }) {
  const { currentlyPlaying, podcastAudios } = useSelector(store => store.player);
  const dispatch = useDispatch();

  const toggleAudio = () => {
    if (currentlyPlaying === id) {
      podcastAudios[id].pause();
      dispatch(setCurrPlaying(null));
    } else {
      if (currentlyPlaying) podcastAudios[currentlyPlaying].pause();
      podcastAudios[id].play();
      dispatch(setCurrPlaying(id))
    }
  };

  return (
    <div className="px-10 content-end my-auto">
      <button onClick={toggleAudio} className="focus:outline-none">
        {currentlyPlaying === id ?
          <img
            className="w-8 h-8 object-center object-cover m-auto"
            src={pauseBtn} alt="" width="384" height="512" /> :
          <img
            className="w-8 h-8 object-center object-cover m-auto"
            src={playBtn} alt="" width="384" height="512" />}
      </button>
    </div>
  );
};

export default PlayBtn;
