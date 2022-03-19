//here we will have a list of multiple movies, so this component will have more components
import React from 'react'



const Card = ({movie}) => {
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title}/>
            <h4>{movie.Title} {movie.Year}</h4>
            <p>{movie.Type}</p>

        </div>
    )
}

export default Card
