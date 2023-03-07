import { ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Container from '@mui/material/Container/Container';
import '@styles/globals.css';
import { MainProvider } from 'data/context/MainContext';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import useRouterGuard, { privateRoutes } from 'data/hooks/useRouterGuard.hook';
import { LoginService } from 'data/services/LoginService';
import type { AppProps } from 'next/app';
import { useContext, useEffect } from 'react';
import Header from 'ui/components/surfaces/Header/Header';
import theme from 'ui/themes/light-theme';

function MyApp({ Component, pageProps }: AppProps) {
    const { userPlaceState } = useContext(UserPlaceContext);
    const router = useRouterGuard(
        userPlaceState.userPlace,
        userPlaceState.isLogging
    );

    function canShow(): boolean {
        if (privateRoutes.includes(router.pathname)) {
            if (userPlaceState.isLogging) {
                return false;
            } else {
                return userPlaceState.userPlace.usuario.nome.length > 0;
            }
        }
        return true;
    }

    function onLogout() {
        LoginService.logout();
        window.location.reload();
    }

    return (
        <ThemeProvider theme={theme}>
            <Header userPlace={userPlaceState.userPlace} onLogout={onLogout} />
            {canShow() ? (
                <>
                    <Component {...pageProps} />
                </>
            ) : (
                <Container sx={{ textAlign: 'center', my: 10 }}>
                    <CircularProgress />
                </Container>
            )}
        </ThemeProvider>
    );
}

const AppProviderContainer: React.FC<AppProps> = (props) => {
    return (
        <MainProvider>
            <MyApp {...props} />
        </MainProvider>
    );
};

export default AppProviderContainer;
