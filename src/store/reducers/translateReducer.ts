import { LoaderTranslateAction, TranslateState } from '../../types/translate/translateState';
import { TranslateActionTypes } from '../../types/translate/translateTypes';

const initialState: TranslateState = {
    translations: null,
    loading: false,
    error: false,
};

const translate = {
    [TranslateActionTypes.FETCH_TRANSLATE]: (state = initialState): TranslateState => ({
        ...state,
        loading: true,
        error: false,
    }),
    [TranslateActionTypes.FETCH_TRANSLATE_SUCCESS]: (state = initialState, action: any): TranslateState => ({
        ...state,
        loading: false,
        error: false,
        translations: action.payload,
    }),
    [TranslateActionTypes.FETCH_TRANSLATE_ERROR]: (state = initialState): TranslateState => ({
        ...state,
        loading: false,
        error: true,
    }),
};

export const translateReduces = (state = initialState, action: LoaderTranslateAction): TranslateState => {
    const handler = translate[action.type];
    return handler ? handler(state, action) : state;
};
