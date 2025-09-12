import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies, onOpenModal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemWidth = 200; // Approximate width of each movie card
  const itemsToShow = 6; // Number of items to scroll at once

  const scroll = (direction) => {
    const container = document.getElementById(`row-${title.replace(/\s+/g, '')}`);
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    let newPosition;

    if (direction === 'left') {
      newPosition = Math.max(0, scrollPosition - (itemWidth * itemsToShow));
    } else {
      newPosition = Math.min(maxScroll, scrollPosition + (itemWidth * itemsToShow));
    }

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollPosition < (movies.length * itemWidth) - (itemsToShow * itemWidth);

  return (
    <div className="mb-8 group">
      {/* Row Title */}
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 px-4 md:px-8">
        {title}
      </h2>

      {/* Movies Container */}
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {/* Movies Scroll Container */}
        <div
          id={`row-${title.replace(/\s+/g, '')}`}
          className="flex space-x-2 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {movies.map((movie, index) => (
            <div key={movie.id} className="flex-none w-48">
              <MovieCard 
                movie={movie} 
                onOpenModal={onOpenModal}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MovieRow;