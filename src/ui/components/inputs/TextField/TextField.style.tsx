import { TextField, styled } from '@mui/material';

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        border-radius: 5px;
        ${({ theme }) => theme.breakpoints.down('md')} {
            font-size: 12px;
            font-weight: 400;
        }
    }
`;
