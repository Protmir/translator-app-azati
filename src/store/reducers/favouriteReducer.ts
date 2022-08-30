import { FavoriteAction, Favourite, FavouriteState } from '../../types/favourite/favouriteState';
import { FavouriteActionTypes } from '../../types/favourite/favouriteTypes';
import { localStorageItemsName } from '../../constants/localStorageItemsName';

const oldFavourite = localStorage.getItem(localStorageItemsName.favourites)
    ? JSON.parse(localStorage.getItem(localStorageItemsName.favourites) || '')
    : [];

const initialState: FavouriteState = {
    favourite: oldFavourite,
    loading: false,
    error: false,
};

const updateFavourite = (nextFavourite: Favourite, prevFavourite: Favourite[]) => {
    const newFavourite = [nextFavourite, ...prevFavourite];
    localStorage.setItem(localStorageItemsName.favourites, JSON.stringify(newFavourite));
    return newFavourite;
};

const favourite = {
    [FavouriteActionTypes.FETCH_FAVOURITE]: (state = initialState): FavouriteState => ({
        ...state,
        loading: true,
        error: false,
    }),
    [FavouriteActionTypes.FETCH_FAVOURITE_SUCCESS]: (state = initialState, action: any): FavouriteState => ({
        ...state,
        loading: false,
        error: false,
        favourite: action.payload,
    }),
    [FavouriteActionTypes.FETCH_FAVOURITE_ERROR]: (state = initialState): FavouriteState => ({
        ...state,
        loading: false,
        error: true,
    }),
    [FavouriteActionTypes.UPDATE_FAVOURITE]: (state = initialState, action: any): FavouriteState => ({
        ...state,
        favourite: updateFavourite(action.payload, state.favourite),
    }),
    [FavouriteActionTypes.REMOVE_FAVOURITE]: (state = initialState): FavouriteState => ({
        ...state,
        favourite: [],
    }),
};

export const favouriteReducer = (state = initialState, action: FavoriteAction): FavouriteState => {
    const handler = favourite[action.type];
    return handler ? handler(state, action) : state;
};
