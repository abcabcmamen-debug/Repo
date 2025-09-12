import React from 'react';
import { X, Play, Plus, ThumbsUp, ThumbsDown, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';

const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!movie) return null;

  const formatRating = (rating) => {
    return Math.round(rating * 10) / 10;
  };

  const getYear = (date) => {
    return date ? new Date(date).getFullYear() : 'N/A';
  };

  const handlePlayTrailer = () => {
    window.open(`https://www.youtube.com/results?search_query=${movie.title}+trailer`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-gray-900 border-none overflow-hidden">
        {/* Hero Image/Video Area */}
        <div className="relative h-96 bg-black">
          <img
            src={movie.backdrop_path || movie.poster_path}
            alt={movie.title || movie.name}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Content Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {movie.title || movie.name}
            </h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded-sm"
                onClick={handlePlayTrailer}
              >
                <Play className="w-6 h-6 mr-2 fill-current" />
                Play
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full p-3 border border-white/50"
              >
                <Plus className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full p-3 border border-white/50"
              >
                <ThumbsUp className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full p-3 border border-white/50"
              >
                <ThumbsDown className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 rounded-full p-3 border border-white/50 ml-auto"
              >
                <Volume2 className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Metadata */}
              <div className="flex items-center space-x-4 text-white mb-4">
                <span className="text-green-500 font-semibold text-lg">
                  {formatRating(movie.vote_average)}/10
                </span>
                <span className="text-gray-300">{getYear(movie.release_date || movie.first_air_date)}</span>
                <span className="bg-gray-600 px-2 py-1 text-sm rounded">HD</span>
              </div>

              {/* Description */}
              <p className="text-white text-lg leading-relaxed mb-6">
                {movie.overview}
              </p>
            </div>

            {/* Sidebar */}
            <div className="text-gray-300">
              <div className="mb-4">
                <span className="text-gray-400">Cast: </span>
                <span className="text-white">Loading cast...</span>
              </div>
              
              <div className="mb-4">
                <span className="text-gray-400">Genres: </span>
                <span className="text-white">
                  {movie.genre_ids?.map((genreId, index) => {
                    // Mock genre names for display
                    const genreNames = {
                      28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
                      80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
                      14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
                      9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction',
                      10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western'
                    };
                    return genreNames[genreId] || 'Unknown';
                  }).join(', ')}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-gray-400">This movie is: </span>
                <span className="text-white">Exciting, Suspenseful</span>
              </div>
            </div>
          </div>

          {/* More Like This Section */}
          <div className="mt-12">
            <h3 className="text-white text-xl font-semibold mb-4">More Like This</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800 rounded-sm overflow-hidden">
                  <div className="h-32 bg-gray-700"></div>
                  <div className="p-3">
                    <h4 className="text-white font-medium mb-1">Similar Movie {item}</h4>
                    <p className="text-gray-400 text-sm">Brief description...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;