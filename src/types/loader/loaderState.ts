import { LoaderActionTypes } from './loaderTypes';

export interface LoaderState {
    types: object;
}

interface Pending {
    type: LoaderActionTypes.PENDING;
    payload: string
}

export interface Fulfilled {
    type: LoaderActionTypes.FULFILLED;
    payload: string

}

interface Rejected {
    type: LoaderActionTypes.REJECTED;
    payload: string
}

export type LoaderAction = Pending | Fulfilled | Rejected
