import { styled } from '@mui/material';

export const BaseGrid = styled('div')`
    display: grid;
    grid-auto-rows: auto;
    gap: ${({ theme }) => theme.spacing(3)};
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
    } ;
`;

export const FormContainer = styled(BaseGrid)``;

export const PageFormContainerBorder = styled('div')`
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(200px, 950px);
    border: 1px solid ${({ theme }) => theme.palette.grey[600]};
    padding: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(1)};
    gap: ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.down('md')} {
        padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(2)};
        gap: ${({ theme }) => theme.spacing(1)};
    }
`;
