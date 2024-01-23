import React from 'react';
import { Collapse, Card, Button } from 'react-bootstrap';

const InfoDropdown = ({ title, items }) => {
  const [isCollapsed, setCollapsed] = React.useState(false);

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
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                {Array.isArray(item.content) ? <ul>{item.content.map((line, i) => <li key={i}>{line}</li>)}</ul> : <p>{item.content}</p>}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default InfoDropdown;
