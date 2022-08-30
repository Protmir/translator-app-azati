import { combineReducers } from 'redux';
import { languagesReduces } from './languagesReducer';
import { translateReduces } from './translateReducer';
import { favouriteReducer } from './favouriteReducer';
import { historyReducer } from './historyReducer';

export const rootReducer = combineReducers({
    languages: languagesReduces,
    translate: translateReduces,
    favourites: favouriteReducer,
    history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>
