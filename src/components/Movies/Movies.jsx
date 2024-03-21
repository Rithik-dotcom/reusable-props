import React from 'react'
import Moviecard from '../MovieCard/Moviecard';

const Movies = (props) => {
    const { movies } = props;
    return (
        <div>
            <ul className="movies">
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Moviecard {...movie} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Movies