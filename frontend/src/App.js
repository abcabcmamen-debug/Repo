import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MovieRow from "./components/MovieRow";
import MovieModal from "./components/MovieModal";
import { mockMovieRows } from "./mock/mockData";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection onOpenModal={handleOpenModal} />
        
        {/* Movie Rows */}
        <div className="relative -mt-32 z-20">
          {mockMovieRows.map((row, index) => (
            <MovieRow
              key={index}
              title={row.title}
              movies={row.movies}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* Footer Spacer */}
        <div className="h-32"></div>
      </main>

      {/* Movie Modal */}
      <MovieModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        movie={selectedMovie}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;