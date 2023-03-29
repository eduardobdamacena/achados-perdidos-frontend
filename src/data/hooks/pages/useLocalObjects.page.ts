import { ShortObjectInterface } from 'data/@types/ObjectInterface';
import { PlaceInterface } from 'data/@types/PlaceInterface';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { useContext, useEffect, useMemo, useState } from 'react';
import { LocalContext } from 'data/context/LocalContext';
import usePagination from '../usePagination.hook';
import { BrowserService } from 'data/services/BrowserService';

export default function useLocalObjects(id: string) {
    const [localObjects, setLocalObjects] = useState<ShortObjectInterface[]>(
            []
        ),
        { locationsState } = useContext(LocalContext),
        [localSelected, setLocalSelected] = useState<PlaceInterface>(),
        [seeContact, setSeeContact] = useState(false),
        [isFetching, setIsFetching] = useState(false),
        { currentPage, setCurrentPage, totalPages, itemsPerPage } =
            usePagination(localObjects, 5),
        listData = useMemo<ShortObjectInterface[]>(() => {
            if (itemsPerPage !== undefined && currentPage !== undefined) {
                return localObjects.slice(
                    (currentPage - 1) * itemsPerPage,
                    (currentPage - 1) * itemsPerPage + itemsPerPage
                );
            }
            return localObjects;
        }, [localObjects, itemsPerPage, currentPage]);

    useEffect(() => {
        BrowserService.scrollToTop();
    }, [currentPage]);

    useEffect(() => {
        if (id) {
            const local = locationsState.locations.find(
                (item) => item.id == Number(id)
            );
            if (local) {
                setLocalSelected(local);
                setIsFetching(true);
                try {
                    ApiServiceHateoas(
                        local.links,
                        'objetos_local',
                        async (request) => {
                            const response = await request<
                                ShortObjectInterface[]
                            >();
                            setLocalObjects(response.data);
                            setIsFetching(false);
                        }
                    );
                } catch (error) {
                    setIsFetching(false);
                }
            }
        }
    }, [id]);

    return {
        listData,
        localSelected,
        seeContact,
        setSeeContact,
        isFetching,
        currentPage,
        setCurrentPage,
        totalPages,
    };
}
