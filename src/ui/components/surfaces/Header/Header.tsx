import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { AppBarStyled, HeaderLogo } from './Header.style';
import { Typography } from '@mui/material';
import UserHeaderMenu from 'ui/components/navigation/UserHeaderMenu/UserHeaderMenu';
import { useState } from 'react';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface HeaderProps {
    userPlace: UserPlaceInterface;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false),
        hasUser = props.userPlace.usuario.nome.length > 0,
        router = useRouter(),
        pathname = router?.pathname;
    return (
        <AppBarStyled position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href={'/'}>
                        <HeaderLogo
                            src="/logo.png"
                            style={{ cursor: 'pointer' }}
                        />
                    </Link>
                    <></>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    {hasUser && (
                        <UserHeaderMenu
                            user_name={props.userPlace.usuario.nome}
                            open={isMenuOpen}
                            onClick={() => setMenuOpen(true)}
                            onMenuClick={() => setMenuOpen(false)}
                            onLogout={props.onLogout}
                            onMenuClose={() => setMenuOpen(false)}
                        />
                    )}
                    {!hasUser && pathname !== '/register-user-place' && (
                        <Link href={'/register-user-place'}>
                            <RoudedButton variant="contained">
                                Cadastrar um local
                            </RoudedButton>
                        </Link>
                    )}
                </Toolbar>
            </Container>
        </AppBarStyled>
    );
};
export default Header;
