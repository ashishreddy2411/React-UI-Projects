import { useState, useEffect } from 'react'
import '../styles/HomePage.css'
import MovieDetails from './MovieDetails';
import FavouriteMovies from './FavouriteMovies';
type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

const HomePage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState<string>('');
    const [renderMovie, setRenderMovie] = useState<boolean>(false);
    const [id, setID] = useState<string>('');

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${search}&page=1-5&apikey=203b4718`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
        setRenderMovie(false)
    }, [search])
    return (
        <div className="movie_home-page">
            <div className="movie_search">
                <label>Search for a movie:</label>
                <input type="text" placeholder="Search for a movie" onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="movie_home-list">
                {
                    movies &&
                    movies.map((movie) => (
                        <div key={movie.imdbID} className="movie" onClick={
                            () => {
                                console.log(movie.imdbID)
                                setID(movie.imdbID)
                                setRenderMovie(true)
                            }
                        }>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>
                    ))}
            </div>
            {
                renderMovie && <MovieDetails id={id} />
            }
            <FavouriteMovies />
        </div>
    )
}

export default HomePage