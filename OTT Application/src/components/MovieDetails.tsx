import { useEffect, useState } from 'react'
import '../styles/MoviePage.css'
import { useFavourites } from '../Context/MovieContext'

type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    imdbRating: string,
    Released: string,
    Type: string,
    Plot: string,
    Genre: string,
    Poster: string
}

type Props = {
    id: string
}

const MovieDetails = ({id}: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [{movies},dispatch] = useFavourites() 
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=203b4718`)
            const data = await response.json()
            setMovie(data)
        }
        fetchMovie()
    },[id]);

    const addtofavourites = (movie:Movie) => {
        dispatch({type: 'ADD_TO_FAVOURITES', payload: movie})
    }

    const removefromfavourites = (movie:Movie) => {
        dispatch({type: 'REMOVE_FROM_FAVOURITES', payload: movie.imdbID})
    }
  return (
    <div>
        {
            movie && (
                <div className="movie_view-page">
                    <div className="movie_view-info">
                        <img src={movie.Poster} alt={movie.Title} />
                        <h1>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                        <p>{movie.Genre}</p>
                        <p>{movie.Released}</p>
                        <p>{movie.Plot}</p>
                        <p>{movie.imdbRating}</p>
                        {
                            movies.some((m) => m.imdbID === movie.imdbID) ? 
                            <button style={{backgroundColor: '#dc3545'}} onClick={()=>removefromfavourites(movie)}>Remove from Favourites</button> :
                            <button onClick={()=>addtofavourites(movie)}>Add to Favourites</button>
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default MovieDetails