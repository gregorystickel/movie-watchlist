import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieScreen = ({
  movieList,
  page,
  setPage,
  list,
  movie,
  addMovie,
  removeMovie,
  
}) => {

  const decrement = () => {
        setPage(page -  1)
  };
  const increment = () => {
        setPage(+page + 1)
  };  

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        removeMovie={removeMovie}
        movie={movie}
        addMovie={addMovie}
        key={index}
        list={list}
      />
    );
  });

  return (
    <div className="page">
      <h1>Greg's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
