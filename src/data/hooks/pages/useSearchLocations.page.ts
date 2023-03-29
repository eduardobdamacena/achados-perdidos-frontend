import { PlaceInterface } from 'data/@types/PlaceInterface';
import { ExternalServicesContext } from 'data/context/ExternalServicesContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { useContext, useEffect, useState } from 'react';
import { LocalContext } from 'data/context/LocalContext';

export default function useSearchLocations(searchTerm: string) {
    const {
            externalServicesState: { externalServices },
        } = useContext(ExternalServicesContext),
        { locationsState, locationsDispatch } = useContext(LocalContext),
        locations = locationsState.locations,
        [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if (searchTerm) {
            searchLocations();
        }
    }, [searchTerm]);

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
        locations,
        isFetching,
    };
}
