import React, { ReactNode } from 'react';
import { ExternalServicesProvider } from './ExternalServicesContext';
import { UserPlaceProvider } from './UserPlaceContext';

export const MainProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <>
            <ExternalServicesProvider>
                <UserPlaceProvider>{children}</UserPlaceProvider>
            </ExternalServicesProvider>
        </>
    );
};
