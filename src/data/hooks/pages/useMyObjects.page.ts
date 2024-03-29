import { ObjectContext } from 'data/context/ObjectContext';
import { useContext, useState } from 'react';
import usePagination from '../usePagination.hook';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { mutate } from 'swr';
import { ObjectInterface } from 'data/@types/ObjectInterface';

export default function useMyObjects() {
    const { objectState } = useContext(ObjectContext),
        objects = objectState.objects,
        { currentPage, setCurrentPage, totalPages, itemsPerPage } =
            usePagination(objects, 5),
        [objectRemove, setObjectRemove] = useState({} as ObjectInterface),
        [messageSnackbar, setMessageSnackbar] = useState('');

    function removeObject(objectId: number) {
        const objectSelected = objects.find(
            (item) => item.id == Number(objectId)
        );
        if (objectSelected) {
            ApiServiceHateoas(
                objectSelected.links,
                'apagar_objeto',
                async (request) => {
                    try {
                        await request();
                        updateObjects();
                        setObjectRemove({} as ObjectInterface);
                        setMessageSnackbar('Objeto removido com sucesso!');
                    } catch (error) {
                        console.log(error);
                    }
                }
            );
        }
    }

    function updateObjects() {
        mutate('listar_objetos_local');
    }

    return {
        objects,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
        removeObject,
        messageSnackbar,
        objectRemove,
        setObjectRemove,
        setMessageSnackbar,
    };
}
