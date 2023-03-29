import { PlaceInterface } from 'data/@types/PlaceInterface';
import { ExternalServicesContext } from 'data/context/ExternalServicesContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { useContext, useEffect, useMemo, useState } from 'react';
import { LocalContext } from 'data/context/LocalContext';
import usePagination from '../usePagination.hook';
import { BrowserService } from 'data/services/BrowserService';

export default function useSearchLocations(searchTerm: string) {
    const {
            externalServicesState: { externalServices },
        } = useContext(ExternalServicesContext),
        { locationsState, locationsDispatch } = useContext(LocalContext),
        locations = locationsState.locations,
        [isFetching, setIsFetching] = useState(false),
        { currentPage, setCurrentPage, totalPages, itemsPerPage } =
            usePagination(locations, 5),
        listData = useMemo<PlaceInterface[]>(() => {
            if (itemsPerPage !== undefined && currentPage !== undefined) {
                return locations.slice(
                    (currentPage - 1) * itemsPerPage,
                    (currentPage - 1) * itemsPerPage + itemsPerPage
                );
            }
            return locations;
        }, [locations, itemsPerPage, currentPage]);

    useEffect(() => {
        if (searchTerm) {
            searchLocations();
        }
    }, [searchTerm]);

    useEffect(() => {
        BrowserService.scrollToTop();
    }, [currentPage]);

    function searchLocations() {
        try {
            setIsFetching(true);
            ApiServiceHateoas(
                externalServices,
                'busca_local',
                async (request) => {
                    const response = await request<PlaceInterface[]>({
                        params: { nome: searchTerm },
                    });
                    locationsDispatch({
                        type: 'SET_LOCATIONS',
                        payload: response.data,
                    });
                    setIsFetching(false);
                }
            );
        } catch (error) {
            setIsFetching(false);
        }
    }

    return {
        listData,
        isFetching,
        currentPage,
        setCurrentPage,
        totalPages,
    };
}
