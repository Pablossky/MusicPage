import React, { useState } from 'react';
import { Collapse, Card, Button, ListGroup } from 'react-bootstrap';

const SongList = ({ title, songs, onPlay }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Card className="mb-3" border="light" style={{ borderWidth: '2px', borderColor: 'white' }}>
      <Card.Header className="bg-dark text-white" onClick={handleToggleCollapse} style={{ cursor: 'pointer' }}>
        {title} <span style={{ color: 'white' }}>{isCollapsed ? '-' : '+'}</span>
      </Card.Header>
      <Collapse in={isCollapsed}>
        <Card.Body className="bg-dark">
          <ListGroup variant="flush">
            {songs.map((song, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center bg-dark text-white">
                <span>{song.title}</span>
                <Button variant="warning" onClick={() => onPlay(song)}>
                  Play
                </Button>
              </ListGroup.Item> 
            ))}
          </ListGroup>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default SongList;
