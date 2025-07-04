import { CLEAR_SEARCH_SHOWS, FETCH_GENRES, FETCH_SHOWS, FETCH_SHOWS_BY_GENRE, SEARCH_SHOWS } from "../actionTypes"

export const fetchShows = (shows, dispatch) => {
    dispatch({
        type: FETCH_SHOWS,
        payload: { ...shows }
    });
};

export const fetchGenres = (genres, dispatch) => {
    dispatch({
        type: FETCH_GENRES ,
        payload: [...genres ]
    });
};

export const fetchShowsByGenre = (genre, dispatch) => {
    console.log(genre);
    
    dispatch({
        type: FETCH_SHOWS_BY_GENRE,
        payload: { ...genre }
    });
};



export const searchShows = (shows, dispatch) => {
    console.log("shows" , shows);
    
    dispatch({
        type: SEARCH_SHOWS,
        payload: { movies: [...shows] }
    });
};

export const clearSearchShows = (dispatch) => {
    dispatch({
        type: CLEAR_SEARCH_SHOWS,
    });
};