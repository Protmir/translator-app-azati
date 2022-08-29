import { TranslateActionTypes } from './translateTypes';

export interface TranslateState {
    translatedText: string;
    loading: boolean,
    error: boolean
}

interface FetchTranslateAction {
    type: TranslateActionTypes.FETCH_TRANSLATE;
}

export interface FetchTranslateSuccessAction {
    type: TranslateActionTypes.FETCH_TRANSLATE_SUCCESS;
    payload: string
}

interface FetchTranslateErrorAction {
    type: TranslateActionTypes.FETCH_TRANSLATE_ERROR;
}

export type LoaderTranslateAction = FetchTranslateAction | FetchTranslateSuccessAction | FetchTranslateErrorAction
