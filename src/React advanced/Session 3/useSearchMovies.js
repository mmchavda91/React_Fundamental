import { useEffect, useState } from "react";

function useSearchMovies(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1st useEffect - movies fetch karne ke liye
  useEffect(() => {
    if (!query.trim()) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`
        );

        const result = await response.json();


        console.log("API Response:", result);

        if (result.Response === "False") {
          throw new Error(result.Error || "Movie not found");
        }

        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  // 2nd useEffect - data change hone par console message
  useEffect(() => {
    if (data) {
      console.log("Movie data changed:", data);
    }
  }, [data]);

  return {
    data,
    loading,
    error
  };
}

export default useSearchMovies;