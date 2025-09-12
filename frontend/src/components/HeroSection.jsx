import React, { useState } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { mockHeroContent } from '../mock/mockData';

const HeroSection = ({ onOpenModal }) => {
  const [isMuted, setIsMuted] = useState(true);
  const heroContent = mockHeroContent;

  const handlePlayTrailer = () => {
    // Open YouTube trailer in modal
    window.open(`https://www.youtube.com/watch?v=${heroContent.video_key}`, '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroContent.backdrop_path})`,
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="ml-8 md:ml-16 max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {heroContent.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-white mb-6">
            <span className="bg-red-600 px-2 py-1 text-sm font-semibold rounded">
              {heroContent.rating}
            </span>
            <span className="text-lg">{heroContent.year}</span>
            <div className="flex space-x-2">
              {heroContent.genres.map((genre, index) => (
                <span key={index} className="text-sm">
                  {genre}{index < heroContent.genres.length - 1 && ' •'}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            {heroContent.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded-sm"
              onClick={handlePlayTrailer}
            >
              <Play className="w-6 h-6 mr-2 fill-current" />
              Play
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-gray-600/70 text-white hover:bg-gray-600/50 px-8 py-3 text-lg font-semibold rounded-sm"
              onClick={() => onOpenModal(heroContent)}
            >
              <Info className="w-6 h-6 mr-2" />
              More Info
            </Button>
          </div>
        </div>

        {/* Mute Button */}
        <div className="absolute bottom-32 right-8">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 border border-white/50 rounded-full p-3"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;