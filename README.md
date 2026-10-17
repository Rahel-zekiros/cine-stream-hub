#  CineStream — Netflix Clone

A Netflix-inspired movie discovery application built with React. CineStream provides a cinematic browsing experience with featured movie banners, interactive movie posters, trailer previews, movie search, and horizontally scrolling movie categories.

## 🌐 Live Demo

**Live Application:** https://cine-stream-hub.vercel.app

**GitHub Repository:** https://github.com/Rahel-zekiros/cine-stream-hub

##  About the Project

CineStream is a frontend web application developed as part of my Evangadi Full-Stack Application Development program.

The project recreates key movie-browsing experiences inspired by Netflix, including discovering movies and TV shows, searching for titles, exploring different genres, and previewing available trailers through interactive video overlays.

The main goal was to build an engaging, responsive, and reusable React application while practicing API integration, component-based architecture, state management, and interactive user interface design.

##  Features

### 1.  Cinematic Featured Banner

- Displays a featured movie with a cinematic background image and movie information.
- Includes a Play icon to open the selected movie's available trailer.
- Opens the video in a large, full-screen-style overlay within the application.
- Allows users to close the video overlay and return to the main browsing screen.
- Creates an immersive movie-discovery experience.

### 2.  Interactive Movie Cards

- Displays movie posters in horizontally scrollable rows.
- Provides interactive hover effects when users move their mouse over a poster.
- Displays a video preview on hover when a trailer is available and configured.
- Presents movie information and interactive controls.
- Makes browsing movies more engaging and dynamic.

### 3.  Movie Search

- Allows users to search for movies and TV shows by title.
- Displays matching results in the application.
- Uses TMDB API data to search for titles beyond the initially displayed movie lists, when supported by the search implementation.
- Makes it easier to discover specific movies and shows.

### 4.  Movie Categories

Explore movies and shows organized into different categories, including:

- Trending
- Featured Movies
- Top Rated
- Action
- Comedy
- Horror
- Romance
- Documentaries

The available categories depend on the movie data and API endpoints configured in the application.

### 5.  Responsive User Interface

- Netflix-inspired dark cinematic theme.
- Responsive layouts for desktop and mobile screens.
- Horizontally scrolling movie carousels.
- Interactive buttons, hover effects, and navigation controls.
- Reusable React components for a maintainable interface.

##  Technologies Used

- **React** — Building reusable UI components.
- **JavaScript** — Application logic and interactions.
- **Vite** — Development server and production build tool.
- **CSS Modules** — Component-specific styling.
- **Axios** — Fetching movie data from APIs.
- **Swiper.js** — Horizontally scrolling movie carousels.
- **React Icons** — Play icons and other interface icons.
- **TMDB API** — Movie and TV show information, posters, and images.
- **YouTube Embedded Player** — Displaying available trailers within the application, where configured.

## Getting Started

### Prerequisites

Before running the project locally, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A TMDB API key, if required by the application's configuration.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Rahel-zekiros/cine-stream-hub.git
```

**2. Navigate to the project folder**

```bash
cd cine-stream-hub
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure the TMDB API**

Configure your TMDB API key according to the environment variables or API configuration used by the project.

If your application uses a `.env` file, follow the variable names expected by your existing code. Never commit private API credentials to a public repository.

**5. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

**6. Create a production build**

```bash
npm run build
```

##  How to Use CineStream

1. Open the application and explore the featured movie banner.
2. Click the Play icon on the banner to open the available trailer in the video overlay.
3. Close the overlay to return to the main page.
4. Browse movie categories by scrolling horizontally.
5. Hover over a movie poster to see its available preview.
6. Use the search feature to find movies or TV shows by title.
7. Select movies and explore the information available in the interface.

##  Project Structure

The following is an illustrative structure. Update it if your actual repository uses different file or folder names.

```text
##  Project Structure

```text
netflix-clone/
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


```

##  What I Learned

Developing CineStream helped me practice:

- Building reusable React components.
- Managing component state and user interactions with React Hooks.
- Fetching and displaying external API data using Axios.
- Implementing movie search and displaying matching results.
- Creating responsive layouts with CSS Modules.
- Building horizontal movie carousels using Swiper.
- Implementing hover-based video previews.
- Managing trailer playback through video overlays.
- Using conditional rendering to control interactive UI elements.
- Deploying a frontend application using Vercel.

## 🔮 Future Improvements

- Add movie detail pages with expanded information.
- Improve search suggestions and filtering.
- Add favorites and a personal watchlist.
- Improve loading states and API error handling.
- Add keyboard-accessible video controls.
- Further optimize the experience for mobile devices.

##  Author

**Rahel Zekiros**

- **GitHub:** https://github.com/Rahel-zekiros
- **Project Repository:** https://github.com/Rahel-zekiros/cine-stream-hub
- **Live Demo:** https://cine-stream-hub.vercel.app

##  Disclaimer

CineStream is an educational project inspired by Netflix's browsing experience. It is not affiliated with or endorsed by Netflix. Movie information and images are provided through the configured movie data services. Trailer availability depends on the data and video sources used by the application.

This project is intended for learning and portfolio demonstration purposes.
