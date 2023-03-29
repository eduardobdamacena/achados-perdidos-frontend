import { ShortObjectInterface } from 'data/@types/ObjectInterface';
import { PlaceInterface } from 'data/@types/PlaceInterface';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { useContext, useEffect, useState } from 'react';
import { LocalContext } from 'data/context/LocalContext';

export default function useLocalObjects(id: string) {
    const [localObjects, setLocalObjects] = useState<ShortObjectInterface[]>(
            []
        ),
        { locationsState } = useContext(LocalContext),
        [localSelected, setLocalSelected] = useState<PlaceInterface>(),
        [seeContact, setSeeContact] = useState(false),
        [isFetching, setIsFetching] = useState(false);

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
        localObjects,
        localSelected,
        seeContact,
        setSeeContact,
        isFetching,
    };
}
