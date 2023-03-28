import {
    LocalReducerInterface,
    initialState,
    useLocalReducer,
} from 'data/reducers/LocalReducer';
import { ReactNode, createContext } from 'react';

const initialValue: LocalReducerInterface = {
    locationsState: initialState,
    locationsDispatch: () => {},
};

export const LocalContext = createContext(initialValue);

export const LocalProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const reducer = useLocalReducer();
    return (
        <LocalContext.Provider value={reducer}>
            {children}
        </LocalContext.Provider>
    );
};
