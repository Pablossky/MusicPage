import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Card, Button, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './SongList.css';

const SongList = ({ title, songs, onPlay }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [animateOrange, setAnimateOrange] = useState(false);
  const [animateViolet, setAnimateViolet] = useState(false);
  const isMounted = useRef(true);

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handlePlay = (song, index) => {
    onPlay(song);
    setPlayingIndex(index);
    setAnimateOrange(true);
    setAnimateViolet(true);
  };

  useEffect(() => {
    if (playingIndex !== null) {
      const orangeTimeout = setTimeout(() => setAnimateOrange(false), 2000);
      const violetTimeout = setTimeout(() => setAnimateViolet(false), 2000);

      return () => {
        clearTimeout(orangeTimeout);
        clearTimeout(violetTimeout);
      };
    }
  }, [playingIndex]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const renderHoverPopup = (hoverText) => (
    <Tooltip id={`tooltip-${title}`} className="hover-popup">
      {hoverText}
    </Tooltip>
  );

  return (
    <Card className="mb-3" border="light" style={{ borderWidth: '2px', borderColor: 'white' }}>
      <Card.Header className="bg-dark text-white" onClick={handleToggleCollapse} style={{ cursor: 'pointer' }}>
        {title} <span style={{ color: 'white' }}>{isCollapsed ? '-' : '+'}</span>
      </Card.Header>
      <Collapse in={isCollapsed}>
        <Card.Body className="bg-dark">
          <ListGroup variant="flush">
            {songs.map((song, index) => (
              song.hoverInfo ? (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  overlay={renderHoverPopup(song.hoverInfo)}
                >
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center bg-dark text-white"
                  >
                    <span>{song.title}</span>
                    <Button
                      variant="warning"
                      onClick={() => handlePlay(song, index)}
                      className={`play-button ${playingIndex === index ? 'playing' : ''
                        } ${animateOrange && playingIndex === index ? 'pixelate-orange' : ''} ${animateViolet && playingIndex === index ? 'pixelate-violet' : ''
                        }`}
                    >
                      Play
                    </Button>
                  </ListGroup.Item>
                </OverlayTrigger>
              ) : (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center bg-dark text-white"
                >
                  <span>{song.title}</span>
                  <Button
                    variant="warning"
                    onClick={() => handlePlay(song, index)}
                    className={`play-button ${playingIndex === index ? 'playing' : ''
                      } ${animateOrange && playingIndex === index ? 'pixelate-orange' : ''} ${animateViolet && playingIndex === index ? 'pixelate-violet' : ''
                      }`}
                  >
                    Play
                  </Button>
                </ListGroup.Item>
              )
            ))}

          </ListGroup>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default SongList;
