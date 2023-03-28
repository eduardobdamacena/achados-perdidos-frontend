import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useIndex() {
    const [searchTerm, setSearchTerm] = useState(''),
        [error, setError] = useState(''),
        router = useRouter();

    function searchLocations() {
        setError('');
        if (searchTerm.length == 0) {
            setError('Digite um nome válido');
            return;
        }
        router.push('local?search=' + searchTerm);
    }

    return {
        searchLocations,
        searchTerm,
        setSearchTerm,
        error,
    };
}
