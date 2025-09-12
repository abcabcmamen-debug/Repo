# Netflix Clone - API Contracts & Integration Plan

## Current Mock Data (To Be Replaced)

### Frontend Mock Files
- `/frontend/src/mock/mockData.js` - Contains all static movie/TV show data
- Currently using TMDB image URLs but hardcoded data

### Mock Data Structure
```javascript
// Hero Content
mockHeroContent = {
  id, title, description, backdrop_path, video_key, rating, year, genres
}

// Movie Rows
mockMovieRows = [
  { title: "Popular Movies", movies: [...] },
  { title: "Trending TV Shows", movies: [...] },
  { title: "Action Movies", movies: [...] }
]

// Movie Objects
movie = {
  id, title, poster_path, backdrop_path, overview, 
  vote_average, release_date, genre_ids
}
```

## API Contracts

### 1. TMDB Integration Endpoints

#### Backend Routes (All prefixed with `/api`)
- `GET /api/movies/popular` - Get popular movies
- `GET /api/movies/trending` - Get trending movies  
- `GET /api/tv/trending` - Get trending TV shows
- `GET /api/movies/category/{category}` - Get movies by category (action, comedy, etc.)
- `GET /api/movie/{id}` - Get movie details
- `GET /api/movie/{id}/videos` - Get movie trailers
- `GET /api/search?query={query}` - Search movies/shows

#### TMDB API Integration
- Use provided API keys: `c8dea14dc917687ac631a52620e4f7ad`, `3cb41ecea3bf606c56552db3d17adefd`
- Base URL: `https://api.themoviedb.org/3/`
- Image Base URL: `https://image.tmdb.org/t/p/`
- Implement rate limiting and key rotation

### 2. User Features (Optional Phase 2)

#### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login  
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

#### User Data Routes
- `GET /api/user/watchlist` - Get user's watchlist
- `POST /api/user/watchlist/{movie_id}` - Add to watchlist
- `DELETE /api/user/watchlist/{movie_id}` - Remove from watchlist
- `GET /api/user/history` - Get watch history
- `POST /api/user/history/{movie_id}` - Add to history

### 3. Database Schema (MongoDB)

#### Collections
```javascript
// movies (cached TMDB data)
{
  _id: ObjectId,
  tmdb_id: Number,
  title: String,
  overview: String,
  poster_path: String,
  backdrop_path: String,
  vote_average: Number,
  release_date: Date,
  genres: [String],
  videos: [{ key: String, type: String, site: String }],
  cached_at: Date
}

// users (future feature)
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  profile: {
    name: String,
    avatar: String
  },
  watchlist: [ObjectId],
  history: [ObjectId],
  created_at: Date
}
```

## Frontend Integration Changes

### 1. Remove Mock Data
- Delete `/frontend/src/mock/mockData.js`
- Update imports in components

### 2. Create API Service
- Create `/frontend/src/services/api.js`
- Implement axios-based API calls
- Handle loading states and errors

### 3. Component Updates
- **App.js**: Add loading states, error handling
- **HeroSection.jsx**: Fetch hero content from API
- **MovieRow.jsx**: Fetch movies by category from API  
- **MovieModal.jsx**: Fetch detailed movie info and videos
- **Header.jsx**: Implement search functionality

### 4. State Management
- Use React hooks for state management
- Implement caching for API responses
- Add loading spinners and error states

## Implementation Priority

### Phase 1: Core TMDB Integration
1. Set up TMDB API service in backend
2. Create basic movie endpoints
3. Replace frontend mock data with API calls
4. Implement search functionality

### Phase 2: User Features (Optional)
1. Add user authentication
2. Implement watchlist functionality
3. Add viewing history
4. Create user profiles

### Phase 3: Enhancements (Optional)
1. Add video player with YouTube integration
2. Implement recommendations
3. Add movie ratings and reviews
4. Optimize performance with caching

## Error Handling
- Network errors: Show retry buttons
- API rate limits: Implement graceful fallbacks
- Missing images: Use placeholder images
- Search no results: Show "No results found" message

## Performance Considerations
- Implement image lazy loading
- Cache API responses in backend
- Use pagination for large result sets
- Optimize image sizes (TMDB provides multiple sizes)