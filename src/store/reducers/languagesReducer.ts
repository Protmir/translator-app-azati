import { LanguagesState, LoaderLanguagesAction } from '../../types/languages/languagesState';
import { LanguagesActionTypes } from '../../types/languages/languagesTypes';

const initialState: LanguagesState = {
    languages: null,
    loading: false,
    error: false,
};

const languages = {
    [LanguagesActionTypes.FETCH_LANGUAGES]: (state = initialState): LanguagesState => ({
        ...state,
        loading: true,
        error: false,
    }),
    [LanguagesActionTypes.FETCH_LANGUAGES_SUCCESS]: (state = initialState, action: any): LanguagesState => ({
        ...state,
        loading: false,
        error: false,
        languages: action.payload,
    }),
    [LanguagesActionTypes.FETCH_LANGUAGES_ERROR]: (state = initialState): LanguagesState => ({
        ...state,
        loading: false,
        error: true,
    }),
};

export const languagesReduces = (state = initialState, action: LoaderLanguagesAction): LanguagesState => {
    const handler = languages[action.type];
    return handler ? handler(state, action) : state;
};
