import { ObjectContext } from 'data/context/ObjectContext';
import { useContext } from 'react';
import usePagination from '../usePagination.hook';

export default function useMyObjects() {
    const { objectState } = useContext(ObjectContext),
        objects = objectState.objects,
        { currentPage, setCurrentPage, totalPages, itemsPerPage } =
            usePagination(objects, 5);

    return { objects, currentPage, setCurrentPage, totalPages, itemsPerPage };
}
