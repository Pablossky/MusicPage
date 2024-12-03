import React, { useEffect, useRef } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import './MusicPlayer.css';

const MusicPlayer = ({ src, title, autoplay, cover }) => {
  const audioPlayer = useRef(null);

  useEffect(() => {
    const audioNode = audioPlayer.current?.audio.current; // Przechowaj ref w zmiennej lokalnej

    if (autoplay && audioNode) {
      audioNode.addEventListener('ended', handleSongEnd);
    }

    return () => {
      if (audioNode) {
        audioNode.removeEventListener('ended', handleSongEnd);
      }
    };
  }, [autoplay]);

  const handleSongEnd = () => {
    console.log('Song has ended');
    // Twoja logika po zakończeniu utworu
  };

  return (
    <div className="music-player-container">
      <div className="audio-controls">
        <div className="player-info">
          <h4>{title}</h4>
          {cover && <img src={cover} alt={`${title} Cover`} className="album-cover" />}
        </div>
        <AudioPlayer
          ref={audioPlayer}
          src={src}
          autoPlayAfterSrcChange={autoplay}
          customIcons={{
            play: <FontAwesomeIcon icon={faPlay} />,
            pause: <FontAwesomeIcon icon={faPause} />,
            volume: <FontAwesomeIcon icon={faVolumeUp} />,
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
