import React from "react";

const MovieScreen = ({movieList, page, setPage, watchList}) => {
    const movieDisplay = movieList.map((movie, index) => {
        return <h2 key={Math.random().toString()}>{movie.original_title}</h2> 
    }); 

    return (
        <div className="page" >
            <h1>Greg's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
};

export default MovieScreen;