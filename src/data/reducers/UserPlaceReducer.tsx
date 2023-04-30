import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { LoginService } from 'data/services/LoginService';
import produce from 'immer';
import { useEffect, useReducer } from 'react';

export const initialState = {
    userPlace: {
        nome: '',
        endereco: '',
        contato: '',
        descricao: '',
        imagem: '',
        usuario: {
            nome: '',
            email: '',
        },
    } as UserPlaceInterface,
    isLogging: false,
};

export type InitialStateType = typeof initialState;

type UserPlaceAction = 'SET_USER_PLACE' | 'SET_LOGGING';

export type UserPlaceActionType = {
    type: UserPlaceAction;
    payload?: unknown;
};

export interface UserPlaceReducerInterface {
    userPlaceState: InitialStateType;
    userPlaceDispatch: React.Dispatch<UserPlaceActionType>;
}

const reducer = (
    state: InitialStateType,
    action: UserPlaceActionType
): InitialStateType => {
    const nextState = produce(state, (draftState) => {
        switch (action.type) {
            case 'SET_USER_PLACE':
                draftState.userPlace = action.payload as UserPlaceInterface;
                draftState.isLogging = false;
                break;
            case 'SET_LOGGING':
                draftState.isLogging = action.payload as boolean;
                break;
        }
    });
    return nextState;
};

export function useUserPlaceReducer(): UserPlaceReducerInterface {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        getUserPlace();
    }, [state.userPlace.usuario.id]);

    async function getUserPlace() {
        if (state.isLogging) {
            return;
        }

        dispatch({ type: 'SET_LOGGING', payload: true });
        try {
            const userPlace = await LoginService.getUserPlace();
            if (userPlace) {
                dispatch({ type: 'SET_USER_PLACE', payload: userPlace });
            } else {
                dispatch({ type: 'SET_LOGGING', payload: false });
            }
        } catch (error) {
            dispatch({ type: 'SET_LOGGING', payload: false });
        }
    }

    return {
        userPlaceState: state,
        userPlaceDispatch: dispatch,
    };
}
