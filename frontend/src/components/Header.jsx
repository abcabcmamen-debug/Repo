import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="text-red-600 text-2xl font-bold">NETFLIX</div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <div className="flex items-center bg-black border border-white">
                <Search className="w-4 h-4 text-white ml-3" />
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="bg-transparent text-white placeholder-gray-400 px-3 py-2 w-64 focus:outline-none"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => setShowSearch(true)}
              >
                <Search className="w-5 h-5" />
              </Button>
            )}
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>

          {/* Profile */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-white hover:bg-white/10"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>

            {showProfileMenu && (
              <div className="absolute right-0 top-12 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-sm py-2 min-w-48">
                <div className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer">Manage Profiles</div>
                <div className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer">Account</div>
                <div className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer">Help Center</div>
                <div className="border-t border-gray-700 mt-2 pt-2">
                  <div className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer">Sign out of Netflix</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;