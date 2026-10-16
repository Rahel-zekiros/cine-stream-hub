# CineStream — Netflix Clone

A Netflix-inspired movie discovery and streaming interface built with React. CineStream recreates the experience of browsing movies and TV shows through a cinematic banner, interactive movie cards, trailer previews, and horizontally scrolling content rows.

## About the Project

CineStream is a frontend web application developed as part of my Evangadi Full-Stack Application Development program.

The project focuses on recreating key Netflix-style browsing interactions, including discovering movies, searching for titles, previewing trailers, and navigating movie categories through a responsive interface.

## Features

### 1. Cinematic Banner

- Displays a featured movie with its background image and movie information.
- Includes a Play button for opening the selected movie's trailer.
- Plays the trailer inside the application in a full-screen video overlay instead of navigating away to YouTube.
- Includes a close button to exit the trailer and return to the banner.

### 2. Interactive Movie Cards

- Displays movie posters in horizontally scrollable rows.
- Shows an interactive preview when the user hovers over a movie card.
- Supports trailer previews on hover when a trailer is available.
- Provides interactive movie-card controls and movie information.

### 3. Movie Categories

Browse movies and shows organized into categories such as:

- Trending
- Featured Movies
- Top Rated
- Action
- Comedy
- Horror
- Romance
- Documentaries

### 4. Movie Search

- Search for movies and TV shows by title.
- Displays matching search results in the application.
- Uses movie data from the TMDB API to find titles beyond the initially loaded movie lists.

### 5. Responsive User Interface

- Netflix-inspired dark theme.
- Responsive layouts for desktop and mobile screens.
- Horizontally scrolling movie rows powered by Swiper.
- Interactive hover effects and navigation controls.

## Technologies Used

- React
- JavaScript
- Vite
- CSS Modules
- Axios
- Swiper.js
- React Icons
- The Movie Database (TMDB) API
- YouTube embedded player for available trailers

## Getting Started

### Prerequisites

- Node.js
- npm
- A TMDB API key

### Installation

**1. Clone the repository**

```bash
git clone YOUR_PUBLIC_GITHUB_REPOSITORY_URL
```

**2. Open the project folder**

```bash
cd YOUR_PROJECT_FOLDER
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure the TMDB API key**

Configure your TMDB API key using the environment variables or API configuration file required by your project.

Do not commit private credentials to your public repository.

**5. Start the development server**

```bash
npm run dev
```

**6. Create a production build**

```bash
npm run build
```

## How to Use CineStream

1. Open the application to explore the featured movie banner.
2. Click the Play button to open the available trailer within the application.
3. Close the video overlay to return to the main browsing screen.
4. Browse the movie categories by scrolling horizontally.
5. Hover over a movie card to see its preview when available.
6. Use the search bar to find movies and TV shows by title.

## Project Links

**Live Demo:** YOUR_LIVE_DEPLOYMENT_URL

**GitHub Repository:** YOUR_PUBLIC_GITHUB_REPOSITORY_URL

## What I Learned

While developing CineStream, I practiced:

- Building reusable React components.
- Managing UI state with React hooks.
- Fetching movie data using Axios and an external REST API.
- Implementing search and filtering functionality.
- Creating responsive layouts using CSS Modules.
- Building horizontal movie carousels with Swiper.
- Managing trailer playback and video overlays.
- Implementing hover interactions and conditional rendering.

## Credits and Disclaimer

Movie metadata, posters, and related information are provided through The Movie Database (TMDB) API.

This project is an independent educational Netflix clone created for learning and portfolio purposes. It is not affiliated with, sponsored by, or endorsed by Netflix or TMDB.
