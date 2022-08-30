import { Texts } from '../../types/favourite/favouriteState';
import { localStorageItemsName } from '../../constants/localStorageItemsName';
import { HistoryAction, HistoryState } from '../../types/history/historyState';
import { HistoryActionTypes } from '../../types/history/historyTypes';

const oldHistory = localStorage.getItem(localStorageItemsName.history)
    ? JSON.parse(localStorage.getItem(localStorageItemsName.history) || '')
    : [];

const initialState: HistoryState = {
    history: oldHistory,
};

const updateHistory = (nextHistory: Texts, prevHistory: Texts[]) => {
    const newHistory = [nextHistory, ...prevHistory];
    localStorage.setItem(localStorageItemsName.history, JSON.stringify(newHistory));
    return newHistory;
};

const history = {
    [HistoryActionTypes.UPDATE_HISTORY]: (state = initialState, action: any): HistoryState => ({
        ...state,
        history: updateHistory(action.payload, state.history),
    }),
    [HistoryActionTypes.REMOVE_HISTORY]: (state = initialState): HistoryState => ({
        ...state,
        history: [],
    }),
};

export const historyReducer = (state = initialState, action: HistoryAction): HistoryState => {
    const handler = history[action.type];
    return handler ? handler(state, action) : state;
};
