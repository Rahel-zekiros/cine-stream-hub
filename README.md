#  CineStream — Netflix Clone

A Netflix-inspired movie discovery application built with React. CineStream provides a cinematic browsing experience with a featured movie banner, interactive movie cards, trailer previews, movie search, and horizontally scrolling movie categories.

## 🌐 Live Demo

**Live Application:** https://cine-stream-hub.vercel.app

**GitHub Repository:** https://github.com/Rahel-zekiros/cine-stream-hub

##  About the Project

CineStream is a frontend web application developed as part of my Evangadi Full-Stack Application Development program.

The project recreates key movie-browsing experiences inspired by Netflix, allowing users to explore movies and TV shows, search for specific titles, browse different genres, and preview available trailers through interactive video overlays.

The main goal of this project is to build an engaging and responsive user interface while practicing React component development, API integration, state management, and interactive frontend design.

##  Features

### 1.  Cinematic Featured Banner

- Displays a featured movie with its background image and movie information.
- Includes a Play icon on the banner.
- Opens the selected movie's available trailer in a large video overlay within the application.
- Allows users to close the video overlay and return to the main browsing screen.
- Creates an immersive movie-discovery experience.

### 2.  Interactive Movie Cards

- Displays movie posters in horizontally scrollable rows.
- Includes interactive hover effects.
- Displays a video preview when users hover over a movie poster, when a preview is available and configured.
- Provides movie information and interactive controls.
- Makes browsing movies more engaging and dynamic.

### 3.  Movie Search

- Allows users to search for movies and TV shows by title.
- Displays matching search results.
- Uses movie data from the TMDB API to help users discover titles, depending on the configured search implementation.

### 4.  Movie Categories

Users can explore movies organized into categories such as:

- Trending
- Featured Movies
- Top Rated
- Action
- Comedy
- Horror
- Romance
- Documentaries

Available categories depend on the data and API endpoints configured in the application.

### 5.  Responsive User Interface

- Netflix-inspired dark theme.
- Responsive layout for different screen sizes.
- Horizontally scrolling movie rows.
- Interactive buttons and hover effects.
- Reusable React components.

##  Technologies Used

- **React** — Building reusable user interface components.
- **JavaScript** — Application logic and interactivity.
- **Vite** — Development server and production build tool.
- **CSS Modules** — Component-specific styling.
- **Axios** — Making API requests.
- **Swiper.js** — Creating horizontally scrolling movie carousels.
- **React Icons** — Displaying interface icons.
- **TMDB API** — Retrieving movie information and images.
- **YouTube Embedded Player** — Displaying available movie trailers when configured.

##  Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- A TMDB API key, if required by your project configuration.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Rahel-zekiros/cine-stream-hub.git
```

**2. Navigate to the project directory**

```bash
cd cine-stream-hub
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure the TMDB API**

Configure your TMDB API key according to the environment variables or API configuration used in your project.

If your application uses a `.env` file, use the variable name expected by your code. Do not commit private credentials to your public GitHub repository.

**5. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal. With the default Vite configuration, this is usually:

`http://localhost:5173`

**6. Build for production**

```bash
npm run build
```

##  How to Use CineStream

1. Open the application and explore the featured movie banner.
2. Click the Play icon on the banner to open the available trailer.
3. Close the video overlay to return to the main browsing screen.
4. Browse movie categories by scrolling horizontally.
5. Hover over a movie poster to see its video preview when available.
6. Use the search feature to find movies and TV shows by title.
7. Explore the movie information displayed in the application.

##  Project Structure

The following structure reflects the general organization of the project. The component names represented by `...` should be replaced with actual folder names if you want to document every component.

```text
cine-stream-hub/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   ├── MovieCard/
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

All application components are organized under `src/components/`. The `App.jsx` file serves as the main application component, while `main.jsx` provides the React entry point.

##  What I Learned

Through developing CineStream, I practiced:

- Building reusable React components.
- Managing UI state and interactions with React Hooks.
- Fetching external API data using Axios.
- Implementing movie search functionality.
- Creating responsive layouts using CSS Modules.
- Building horizontal movie carousels with Swiper.
- Implementing hover-based video previews.
- Managing trailer playback with video overlays.
- Using conditional rendering for interactive features.
- Deploying a frontend application with Vercel.

##  Future Improvements

- Add dedicated movie detail views.
- Improve search suggestions and filtering.
- Add a favorites list and personal watchlist.
- Improve loading states and API error handling.
- Improve keyboard accessibility for video controls.
- Further optimize the mobile browsing experience.

##  Author

**Rahel Zekiros**

- **GitHub Profile:** https://github.com/Rahel-zekiros
- **Project Repository:** https://github.com/Rahel-zekiros/cine-stream-hub
- **Live Demo:** https://cine-stream-hub.vercel.app

##  Disclaimer

CineStream is an educational project inspired by Netflix's browsing experience. It is not affiliated with or endorsed by Netflix. Movie data and images are provided through the configured movie data services, and trailer availability depends on the sources integrated into the application.

This project is intended for educational and portfolio demonstration purposes.
