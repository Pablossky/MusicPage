// MusicSharingPage.js
import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';
import InfoDropdown from './components/InfoDropdown';

import './styles.css';


const MusicSharingPage = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };


  const songsFlowers = [
    {
      title: 'Jasmine',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Jasmine.mp3',
      cover: '/images/yozo.png',
      hoverInfo: 'Siema Alana Asiema alana',
    },
    {
      title: 'Bluebell',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Bluebell.mp3',
      cover: '/images/yozo.png',
    },
    {
      title: 'Peonies',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Peonies.mp3',
      cover: '/images/yozo.png',
    },
    {
      title: 'Dendrobium',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/26.mp3',
      cover: '/images/yozo.png',
      hoverInfo: 'Weird one...',
    },
    {
      title: 'Queen of the Night',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Queen_of_the_Night.mp3',
      cover: '/images/yozo.png',
    },
  ];

  const songsWorld = [
    {
      title: 'Golden Sirocco',
      artist: 'Paweł Mendzik',
      src: '/songs/songsWorld/GoldenSirocco.mp3',
      cover: '/images/world.png',
    },
    {
      title: 'Whispers of Sands',
      artist: 'Paweł Mendzik',
      src: '/songs/songsWorld/WhispersOfSands.mp3',
      cover: '/images/world.png',
      hoverInfo: 'Didgeridoo slaps',
    },
  ];

  const songsHumanFall = [
    {
      title: 'Ode to Insomnia',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/Insomnia.mp3',
      cover: '/images/fall.png',
    },
    {
      title: 'Misery',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/misery.mp3',
      cover: '/images/fall.png',
    },
    {
      title: 'Freefall',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/Freefall.mp3',
      cover: '/images/fall.png',
    },
    {
      title: 'Rubberhose',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/rubberhose.mp3',
      cover: '/images/rubberhose.png',
      hoverInfo: 'Inspired by Cuphead soundtrack',
    },
    {
      title: 'Better of Us',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/BetterOfUs.mp3',
      cover: '/images/lofi.png',
    },
    {
      title: 'Scattered Ice',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/ScatteredIce.mp3',
      cover: '/images/lofi.png',
      hoverInfo: 'The oldest track I made, that I still like',
    },
    {
      title: 'Stars Alignment',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/StarsAlignment.mp3',
      cover: '/images/lofi.png',
    },
    {
      title: 'Tides of Joy',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/TidesOfJoy.mp3',
      cover: '/images/lofi.png',
    },
    {
      title: 'Seas',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/Seas.mp3',
      cover: '/images/lofi.png',
    },
  ];

  const songsIchi = [
    {
      title: 'Ichi',
      artist: 'Paweł Mendzik',
      src: '/songs/songsIchi/Ichi.mp3',
      cover: '/images/electro.png',
      hoverInfo: 'Ive lost the project file for this track, so I cant export tracks from it anymore',
    },
    {
      title: 'Repancy',
      artist: 'Paweł Mendzik',
      src: '/songs/songsIchi/EP2_Repancy.mp3',
      cover: '/images/electro.png',
      
    }
  ]

  const songsMaestro = [
    {
      title: 'Digital Dance Maestro',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/DigitalDanceMaestro.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Darker Disco Despair',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/DarkerDiscoDespair.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Stepping Sway Syndrome',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SteppingSwaySyndrome.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Synthetic Swing Sequence',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SyntheticSwingSequence.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Synthetic Sorrow Sounds',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SyntheticSorrowSounds.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Funky Futuristic Frenzy',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/FunkyFuturisticFrenzy.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Neon Nightmare Nights',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/NeonNightmareNights.mp3',
      cover: '/images/maestro.png',
    },
  ];

  const songsOrchestral = [
    {
      title: 'Journey',
      artist: 'Paweł Mendzik',
      src: '/songs/songsOrchestral/Journey.mp3',
      cover: '/images/orchestral.png',
    },
    {
      title: 'Magical Forest',
      artist: 'Paweł Mendzik',
      src: '/songs/songsOrchestral/MagicalForest.mp3',
      cover: '/images/orchestral.png',
    },
  ];

  const songsSingles = [
    {
      title: 'Golden',
      artist: 'Paweł Mendzik',
      src: '/songs/songsSingles/Golden.mp3',
      cover: '/images/bigbrain.jpg',
      hoverInfo: 'Inspired by Modern Talking music. There were plans for making a clip for this track in GTA V.',
    },
    {
      title: 'Orient',
      artist: 'Paweł Mendzik',
      src: '/songs/songsSingles/Orient.mp3',
      cover: '/images/bigbrain.jpg',
      hoverInfo: 'Voice was generated by a translator',
    },
    {
      title: 'Lavender',
      artist: 'Paweł Mendzik',
      src: '/songs/songsSingles/Lavender.mp3',
      cover: '/images/bigbrain.jpg',
    },
    {
      title: 'Addiction',
      artist: 'Paweł Mendzik',
      src: '/songs/songsSingles/Addiction.mp3',
      cover: '/images/bigbrain.jpg',
    },
  ]

  //-----------------------------------------

  const infoDropdownItems = [
    { title: 'Contact:', content: ['E-mail: pxblxsskx@gmail.com', 'Discord: pablossky'] },
    { title: 'About:', content: 'Basement goblin making music' },
  ];

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-dark text-white">
        <div className="text-center">
          <h1 className="display-4" style={{ fontFamily: 'Press Start 2P' }}>Pablossky's showcase</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <MusicPlayer
            id="audio-player"
            src={currentSong ? currentSong.src : null}
            title={currentSong ? currentSong.title : ''}
            cover={currentSong ? currentSong.cover : null}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="display-4">Albums:</h3>
          <div className="playlist-dropdown">
            <SongList title="Flowers Lo-Fi" songs={songsFlowers} onPlay={(song) => handlePlay(song, songsFlowers)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="World Sounds" songs={songsWorld} onPlay={(song) => handlePlay(song, songsWorld)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Human Fall" songs={songsHumanFall} onPlay={(song) => handlePlay(song, songsHumanFall)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Ichi" songs={songsIchi} onPlay={(song) => handlePlay(song, songsIchi)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Maestro" songs={songsMaestro} onPlay={(song) => handlePlay(song, songsMaestro)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Orchestral" songs={songsOrchestral} onPlay={(song) => handlePlay(song, songsOrchestral)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Singles" songs={songsSingles} onPlay={(song) => handlePlay(song, songsSingles)} />
          </div>

          <h3 className="display-4">Info:</h3>
          <InfoDropdown title="About" items={infoDropdownItems} />
        </div>
      </div>
    </div>
  );
};

export default MusicSharingPage;