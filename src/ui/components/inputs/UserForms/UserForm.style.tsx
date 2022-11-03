import { styled } from '@mui/material';

export const BaseGrid = styled('div')`
    display: grid;
    grid-auto-rows: auto;
    gap: ${({ theme }) => theme.spacing(3)};
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
    } ;
`;

export const LoginData = styled(BaseGrid)`
    border: 1px solid ${({ theme }) => theme.palette.grey[600]};
    padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(8)};
    margin: ${({ theme }) => theme.spacing(3) + ' ' + 0};

    ${({ theme }) => theme.breakpoints.down('md')} {
        padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(2)};
        gap: ${({ theme }) => theme.spacing(1)};
    }
`;
