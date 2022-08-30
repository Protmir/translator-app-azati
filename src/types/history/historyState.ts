import { HistoryActionTypes } from './historyTypes';
import { Texts } from '../favourite/favouriteState';

export interface HistoryState {
    history: Texts[];
}

interface UpdateHistory {
    type: HistoryActionTypes.UPDATE_HISTORY;
    payload: Texts;
}

interface RemoveHistory {
    type: HistoryActionTypes.REMOVE_HISTORY;
}

export type HistoryAction = UpdateHistory | RemoveHistory
