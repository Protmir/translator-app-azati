import { Dispatch } from 'redux';
import { LanguagesActionTypes } from '../../types/languages/languagesTypes';
import { getLanguage } from '../../api/getLanguage';
import { TranslateRequest } from '../../types/translate/translateRequest';
import { translate } from '../../api/translate';
import { TranslateActionTypes } from '../../types/translate/translateTypes';
import { Texts } from '../../types/favourite/favouriteState';
import { FavouriteActionTypes } from '../../types/favourite/favouriteTypes';
import { localStorageItemsName } from '../../constants/localStorageItemsName';
import { HistoryActionTypes } from '../../types/history/historyTypes';

export const fetchLanguages = () => async (dispatch: Dispatch) => {
    dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES });
    try {
        const response = await getLanguage();
        setTimeout(() => {
            dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES_SUCCESS, payload: response.data.languages });
        }, 1000);
    } catch {
        dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES_ERROR });
    }
};

export const translateText = (data: TranslateRequest) => async (dispatch: Dispatch) => {
    dispatch({ type: TranslateActionTypes.FETCH_TRANSLATE });
    try {
        const response = await translate(data);
        setTimeout(() => {
            dispatch({
                type: HistoryActionTypes.UPDATE_HISTORY,
                payload: {
                    source: data.q,
                    target: response.data.data.translations.translatedText,
                },
            });
            dispatch({ type: TranslateActionTypes.FETCH_TRANSLATE_SUCCESS, payload: response.data.data.translations.translatedText });
        }, 1000);
    } catch {
        dispatch({ type: TranslateActionTypes.FETCH_TRANSLATE_ERROR });
    }
};

export const getFavourite = () => async (dispatch: Dispatch) => {
    dispatch({ type: FavouriteActionTypes.FETCH_FAVOURITE });
    try {
        const favourite: Texts[] = await localStorage.getItem(localStorageItemsName.favourites)
            ? JSON.parse(localStorage.getItem(localStorageItemsName.favourites) || '')
            : [];
        setTimeout(() => {
            dispatch({ type: FavouriteActionTypes.FETCH_FAVOURITE_SUCCESS, payload: favourite });
        }, 1000);
    } catch {
        dispatch({ type: FavouriteActionTypes.FETCH_FAVOURITE_ERROR });
    }
};

export const removeFavourite = () => async (dispatch: Dispatch) => {
    await localStorage.removeItem(localStorageItemsName.favourites);
    dispatch({ type: FavouriteActionTypes.REMOVE_FAVOURITE });
};

export const updateFavourite = (favourite: Texts) => (dispatch: Dispatch) => {
    dispatch({ type: FavouriteActionTypes.UPDATE_FAVOURITE, payload: favourite });
};

export const removeHistory = () => async (dispatch: Dispatch) => {
    await localStorage.removeItem(localStorageItemsName.history);
    dispatch({ type: HistoryActionTypes.REMOVE_HISTORY });
};
