import { ObjectInterface } from 'data/@types/ObjectInterface';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import { useApiHateoas } from 'data/hooks/useApi.hook';
import produce from 'immer';
import { useContext, useEffect, useReducer } from 'react';

export const initialState = {
    objects: [] as ObjectInterface[],
    isFetching: true,
};

type InitialStateType = typeof initialState;

type ObjectAction = 'SET_OBJECT' | 'SET_FETCHING';

export type ObjectActionType = {
    type: ObjectAction;
    payload?: unknown;
};

export interface ObjectReducerInterface {
    objectState: InitialStateType;
    objectDispatch: React.Dispatch<ObjectActionType>;
}

const reducer = (
    state: InitialStateType,
    action: ObjectActionType
): InitialStateType => {
    const nextState = produce(state, (draftState) => {
        switch (action.type) {
            case 'SET_OBJECT':
                draftState.objects = action.payload as ObjectInterface[];
                draftState.isFetching = false;
                break;
            case 'SET_FETCHING':
                draftState.isFetching = action.payload as boolean;
                break;
        }
    });
    return nextState;
};

export function useObjectReducer(): ObjectReducerInterface {
    const { userPlaceState } = useContext(UserPlaceContext),
        { userPlace } = userPlaceState,
        objects = useApiHateoas<ObjectInterface[]>(
            userPlace.links,
            'listar_objetos_local'
        ).data,
        [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (objects) {
            dispatch({ type: 'SET_OBJECT', payload: objects });
        }
    }, [objects]);

    return { objectState: state, objectDispatch: dispatch };
}
