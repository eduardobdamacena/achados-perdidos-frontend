import { PlaceInterface } from 'data/@types/PlaceInterface';
import produce from 'immer';
import { useReducer } from 'react';

export const initialState = {
    locations: [] as PlaceInterface[],
};

type InitialStateType = typeof initialState;

type LocalAction = 'SET_LOCATIONS';

export type LocalActionType = {
    type: LocalAction;
    payload: unknown;
};

export interface LocalReducerInterface {
    locationsState: InitialStateType;
    locationsDispatch: React.Dispatch<LocalActionType>;
}

const reducer = (
    state: InitialStateType,
    action: LocalActionType
): InitialStateType => {
    const nextState = produce(state, (draftState) => {
        switch (action.type) {
            case 'SET_LOCATIONS':
                draftState.locations = action.payload as PlaceInterface[];
                break;
        }
    });
    return nextState;
};

export function useLocalReducer(): LocalReducerInterface {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { locationsState: state, locationsDispatch: dispatch };
}
