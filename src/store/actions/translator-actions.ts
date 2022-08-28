import { Dispatch } from 'redux';
import { LanguagesActionTypes } from '../../types/languages/languagesTypes';
import { getLanguage } from '../../api/getLanguage';
import { TranslateRequest } from '../../types/translate/translateRequest';
import { translate } from '../../api/translate';

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
    dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES });
    try {
        const response = await translate(data);
        setTimeout(() => {
            dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES_SUCCESS, payload: response.data.translations });
        }, 1000);
    } catch {
        dispatch({ type: LanguagesActionTypes.FETCH_LANGUAGES_ERROR });
    }
};
