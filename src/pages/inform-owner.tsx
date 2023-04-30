import { InformOwnerPartial } from '@partials/objects/_inform-owner-partial';
import { ObjectProvider } from 'data/context/ObjectContext';
import { NextPage } from 'next';

const InformOwner: NextPage = () => {
    return (
        <ObjectProvider>
            <InformOwnerPartial />
        </ObjectProvider>
    );
};

export default InformOwner;
