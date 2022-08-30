import { FavouriteActionTypes } from './favouriteTypes';

export interface Texts {
    source: string
    target: string
}

export interface FavouriteState {
    favourite: Texts[];
    loading: boolean,
    error: boolean
}

interface FetchFavouriteAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE;
}

export interface FetchFavouriteSuccessAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE_SUCCESS;
    payload: Texts[]
}

interface FetchFavouriteErrorAction {
    type: FavouriteActionTypes.FETCH_FAVOURITE_ERROR;
}

interface UpdateFavourite {
    type: FavouriteActionTypes.UPDATE_FAVOURITE;
    payload: Texts;
}

interface RemoveFavourite {
    type: FavouriteActionTypes.REMOVE_FAVOURITE;
}

export type FavoriteAction = FetchFavouriteAction | FetchFavouriteSuccessAction | FetchFavouriteErrorAction | UpdateFavourite | RemoveFavourite
