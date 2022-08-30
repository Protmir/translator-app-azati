import { combineReducers } from 'redux';
import { languagesReduces } from './languagesReducer';
import { translateReduces } from './translateReducer';
import { favouriteReducer } from './favouriteReducer';

export const rootReducer = combineReducers({
    languages: languagesReduces,
    translate: translateReduces,
    favourites: favouriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>
