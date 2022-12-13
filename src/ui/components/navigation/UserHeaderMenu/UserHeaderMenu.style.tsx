import { Button, styled } from '@mui/material';
import Menu from '@mui/material/Menu';

export const ButtonMenuStyled = styled(Button)`
    &.MuiButtonBase-root {
        padding: 0px ${({ theme }) => theme.spacing()};
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 11px;
        }
    }

    .MuiButton-endIcon svg {
        border-left: 1px solid black;
        font-size: ${({ theme }) => theme.spacing(5)};
    }
`;
export const StyledMenu = styled(Menu)``;
