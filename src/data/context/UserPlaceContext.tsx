import {
    initialState,
    UserPlaceReducerInterface,
    useUserPlaceReducer,
} from 'data/reducers/UserPlaceReducer';
import React, { createContext, ReactNode } from 'react';

const initialValue: UserPlaceReducerInterface = {
    userPlaceState: initialState,
    userPlaceDispatch: () => {},
};

export const UserPlaceContext = createContext(initialValue);

export const UserPlaceProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const reducer = useUserPlaceReducer();
    return (
        <UserPlaceContext.Provider value={reducer}>
            {children}
        </UserPlaceContext.Provider>
    );
};
