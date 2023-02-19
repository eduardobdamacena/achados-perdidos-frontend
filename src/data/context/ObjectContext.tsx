import {
    ObjectReducerInterface,
    initialState,
    useObjectReducer,
} from 'data/reducers/ObjectReducer';
import React, { ReactNode, createContext } from 'react';

const initialValue: ObjectReducerInterface = {
    objectState: initialState,
    objectDispatch: () => {},
};

export const ObjectContext = createContext(initialValue);

export const ObjectProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const reducer = useObjectReducer();
    return (
        <ObjectContext.Provider value={reducer}>
            {children}
        </ObjectContext.Provider>
    );
};
