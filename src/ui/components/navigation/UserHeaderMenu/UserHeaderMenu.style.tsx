import { Button, styled } from '@mui/material';
import Menu from '@mui/material/Menu';

export const ButtonMenuStyled = styled(Button)`
    &.MuiButtonBase-root {
        padding: 0 0 0 29px;
        height: 54px;
        ${({ theme }) => theme.breakpoints.down('md')} {
            padding: 0 13px;
            font-size: 11px;
            height: 28px;
        }
    }

    .MuiButton-endIcon svg {
        padding: 0 10px 0 0;
        border-left: 1px solid black;
        font-size: 32px;
        width: 54px;
        height: 54px;

        ${({ theme }) => theme.breakpoints.down('md')} {
            padding: 0 0 0 5px;
            width: 28px;
            height: 28px;
        }
    }
    font-size: 18px;
    font-weight: 400;
`;
export const StyledMenu = styled(Menu)``;
