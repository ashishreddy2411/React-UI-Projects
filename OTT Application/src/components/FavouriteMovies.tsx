import { useFavourites } from "../Context/MovieContext"
import "../styles/FavouriteMovies.css"
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

const FavouriteMovies = () => {
    const [{movies},dispatch] = useFavourites() 
    const removefromfavourites = (movie: Movie) => {
        dispatch({type: 'REMOVE_FROM_FAVOURITES', payload: movie.imdbID})
    }


    return (
        <div>
            { movies.length>0 && <h1>Favourite Movies</h1>}
            <div className="movie_home-list">
                {
                    movies.map((movie) => (
                        <div key={movie.imdbID} className="movie">
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            <p>{movie.Genre}</p>
                            <p>{movie.Released}</p>
                            <p>{movie.Plot}</p>
                            <p>{movie.imdbRating}</p>
                            <button onClick={() => removefromfavourites(movie)}>Remove from Favourites</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FavouriteMovies