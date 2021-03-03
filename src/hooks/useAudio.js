import React, { useState, useEffect } from 'react';

function useAudio(url) {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setPlaying] = useState(false);

  const toggleAudio = () => setPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? setPlay(audio) : audio.pause();
  },
    [isPlaying]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [isPlaying, toggleAudio, audio];
};


function setPlay(audio) {
  const sounds = document.getElementsByTagName('audio');
  for(let audio of sounds) audio.pause()
  return audio.play();
}

export default useAudio;