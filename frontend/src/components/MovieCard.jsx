import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const MovieCard = ({ movie, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatRating = (rating) => {
    return Math.round(rating * 10) / 10;
  };

  const getYear = (date) => {
    return date ? new Date(date).getFullYear() : 'N/A';
  };

  const handlePlayTrailer = (e) => {
    e.stopPropagation();
    // For demo purposes, open a generic trailer search
    window.open(`https://www.youtube.com/results?search_query=${movie.title}+trailer`, '_blank');
  };

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(movie)}
    >
      {/* Movie Poster */}
      <div className="relative w-full h-40 md:h-48 rounded-sm overflow-hidden bg-gray-800">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
        )}
      </div>

      {/* Expanded Info on Hover */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 rounded-b-sm p-4 shadow-2xl border-t-2 border-red-600 z-50 min-w-72">
          {/* Title */}
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
            {movie.title || movie.name}
          </h3>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mb-3">
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-200 rounded-full p-2"
              onClick={handlePlayTrailer}
            >
              <Play className="w-4 h-4 fill-current" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full p-2 border border-gray-500"
              onClick={(e) => e.stopPropagation()}
            >
              <Plus className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full p-2 border border-gray-500"
              onClick={(e) => e.stopPropagation()}
            >
              <ThumbsUp className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full p-2 border border-gray-500 ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(movie);
              }}
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
            <span className="text-green-500 font-semibold">
              {formatRating(movie.vote_average)}/10
            </span>
            <span>•</span>
            <span>{getYear(movie.release_date || movie.first_air_date)}</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
            {movie.overview}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;