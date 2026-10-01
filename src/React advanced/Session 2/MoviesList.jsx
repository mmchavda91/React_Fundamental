import React from "react";
import useTrendingMovies from "./useTrendingMovies";

function MoviesList() {

  const {
    loading,
    error,
    data
  } = useTrendingMovies();

  if (loading) {
    return <h2>Loading Trending Movies...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Trending Movies</h1>

      {data.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;