import React from "react";
import {Link} from "react-router-dom";
import PropTypes from"prop-types";
import "./Movie.css";

function Movie({ id ,year, title, summary, poster, genres, rating}){
    return (
        
        <div className="movie">
            <Link to={{
                pathname: `/movie/${id}`,
                state:{
                    year,
                    title,
                    summary,
                    poster,
                    genres,
                    rating
                     }
                }}
            >
            
            <img calssName="scale" src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {/*<ul className="movie__genres">
                   {genres.map((genre, index) => (
                   <li key={index} className="genres__genre">{genre}</li>
                   ))}
                   </ul> */}
                <p className="movie__summary">
                    {summary.slice(0, 100)}...더보기</p>
                <h7 className="movie_rating">평점 : {rating}  <i class="fas fa-star"></i> </h7>                       
            
            </div>
            </Link>
         </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.inResquired
};

export default Movie;