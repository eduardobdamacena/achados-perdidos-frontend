import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

const RoudedButtonStyled = styled(LoadingButton)`
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 13px;
    }
`;

export default RoudedButtonStyled;
