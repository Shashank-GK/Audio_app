import React, { useEffect, useRef } from "react";

function NowPlaying({ audioFiles, currentTrackIndex, onPlayNext }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && audioFiles[currentTrackIndex]) {
      const objectURL = URL.createObjectURL(audioFiles[currentTrackIndex]);
      audioRef.current.src = objectURL;
      audioRef.current.play();

      // Cleanup function to revoke the object URL
      return () => {
        URL.revokeObjectURL(objectURL);
      };
    }
  }, [audioFiles, currentTrackIndex]);

  const handleEnded = () => {
    onPlayNext();
  };

  return (
    <div>
      <h2>Now Playing</h2>
      <audio controls ref={audioRef} onEnded={handleEnded} />
    </div>
  );
}

export default NowPlaying;
