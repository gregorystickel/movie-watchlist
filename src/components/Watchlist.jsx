import  React from 'react';
import '../App.css';
import MovieCard from './MovieCard';

const Watchlist = ({list, removeMovie}) => {
    const movieDisplay = list.map((movie, index) => {
        return (
          <MovieCard removeMovie={removeMovie} list={list} movie={movie} key={index} />
        );
      });

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>

    )
};

export default Watchlist;