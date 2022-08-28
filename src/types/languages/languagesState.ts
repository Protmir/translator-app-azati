import { LanguagesActionTypes } from './languagesTypes';
import { Languages } from './languages';

export interface LanguagesState {
    languages: Languages[] | null;
    loading: boolean,
    error: boolean
}

interface FetchLanguagesAction {
    type: LanguagesActionTypes.FETCH_LANGUAGES;
}

export interface FetchLanguagesSuccessAction {
    type: LanguagesActionTypes.FETCH_LANGUAGES_SUCCESS;
    payload: Languages[]
}

interface FetchLanguagesErrorAction {
    type: LanguagesActionTypes.FETCH_LANGUAGES_ERROR;
}

export type LoaderLanguagesAction = FetchLanguagesAction | FetchLanguagesSuccessAction | FetchLanguagesErrorAction
