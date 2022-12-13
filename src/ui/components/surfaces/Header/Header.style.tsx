import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
    &.MuiAppBar-root {
        background-color: ${({ theme }) => theme.palette.background.paper};
        box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
        color: ${({ theme }) => theme.palette.text.secondary};
        border-bottom: 1px solid #9eadba;
    }
`;

export const HeaderLogo = styled('img')`
    height: 40px;
    margin: ${({ theme }) => theme.spacing()};
    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 50px;
    }
`;
