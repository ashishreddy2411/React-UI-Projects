export type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    imdbRating: string,
    Released: string,
    Type: string,
    Plot: string,
    Genre: string,
    Poster: string
};

export type State = {
    movies: Movie[]
};

export const initialState: State = {
    movies: []
};

export type Action = 
    | { type: 'ADD_TO_FAVOURITES', payload: Movie }
    | { type: 'REMOVE_FROM_FAVOURITES', payload: string };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.imdbID !== action.payload)
            };
        default:
            return state;
    }
};
