import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

export const privateRoutes = ['/object', '/new-object', '/edit-object'];
export const publicRoutes = ['/register-user-place', '/login'];

export default function useRouterGuard(
    userPlace: UserPlaceInterface,
    isLogging: boolean
): NextRouter {
    const router = useRouter();
    const isLogged = userPlace.usuario.nome.length > 0;

    useEffect(() => {
        handleNavigation(router.route);

        router.events.on('routeChangeStart', handleNavigation);

        return () => {
            router.events.off('routeChangeStart', handleNavigation);
        };
    }, [router, isLogged, isLogging]);

    function handleNavigation(url: string) {
        if (!isLogging) {
            if (privateRoutes.includes(url) && !isLogged) {
                router.replace('/login');
                return;
            }
            if (publicRoutes.includes(url) && isLogged) {
                router.replace(getHome());
            }
        }
    }

    function getHome() {
        return '/object';
    }

    return router;
}
