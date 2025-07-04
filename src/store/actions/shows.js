import { CLEAR_SEARCH_SHOWS, FETCH_SHOWS, FETCH_SHOWS_BY_GENRE, SEARCH_SHOWS } from "../actionTypes"

export const fetchShows = (shows, dispatch) => {
    dispatch({
        type: FETCH_SHOWS,
        payload: { ...shows }
    });
};

export const fetchShowsByGenre = (genre, dispatch) => {
    dispatch({
        type: FETCH_SHOWS_BY_GENRE,
        payload: { ...genre }
    });
};

export const searchShows = (shows, dispatch) => {
    dispatch({
        type: SEARCH_SHOWS,
        payload: { ...shows }
    });
};

export const clearSearchShows = (dispatch) => {
    dispatch({
        type: CLEAR_SEARCH_SHOWS,
    });
};