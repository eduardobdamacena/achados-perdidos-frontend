import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

const RoudedButtonStyled = styled(LoadingButton)`
    border-radius: 5px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 11px;
    }
`;

export default RoudedButtonStyled;
