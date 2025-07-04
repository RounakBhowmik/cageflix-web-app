import { CLEAR_SEARCH_SHOWS, FETCH_SHOWS, FETCH_SHOWS_BY_GENRE, SEARCH_SHOWS } from "../actionTypes";

export const showsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_SHOWS: {
            return {
                ...state,
                ...payload
            };
        }
        case SEARCH_SHOWS: {
            return {
                ...state,
                isSearch: true,
                searchData: {
                    ...payload
                }
            };
        }
        case CLEAR_SEARCH_SHOWS: {
            return {
                ...state,
                isSearch: false,
                searchData: {
                    movies: [],
                    tvShows: []
                }
            };
        }
         case FETCH_SHOWS_BY_GENRE: {            
            return {
                ...state,
                genre: {...payload}
            };
        }
        default: {
            return { ...state };
        }
    }
};

