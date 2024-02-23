# Audio Player

This project is a simple audio player web application built using React. It allows users to upload audio files (e.g., mp3) and play them in a playlist format. The application stores the uploaded audio files using the browser's built-in APIs and persists the playlist using local storage, ensuring that the playlist remains intact even after the page is reloaded.

## Features

- **File Upload**: Users can upload audio files using the provided file input.
- **Playlist and Now Playing View**: The application displays a playlist and a now playing section, allowing users to see the list of uploaded audio files and the currently playing track.
- **Playback Functionality**: Users can play any file from the playlist, and playback continues to the next file in the playlist upon completion.
- **Local Storage**: The application saves the audio files to local storage, ensuring that the playlist persists even after the page is reloaded.
- **Standard HTML Audio Player**: The standard HTML `<audio>` element is used for audio playback, as per the project requirements.
- **Styling**: The application includes CSS styles to improve its appearance, featuring a design reminiscent of music player apps like Spotify.

## Technologies Used

- React: JavaScript library for building user interfaces.
- HTML5: Standard markup language for creating web pages.
- CSS: Cascading Style Sheets for styling the user interface.
- Local Storage API: Used to store audio files locally in the browser.
- GitHub: Version control and collaboration platform for hosting the project.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
