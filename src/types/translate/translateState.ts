import { TranslateResponse } from './translateResponse';
import { TranslateActionTypes } from './translateTypes';

export interface TranslateState {
    translations: TranslateResponse[] | null;
    loading: boolean,
    error: boolean
}

interface FetchTranslateAction {
    type: TranslateActionTypes.FETCH_TRANSLATE;
}

export interface FetchTranslateSuccessAction {
    type: TranslateActionTypes.FETCH_TRANSLATE_SUCCESS;
    payload: TranslateResponse[]
}

interface FetchTranslateErrorAction {
    type: TranslateActionTypes.FETCH_TRANSLATE_ERROR;
}

export type LoaderTranslateAction = FetchTranslateAction | FetchTranslateSuccessAction | FetchTranslateErrorAction
