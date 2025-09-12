// Mock data for Netflix clone - will be replaced with TMDB API data later

export const mockHeroContent = {
  id: 1,
  title: "Stranger Things",
  description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
  backdrop_path: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
  video_key: "b9EkMc79ZSU", // YouTube trailer key
  rating: "TV-14",
  year: "2016",
  genres: ["Drama", "Fantasy", "Horror"]
};

export const mockMovieRows = [
  {
    title: "Popular Movies",
    movies: [
      {
        id: 1,
        title: "The Dark Knight",
        poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
        overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and Harvey Dent.",
        vote_average: 9.0,
        release_date: "2008-07-18",
        genre_ids: [28, 80, 18]
      },
      {
        id: 2,
        title: "Inception",
        poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        overview: "A thief who steals corporate secrets through the use of dream-sharing technology.",
        vote_average: 8.8,
        release_date: "2010-07-16",
        genre_ids: [28, 878, 53]
      },
      {
        id: 3,
        title: "Interstellar",
        poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPWZUDvT.jpg",
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        vote_average: 8.6,
        release_date: "2014-11-07",
        genre_ids: [18, 878]
      },
      {
        id: 4,
        title: "Avengers: Endgame",
        poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        overview: "After the devastating events of Infinity War, the Avengers assemble once more.",
        vote_average: 8.4,
        release_date: "2019-04-26",
        genre_ids: [28, 12, 878]
      },
      {
        id: 5,
        title: "Pulp Fiction",
        poster_path: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
        overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence.",
        vote_average: 8.9,
        release_date: "1994-10-14",
        genre_ids: [80, 18]
      }
    ]
  },
  {
    title: "Trending TV Shows",
    movies: [
      {
        id: 11,
        title: "Wednesday",
        poster_path: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        overview: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates murders while making friends.",
        vote_average: 8.5,
        first_air_date: "2022-11-23",
        genre_ids: [35, 80, 9648]
      },
      {
        id: 12,
        title: "The Crown",
        poster_path: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
        overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
        vote_average: 8.7,
        first_air_date: "2016-11-04",
        genre_ids: [18]
      },
      {
        id: 13,
        title: "Breaking Bad",
        poster_path: "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X20EOddUVlD.jpg",
        overview: "A high school chemistry teacher turned methamphetamine producer partners with a former student.",
        vote_average: 9.5,
        first_air_date: "2008-01-20",
        genre_ids: [80, 18]
      },
      {
        id: 14,
        title: "Squid Game",
        poster_path: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/AnsSKR5tfJNF0MD3Y6WMJuwUM7.jpg",
        overview: "Hundreds of cash-strapped players accept an invitation to compete in children's games for a prize.",
        vote_average: 7.8,
        first_air_date: "2021-09-17",
        genre_ids: [18, 53, 9648]
      },
      {
        id: 15,
        title: "House of the Dragon",
        poster_path: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
        overview: "The Targaryen civil war begins. House Targaryen fights for control of the Seven Kingdoms.",
        vote_average: 8.4,
        first_air_date: "2022-08-21",
        genre_ids: [18, 10759, 10765]
      }
    ]
  },
  {
    title: "Action Movies",
    movies: [
      {
        id: 21,
        title: "John Wick",
        poster_path: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
        overview: "An ex-hit-man comes out of retirement to track down the gangsters who killed his dog.",
        vote_average: 7.4,
        release_date: "2014-10-24",
        genre_ids: [28, 53]
      },
      {
        id: 22,
        title: "Mad Max: Fury Road",
        poster_path: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
        overview: "In a post-apocalyptic wasteland, Max teams up with a mysterious woman to flee a tyrannical warlord.",
        vote_average: 7.6,
        release_date: "2015-05-15",
        genre_ids: [28, 12, 878]
      },
      {
        id: 23,
        title: "Mission: Impossible",
        poster_path: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
        overview: "Ethan Hunt and his IMF team embark on their most dangerous mission yet.",
        vote_average: 7.7,
        release_date: "2023-07-12",
        genre_ids: [28, 53]
      },
      {
        id: 24,
        title: "Top Gun: Maverick",
        poster_path: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
        overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
        vote_average: 8.3,
        release_date: "2022-05-27",
        genre_ids: [28, 18]
      },
      {
        id: 25,
        title: "Spider-Man: No Way Home",
        poster_path: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        overview: "With Spider-Man's identity revealed, Peter asks Doctor Strange for help.",
        vote_average: 8.1,
        release_date: "2021-12-17",
        genre_ids: [28, 12, 878]
      }
    ]
  }
];

export const mockGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];