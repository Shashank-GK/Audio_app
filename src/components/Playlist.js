// Playlist.js

import React from "react";

function Playlist({ audioFiles, setCurrentTrackIndex }) {
  const handleClick = (index) => {
    setCurrentTrackIndex(index);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((file, index) => (
          <li key={index}>
            <button onClick={() => handleClick(index)}>Play {file.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
