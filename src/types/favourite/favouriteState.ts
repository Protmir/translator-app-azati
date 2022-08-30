import { FavouriteActionTypes } from './favouriteTypes';

export interface Favourite {
    source: string
    target: string
}

export interface FavouriteState {
    favourite: Favourite[];
    loading: boolean,
    error: boolean
}

interface FetchFavouriteAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE;
}

export interface FetchFavouriteSuccessAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE_SUCCESS;
    payload: Favourite[]
}

interface FetchFavouriteErrorAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE_ERROR;
}

interface UpdateFavourite {
    type: FavouriteActionTypes.UPDATE_FAVOURITE;
    payload: Favourite;
}

export type FavoriteAction = FetchFavouriteAction | FetchFavouriteSuccessAction | FetchFavouriteErrorAction | UpdateFavourite
