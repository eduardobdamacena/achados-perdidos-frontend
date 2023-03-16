import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
    &.MuiAppBar-root {
        background-color: ${({ theme }) => theme.palette.background.paper};
        box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
        color: ${({ theme }) => theme.palette.text.secondary};
        border-bottom: 1px solid #9eadba;
        margin-bottom: 54px;
        ${({ theme }) => theme.breakpoints.down('md')} {
            margin-bottom: 25px;
        }
    }
`;

export const HeaderLogo = styled('img')`
    height: 40px;
    margin: ${({ theme }) => theme.spacing(4) + ' 0px'};
    height: 64px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        height: 30px;
    }
`;

export const OptionsContainer = styled('div')`
    display: flex;
    flex: 1;
    margin: ${({ theme }) => '0px ' + theme.spacing(4) + ' 0px'};
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 18px;
    font-weight: 400;
`;
