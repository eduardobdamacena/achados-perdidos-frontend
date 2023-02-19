import { ObjectContext } from 'data/context/ObjectContext';
import { useContext } from 'react';

export default function useMyObjects() {
    const { objectState } = useContext(ObjectContext),
        objects = objectState.objects;

    return { objects };
}
