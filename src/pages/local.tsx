import type { NextPage } from 'next';
import { LocalProvider } from 'data/context/LocalContext';
import { ListLocal } from '@partials/Local/_list-local';
import { useRouter } from 'next/router';
import { ListLocalObjects } from '@partials/Local/_list-local-objects';

const LocalPage: NextPage = () => {
    const router = useRouter();

    return (
        <LocalProvider>
            {router.query.search && <ListLocal />}
            {router.query.id && <ListLocalObjects />}
        </LocalProvider>
    );
};

export default LocalPage;
