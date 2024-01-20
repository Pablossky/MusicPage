import React, { useState } from 'react';

const SongList = ({ title, songs, onPlay }) => {
    const [isCollapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <div>
            <h2 className="album-name" onClick={handleToggleCollapse}>
                {title} <span style={{ color: 'white' }}>{isCollapsed ? '-' : '+'}</span>
            </h2>
            {isCollapsed && (
                <ul className="list-group">
                    {songs.map((song, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
                        >
                            <span>{song.title} - {song.artist}</span>
                            <button
                                className="btn btn-warning"
                                onClick={() => onPlay(song)}
                            >
                                Play
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SongList;
