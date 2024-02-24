import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Playlist from "./components/Playlist";
import NowPlaying from "./components/NowPlaying";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #181818; /* Spotify background color */
  color: #fff;
`;

const Header = styled.header`
  background-color: #282828; /* Spotify header background color */
  padding: 20px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #fff;
`;

const FileInput = styled.label`
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #1db954; /* Spotify green */
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #168f3d; /* Darker green */
  }

  input[type="file"] {
    display: none;
  }
`;

const App = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const storedAudioFiles =
      JSON.parse(localStorage.getItem("audioFiles")) || [];
    setAudioFiles(storedAudioFiles);
  }, []);

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
    <Container>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2cm",
          }}
        >
          <Title style={{ color: "#fff", fontSize: "2rem" }}>
            Audio Player
          </Title>
        </div>
      </Header>
      <br />
      <FileInput>
        Upload Audio File
        <input type="file" accept="audio/mp3" onChange={handleFileUpload} />
      </FileInput>
      <Playlist
        audioFiles={audioFiles}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
      <NowPlaying
        audioFiles={audioFiles}
        currentTrackIndex={currentTrackIndex}
        onPlayNext={handlePlayNext}
      />
    </Container>
  );
};

export default App;
