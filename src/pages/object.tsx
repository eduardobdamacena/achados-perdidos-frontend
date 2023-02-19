import { MyObjects } from '@partials/objects/_my-objects';
import { ObjectProvider } from 'data/context/ObjectContext';
import { NextPage } from 'next';

const ObjectPage: NextPage = () => {
    return (
        <ObjectProvider>
            <MyObjects />
        </ObjectProvider>
    );
};

export default ObjectPage;
