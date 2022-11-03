import { styled } from '@mui/material';

export const LoginContainer = styled('div')`
    display: grid;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    grid-template-columns: minmax(200px, 950px);
`;
