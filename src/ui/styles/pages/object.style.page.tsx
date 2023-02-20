import { styled } from '@mui/material/styles';

export const FormElementsContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(6.5)};
    ${({ theme }) => theme.breakpoints.down('md')} {
        gap: ${({ theme }) => theme.spacing(3.5)};
    }
`;
