import { LoaderActionTypes } from '../../types/loader/loaderTypes';
import { LoaderState, LoaderAction } from '../../types/loader/loaderState';

const initialState: LoaderState = {
    types: {},
};

const loader = {
    [LoaderActionTypes.PENDING]: (state = initialState, action: any): LoaderState => ({
        ...state,
        types: {
            [action.payload]: 'pending',
        },
    }),
    [LoaderActionTypes.FULFILLED]: (state = initialState, action: any): LoaderState => ({
        ...state,
        types: {
            [action.payload]: 'fulfilled',
        },
    }),
    [LoaderActionTypes.REJECTED]: (state = initialState, action: any): LoaderState => ({
        ...state,
        types: {
            [action.payload]: 'rejected',
        },
    }),
};

export const loaderReducer = (state = initialState, action: LoaderAction): LoaderState => {
    const handler = loader[action.type];
    return handler ? handler(state, action) : state;
};
