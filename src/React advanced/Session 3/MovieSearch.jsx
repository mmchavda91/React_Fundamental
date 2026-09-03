import React, { useState } from "react";
import useSearchMovies from "./useSearchMovies";

function MovieSearch() {
  const [query, setQuery] = useState("");

  const {
    data,
    loading,
    error
  } = useSearchMovies(query);

  return (
    <div>
      <h1>Movie Search</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Loading Spinner */}
      {loading && (
        <div>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "5px solid #ddd",
              borderTop: "5px solid #333",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "20px"
            }}
          ></div>

          <p>Loading movies...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <h3 style={{ color: "red" }}>
          Error: {error}
        </h3>
      )}

      {/* Movies */}
      {!loading && !error && data?.Search?.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieSearch;