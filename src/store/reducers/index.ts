import { combineReducers } from 'redux';
import { languagesReduces } from './languagesReducer';
import { translateReduces } from './translateReducer';

export const rootReducer = combineReducers({
    languages: languagesReduces,
    translate: translateReduces,
});

export type RootState = ReturnType<typeof rootReducer>
