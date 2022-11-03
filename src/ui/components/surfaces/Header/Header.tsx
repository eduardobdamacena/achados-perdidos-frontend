import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { AppBarStyled, HeaderLogo } from './Header.style';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';

const Header = () => {
    return (
        <AppBarStyled position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HeaderLogo src="/logo.png" />
                </Toolbar>
            </Container>
        </AppBarStyled>
    );
};
export default Header;
