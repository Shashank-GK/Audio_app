import React, { useState, useEffect } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import NowPlaying from "./components/NowPlaying";

function App() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Load audio files from local storage on initial render
  useEffect(() => {
    const storedAudioFiles =
      JSON.parse(localStorage.getItem("audioFiles")) || [];
    setAudioFiles(storedAudioFiles);
  }, []);

  // Save audio files to local storage when audioFiles state changes
  useEffect(() => {
    localStorage.setItem("audioFiles", JSON.stringify(audioFiles));
  }, [audioFiles]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setAudioFiles((prevFiles) => [...prevFiles, file]);
  };

  const handlePlayNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioFiles.length);
  };

  return (
    <div>
      <input type="file" accept="audio/mp3" onChange={handleFileUpload} />
      <Playlist
        audioFiles={audioFiles}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
      <NowPlaying
        audioFiles={audioFiles}
        currentTrackIndex={currentTrackIndex}
        onPlayNext={handlePlayNext}
      />
    </div>
  );
}

export default App;
