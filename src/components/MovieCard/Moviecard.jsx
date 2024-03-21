import React from 'react'
import './Movie_card.css'
const Moviecard = (props) => {
    const { id, title, price, description, category, image,rating } = props;
    return (
        <div>
            <div className="movie">
                <figure className="movie__figure">
                    <img
                        src={image}
                        className="movie__poster"
                        alt='movie-alternate-name'
                    />
                    <p>{price}₹</p>
                    <figcaption>
                        <span className="movie__vote">{category}</span>
                    </figcaption>
                    <h2 className="movie__title">{title}</h2>
                </figure>
            </div>
        </div>
    )
}

export default Moviecard